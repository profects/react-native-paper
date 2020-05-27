import * as React from 'react';
import { Animated, BackHandler, Easing, StyleSheet, TouchableWithoutFeedback, } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Surface from './Surface';
import { withTheme } from '../core/theming';
const DEFAULT_DURATION = 220;
/**
 * The Modal component is a simple way to present content above an enclosing view.
 * To render the `Modal` above other components, you'll need to wrap it with the [`Portal`](portal.html) component.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/modal.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     visible: false,
 *   };
 *
 *   _showModal = () => this.setState({ visible: true });
 *   _hideModal = () => this.setState({ visible: false });
 *
 *   render() {
 *     const { visible } = this.state;
 *     return (
 *       <Provider>
 *          <Portal>
 *            <Modal visible={visible} onDismiss={this._hideModal}>
 *              <Text>Example Modal</Text>
 *            </Modal>
 *            <Button
 *              style={{ marginTop: 30 }}
 *              onPress={this._showModal}
 *            >
 *              Show
 *            </Button>
 *          </Portal>
 *       </Provider>
 *     );
 *   }
 * }
 * ```
 */
let Modal = /** @class */ (() => {
    class Modal extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                opacity: new Animated.Value(this.props.visible ? 1 : 0),
                rendered: this.props.visible,
            };
            this.handleBack = () => {
                if (this.props.dismissable) {
                    this.hideModal();
                }
                return true;
            };
            this.showModal = () => {
                BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
                BackHandler.addEventListener('hardwareBackPress', this.handleBack);
                const { opacity } = this.state;
                const { scale } = this.props.theme.animation;
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: scale * DEFAULT_DURATION,
                    easing: Easing.out(Easing.cubic),
                    useNativeDriver: true,
                }).start();
            };
            this.hideModal = () => {
                BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
                const { opacity } = this.state;
                const { scale } = this.props.theme.animation;
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: scale * DEFAULT_DURATION,
                    easing: Easing.out(Easing.cubic),
                    useNativeDriver: true,
                }).start(({ finished }) => {
                    if (!finished) {
                        return;
                    }
                    if (this.props.visible && this.props.onDismiss) {
                        this.props.onDismiss();
                    }
                    if (this.props.visible) {
                        this.showModal();
                    }
                    else {
                        this.setState({
                            rendered: false,
                        });
                    }
                });
            };
        }
        static getDerivedStateFromProps(nextProps, prevState) {
            if (nextProps.visible && !prevState.rendered) {
                return {
                    rendered: true,
                };
            }
            return null;
        }
        componentDidUpdate(prevProps) {
            if (prevProps.visible !== this.props.visible) {
                if (this.props.visible) {
                    this.showModal();
                }
                else {
                    this.hideModal();
                }
            }
        }
        componentWillUnmount() {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
        }
        render() {
            const { rendered, opacity } = this.state;
            if (!rendered)
                return null;
            const { children, dismissable, theme, contentContainerStyle } = this.props;
            const { colors } = theme;
            return (React.createElement(Animated.View, { pointerEvents: this.props.visible ? 'auto' : 'none', accessibilityViewIsModal: true, accessibilityLiveRegion: "polite", style: StyleSheet.absoluteFill },
                React.createElement(TouchableWithoutFeedback, { disabled: !dismissable, onPress: dismissable ? this.hideModal : undefined },
                    React.createElement(Animated.View, { style: [
                            styles.backdrop,
                            { backgroundColor: colors.backdrop, opacity },
                        ] })),
                React.createElement(SafeAreaView, { style: styles.wrapper, pointerEvents: "box-none" },
                    React.createElement(Surface, { style: [{ opacity }, styles.content, contentContainerStyle] }, children))));
        }
    }
    Modal.defaultProps = {
        dismissable: true,
        visible: false,
    };
    return Modal;
})();
export default withTheme(Modal);
const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
    },
    wrapper: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
    },
    content: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
});
