import * as React from 'react';
import { StyleSheet, Animated, SafeAreaView, TouchableWithoutFeedback, View, } from 'react-native';
import color from 'color';
import FAB from './FAB';
import Text from '../Typography/Text';
import Card from '../Card/Card';
import { withTheme } from '../../core/theming';
/**
 * A component to display a stack of FABs with related actions in a speed dial.
 * To render the group above other components, you'll need to wrap it with the [`Portal`](portal.html) component.
 *
 * <div class="screenshots">
 *   <img src="screenshots/fab-group.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { FAB, Portal, Provider } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     open: false,
 *   };
 *
 *   _onStateChange = ({ open }) => this.setState({ open });
 *
 *   render() {
 *     const { open } = this.state;
 *
 *     return (
 *       <Provider>
 *          <Portal>
 *            <FAB.Group
 *              open={open}
 *              icon={open ? 'calendar-today' : 'plus'}
 *              actions={[
 *                { icon: 'plus', onPress: () => console.log('Pressed add') },
 *                { icon: 'star', label: 'Star', onPress: () => console.log('Pressed star')},
 *                { icon: 'email', label: 'Email', onPress: () => console.log('Pressed email') },
 *                { icon: 'bell', label: 'Remind', onPress: () => console.log('Pressed notifications') },
 *              ]}
 *              onStateChange={this._onStateChange}
 *              onPress={() => {
 *                if (open) {
 *                  // do something if the speed dial is open
 *                }
 *              }}
 *            />
 *          </Portal>
 *       </Provider>
 *     );
 *   }
 * }
 * ```
 */
let FABGroup = /** @class */ (() => {
    class FABGroup extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                backdrop: new Animated.Value(0),
                animations: [],
            };
            this.close = () => this.props.onStateChange({ open: false });
            this.toggle = () => this.props.onStateChange({ open: !this.props.open });
        }
        static getDerivedStateFromProps(nextProps, prevState) {
            return {
                animations: nextProps.actions.map((_, i) => prevState.animations[i] || new Animated.Value(nextProps.open ? 1 : 0)),
            };
        }
        componentDidUpdate(prevProps) {
            if (this.props.open === prevProps.open) {
                return;
            }
            const { scale } = this.props.theme.animation;
            if (this.props.open) {
                Animated.parallel([
                    Animated.timing(this.state.backdrop, {
                        toValue: 1,
                        duration: 250 * scale,
                        useNativeDriver: true,
                    }),
                    Animated.stagger(50 * scale, this.state.animations
                        .map(animation => Animated.timing(animation, {
                        toValue: 1,
                        duration: 150 * scale,
                        useNativeDriver: true,
                    }))
                        .reverse()),
                ]).start();
            }
            else {
                Animated.parallel([
                    Animated.timing(this.state.backdrop, {
                        toValue: 0,
                        duration: 200 * scale,
                        useNativeDriver: true,
                    }),
                    ...this.state.animations.map(animation => Animated.timing(animation, {
                        toValue: 0,
                        duration: 150 * scale,
                        useNativeDriver: true,
                    })),
                ]).start();
            }
        }
        render() {
            const { actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, } = this.props;
            const { colors } = theme;
            const labelColor = theme.dark
                ? colors.text
                : color(colors.text)
                    .fade(0.54)
                    .rgb()
                    .string();
            const backdropOpacity = open
                ? this.state.backdrop.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 1, 1],
                })
                : this.state.backdrop;
            const opacities = this.state.animations;
            const scales = opacities.map(opacity => open
                ? opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                })
                : 1);
            return (React.createElement(View, { pointerEvents: "box-none", style: [styles.container, style] },
                React.createElement(TouchableWithoutFeedback, { onPress: this.close },
                    React.createElement(Animated.View, { pointerEvents: open ? 'auto' : 'none', style: [
                            styles.backdrop,
                            {
                                opacity: backdropOpacity,
                                backgroundColor: colors.backdrop,
                            },
                        ] })),
                React.createElement(SafeAreaView, { pointerEvents: "box-none", style: styles.safeArea },
                    React.createElement(View, { pointerEvents: open ? 'box-none' : 'none' }, actions.map((it, i) => (React.createElement(View, { key: i, style: styles.item, pointerEvents: open ? 'box-none' : 'none' },
                        it.label && (React.createElement(Card, { style: [
                                styles.label,
                                {
                                    transform: [{ scale: scales[i] }],
                                    opacity: opacities[i],
                                },
                            ], onPress: () => {
                                it.onPress();
                                this.close();
                            }, accessibilityLabel: it.accessibilityLabel !== 'undefined'
                                ? it.accessibilityLabel
                                : it.label, accessibilityTraits: "button", accessibilityComponentType: "button", accessibilityRole: "button" },
                            React.createElement(Text, { style: { color: labelColor } }, it.label))),
                        React.createElement(FAB, { small: true, icon: it.icon, color: it.color, style: [
                                {
                                    transform: [{ scale: scales[i] }],
                                    opacity: opacities[i],
                                    backgroundColor: theme.colors.surface,
                                },
                                it.style,
                            ], onPress: () => {
                                it.onPress();
                                this.close();
                            }, accessibilityLabel: typeof it.accessibilityLabel !== 'undefined'
                                ? it.accessibilityLabel
                                : it.label, accessibilityTraits: "button", accessibilityComponentType: "button", accessibilityRole: "button", testID: it.testID, visible: open }))))),
                    React.createElement(FAB, { onPress: () => {
                            onPress?.();
                            this.toggle();
                        }, icon: icon, color: this.props.color, accessibilityLabel: accessibilityLabel, accessibilityTraits: "button", accessibilityComponentType: "button", accessibilityRole: "button", style: [styles.fab, fabStyle], visible: visible, testID: testID }))));
        }
    }
    FABGroup.displayName = 'FAB.Group';
    return FABGroup;
})();
export default withTheme(FABGroup);
// @component-docs ignore-next-line
export { FABGroup };
const styles = StyleSheet.create({
    safeArea: {
        alignItems: 'flex-end',
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
    },
    fab: {
        marginHorizontal: 16,
        marginBottom: 16,
        marginTop: 0,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
    },
    label: {
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2,
    },
    item: {
        marginHorizontal: 24,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
