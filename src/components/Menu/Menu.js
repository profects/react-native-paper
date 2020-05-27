import * as React from 'react';
import { Platform, StyleSheet, Animated, BackHandler, Dimensions, Easing, I18nManager, TouchableWithoutFeedback, View, ScrollView, findNodeHandle, } from 'react-native';
import { withTheme } from '../../core/theming';
import Portal from '../Portal/Portal';
import Surface from '../Surface';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MenuItem from './MenuItem';
import { APPROX_STATUSBAR_HEIGHT } from '../../constants';
// Minimum padding between the edge of the screen and the menu
const SCREEN_INDENT = 8;
// From https://material.io/design/motion/speed.html#duration
const ANIMATION_DURATION = 250;
// From the 'Standard easing' section of https://material.io/design/motion/speed.html#easing
const EASING = Easing.bezier(0.4, 0, 0.2, 1);
/**
 * Menus display a list of choices on temporary elevated surfaces. Their placement varies based on the element that opens them.
 *
 *  <div class="screenshots">
 *   <img class="medium" src="screenshots/menu-1.png" />
 *   <img class="medium" src="screenshots/menu-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     visible: false,
 *   };
 *
 *   _openMenu = () => this.setState({ visible: true });
 *
 *   _closeMenu = () => this.setState({ visible: false });
 *
 *   render() {
 *     return (
 *       <Provider>
 *         <View
 *           style={{
 *             paddingTop: 50,
 *             flexDirection: 'row',
 *             justifyContent: 'center'
 *           }}>
 *           <Menu
 *             visible={this.state.visible}
 *             onDismiss={this._closeMenu}
 *             anchor={
 *               <Button onPress={this._openMenu}>Show menu</Button>
 *             }
 *           >
 *             <Menu.Item onPress={() => {}} title="Item 1" />
 *             <Menu.Item onPress={() => {}} title="Item 2" />
 *             <Divider />
 *             <Menu.Item onPress={() => {}} title="Item 3" />
 *           </Menu>
 *         </View>
 *       </Provider>
 *     );
 *   }
 * }
 * ```
 */
let Menu = /** @class */ (() => {
    class Menu extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                rendered: this.props.visible,
                top: 0,
                left: 0,
                menuLayout: { width: 0, height: 0 },
                anchorLayout: { width: 0, height: 0 },
                opacityAnimation: new Animated.Value(0),
                scaleAnimation: new Animated.ValueXY({ x: 0, y: 0 }),
            };
            this.anchor = null;
            this.menu = null;
            this.isAnchorCoord = () => !React.isValidElement(this.props.anchor);
            this.measureMenuLayout = () => new Promise(resolve => {
                if (this.menu) {
                    this.menu.measureInWindow((x, y, width, height) => {
                        resolve({ x, y, width, height });
                    });
                }
            });
            this.measureAnchorLayout = () => new Promise(resolve => {
                const { anchor } = this.props;
                if (this.isAnchorCoord()) {
                    // @ts-ignore
                    resolve({ x: anchor.x, y: anchor.y, width: 0, height: 0 });
                    return;
                }
                if (this.anchor) {
                    this.anchor.measureInWindow((x, y, width, height) => {
                        resolve({ x, y, width, height });
                    });
                }
            });
            this.updateVisibility = async () => {
                // Menu is rendered in Portal, which updates items asynchronously
                // We need to do the same here so that the ref is up-to-date
                await Promise.resolve();
                if (this.props.visible) {
                    this.show();
                }
                else {
                    this.hide();
                }
            };
            this.isBrowser = () => Platform.OS === 'web' && 'document' in global;
            this.focusFirstDOMNode = (el) => {
                if (el && this.isBrowser()) {
                    // When in the browser, we want to focus the first focusable item on toggle
                    // For example, when menu is shown, focus the first item in the menu
                    // And when menu is dismissed, send focus back to the button to resume tabbing
                    const node = findNodeHandle(el);
                    const focusableNode = node.querySelector(
                    // This is a rough list of selectors that can be focused
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                    focusableNode?.focus();
                }
            };
            this.handleDismiss = () => {
                if (this.props.visible) {
                    this.props.onDismiss();
                }
                return true;
            };
            this.handleKeypress = (e) => {
                if (e.key === 'Escape') {
                    this.props.onDismiss();
                }
            };
            this.attachListeners = () => {
                BackHandler.addEventListener('hardwareBackPress', this.handleDismiss);
                Dimensions.addEventListener('change', this.handleDismiss);
                this.isBrowser() && document.addEventListener('keyup', this.handleKeypress);
            };
            this.removeListeners = () => {
                BackHandler.removeEventListener('hardwareBackPress', this.handleDismiss);
                Dimensions.removeEventListener('change', this.handleDismiss);
                this.isBrowser() &&
                    document.removeEventListener('keyup', this.handleKeypress);
            };
            this.show = async () => {
                const windowLayout = Dimensions.get('window');
                const [menuLayout, anchorLayout] = await Promise.all([
                    this.measureMenuLayout(),
                    this.measureAnchorLayout(),
                ]);
                // When visible is true for first render
                // native views can be still not rendered and
                // measureMenuLayout/measureAnchorLayout functions
                // return wrong values e.g { x:0, y: 0, width: 0, height: 0 }
                // so we have to wait until views are ready
                // and rerun this function to show menu
                if (!windowLayout.width ||
                    !windowLayout.height ||
                    !menuLayout.width ||
                    !menuLayout.height ||
                    (!anchorLayout.width && !this.isAnchorCoord()) ||
                    (!anchorLayout.height && !this.isAnchorCoord())) {
                    requestAnimationFrame(this.show);
                    return;
                }
                this.setState(() => ({
                    left: anchorLayout.x,
                    top: anchorLayout.y,
                    anchorLayout: {
                        height: anchorLayout.height,
                        width: anchorLayout.width,
                    },
                    menuLayout: {
                        width: menuLayout.width,
                        height: menuLayout.height,
                    },
                }), () => {
                    this.attachListeners();
                    const { animation } = this.props.theme;
                    Animated.parallel([
                        Animated.timing(this.state.scaleAnimation, {
                            toValue: { x: menuLayout.width, y: menuLayout.height },
                            duration: ANIMATION_DURATION * animation.scale,
                            easing: EASING,
                            useNativeDriver: true,
                        }),
                        Animated.timing(this.state.opacityAnimation, {
                            toValue: 1,
                            duration: ANIMATION_DURATION * animation.scale,
                            easing: EASING,
                            useNativeDriver: true,
                        }),
                    ]).start(({ finished }) => {
                        if (finished) {
                            this.focusFirstDOMNode(this.menu);
                        }
                    });
                });
            };
            this.hide = () => {
                this.removeListeners();
                const { animation } = this.props.theme;
                Animated.timing(this.state.opacityAnimation, {
                    toValue: 0,
                    duration: ANIMATION_DURATION * animation.scale,
                    easing: EASING,
                    useNativeDriver: true,
                }).start(finished => {
                    if (finished) {
                        this.setState({ menuLayout: { width: 0, height: 0 }, rendered: false });
                        this.state.scaleAnimation.setValue({ x: 0, y: 0 });
                        this.focusFirstDOMNode(this.anchor);
                    }
                });
            };
        }
        static getDerivedStateFromProps(nextProps, prevState) {
            if (nextProps.visible && !prevState.rendered) {
                return { rendered: true };
            }
            return null;
        }
        componentDidUpdate(prevProps) {
            if (prevProps.visible !== this.props.visible) {
                this.updateVisibility();
            }
        }
        componentWillUnmount() {
            this.removeListeners();
        }
        render() {
            const { visible, anchor, contentStyle, style, children, theme, statusBarHeight, onDismiss, } = this.props;
            const { rendered, menuLayout, anchorLayout, opacityAnimation, scaleAnimation, } = this.state;
            let { left, top } = this.state;
            // I don't know why but on Android measure function is wrong by 24
            const additionalVerticalValue = Platform.select({
                android: statusBarHeight,
                default: 0,
            });
            const scaleTransforms = [
                {
                    scaleX: scaleAnimation.x.interpolate({
                        inputRange: [0, menuLayout.width],
                        outputRange: [0, 1],
                    }),
                },
                {
                    scaleY: scaleAnimation.y.interpolate({
                        inputRange: [0, menuLayout.height],
                        outputRange: [0, 1],
                    }),
                },
            ];
            const windowLayout = Dimensions.get('window');
            // We need to translate menu while animating scale to imitate transform origin for scale animation
            const positionTransforms = [];
            // Check if menu fits horizontally and if not align it to right.
            if (left <= windowLayout.width - menuLayout.width - SCREEN_INDENT) {
                positionTransforms.push({
                    translateX: scaleAnimation.x.interpolate({
                        inputRange: [0, menuLayout.width],
                        outputRange: [-(menuLayout.width / 2), 0],
                    }),
                });
                // Check if menu position has enough space from left side
                if (left < SCREEN_INDENT) {
                    left = SCREEN_INDENT;
                }
            }
            else {
                positionTransforms.push({
                    translateX: scaleAnimation.x.interpolate({
                        inputRange: [0, menuLayout.width],
                        outputRange: [menuLayout.width / 2, 0],
                    }),
                });
                left += anchorLayout.width - menuLayout.width;
                const right = left + menuLayout.width;
                // Check if menu position has enough space from right side
                if (right > windowLayout.width - SCREEN_INDENT) {
                    left = windowLayout.width - SCREEN_INDENT - menuLayout.width;
                }
            }
            // If the menu is larger than available vertical space,
            // calculate the height of scrollable view
            let scrollableMenuHeight = 0;
            // Check if the menu should be scrollable
            if (
            // Check if the menu overflows from bottom side
            top >=
                windowLayout.height -
                    menuLayout.height -
                    SCREEN_INDENT -
                    additionalVerticalValue &&
                // And bottom side of the screen has more space than top side
                top <= windowLayout.height - top) {
                // Scrollable menu should be below the anchor (expands downwards)
                scrollableMenuHeight =
                    windowLayout.height - top - SCREEN_INDENT - additionalVerticalValue;
            }
            else if (
            // Check if the menu overflows from bottom side
            top >=
                windowLayout.height -
                    menuLayout.height -
                    SCREEN_INDENT -
                    additionalVerticalValue &&
                // And top side of the screen has more space than bottom side
                top >= windowLayout.height - top &&
                // And menu overflows from top side
                top <=
                    menuLayout.height -
                        anchorLayout.height +
                        SCREEN_INDENT -
                        additionalVerticalValue) {
                // Scrollable menu should be above the anchor (expands upwards)
                scrollableMenuHeight =
                    top + anchorLayout.height - SCREEN_INDENT + additionalVerticalValue;
            }
            // Scrollable menu max height
            scrollableMenuHeight =
                scrollableMenuHeight > windowLayout.height - 2 * SCREEN_INDENT
                    ? windowLayout.height - 2 * SCREEN_INDENT
                    : scrollableMenuHeight;
            // Menu is typically positioned below the element that generates it
            // So first check if it fits below the anchor (expands downwards)
            if (
            // Check if menu fits vertically
            top <=
                windowLayout.height -
                    menuLayout.height -
                    SCREEN_INDENT -
                    additionalVerticalValue ||
                // Or if the menu overflows from bottom side
                (top >=
                    windowLayout.height -
                        menuLayout.height -
                        SCREEN_INDENT -
                        additionalVerticalValue &&
                    // And bottom side of the screen has more space than top side
                    top <= windowLayout.height - top)) {
                positionTransforms.push({
                    translateY: scaleAnimation.y.interpolate({
                        inputRange: [0, menuLayout.height],
                        outputRange: [-((scrollableMenuHeight || menuLayout.height) / 2), 0],
                    }),
                });
                // Check if menu position has enough space from top side
                if (top < SCREEN_INDENT) {
                    top = SCREEN_INDENT;
                }
            }
            else {
                positionTransforms.push({
                    translateY: scaleAnimation.y.interpolate({
                        inputRange: [0, menuLayout.height],
                        outputRange: [(scrollableMenuHeight || menuLayout.height) / 2, 0],
                    }),
                });
                top += anchorLayout.height - (scrollableMenuHeight || menuLayout.height);
                const bottom = top +
                    (scrollableMenuHeight || menuLayout.height) +
                    additionalVerticalValue;
                // Check if menu position has enough space from bottom side
                if (bottom > windowLayout.height - SCREEN_INDENT) {
                    top =
                        scrollableMenuHeight === windowLayout.height - 2 * SCREEN_INDENT
                            ? -SCREEN_INDENT * 2
                            : windowLayout.height -
                                menuLayout.height -
                                SCREEN_INDENT -
                                additionalVerticalValue;
                }
            }
            const shadowMenuContainerStyle = {
                opacity: opacityAnimation,
                transform: scaleTransforms,
                borderRadius: theme.roundness,
                ...(scrollableMenuHeight ? { height: scrollableMenuHeight } : {}),
            };
            const positionStyle = {
                top: this.isAnchorCoord() ? top : top + additionalVerticalValue,
                ...(I18nManager.isRTL ? { right: left } : { left }),
            };
            return (React.createElement(View, { ref: ref => {
                    this.anchor = ref;
                }, collapsable: false },
                this.isAnchorCoord() ? null : anchor,
                rendered ? (React.createElement(Portal, null,
                    React.createElement(TouchableWithoutFeedback, { onPress: onDismiss },
                        React.createElement(View, { style: StyleSheet.absoluteFill })),
                    React.createElement(View, { ref: ref => {
                            this.menu = ref;
                        }, collapsable: false, accessibilityViewIsModal: visible, style: [styles.wrapper, positionStyle, style], pointerEvents: visible ? 'box-none' : 'none' },
                        React.createElement(Animated.View, { style: { transform: positionTransforms } },
                            React.createElement(Surface, { style: [
                                    styles.shadowMenuContainer,
                                    shadowMenuContainerStyle,
                                    contentStyle,
                                ] }, (scrollableMenuHeight && (React.createElement(ScrollView, null, children))) || React.createElement(React.Fragment, null, children)))))) : null));
        }
    }
    // @component ./MenuItem.tsx
    Menu.Item = MenuItem;
    Menu.defaultProps = {
        statusBarHeight: APPROX_STATUSBAR_HEIGHT,
    };
    return Menu;
})();
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
    },
    shadowMenuContainer: {
        opacity: 0,
        paddingVertical: 8,
        elevation: 8,
    },
});
export default withTheme(Menu);
