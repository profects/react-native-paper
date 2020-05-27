import * as React from 'react';
import color from 'color';
import { Animated, StyleSheet, } from 'react-native';
import AnimatedText from './Typography/AnimatedText';
import { withTheme } from '../core/theming';
/**
 * Helper text is used in conjuction with input elements to provide additional hints for the user.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/helper-text.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { HelperText, TextInput } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     text: ''
 *   };
 *
 *   _onChangeText = text => this.setState({ text });
 *
 *   _hasErrors = () => {
 *     return !this.state.text.includes('@');
 *   }
 *
 *   render(){
 *     const { text } = this.state;
 *
 *     return (
 *       <View>
 *         <TextInput
 *           label="Email"
 *           value={text}
 *           onChangeText={this._onChangeText}
 *         />
 *         <HelperText
 *           type="error"
 *           visible={this._hasErrors()}
 *         >
 *           Email address is invalid!
 *         </HelperText>
 *       </View>
 *     );
 *   }
 * }
 * ```
 */
let HelperText = /** @class */ (() => {
    class HelperText extends React.PureComponent {
        constructor() {
            super(...arguments);
            this.state = {
                shown: new Animated.Value(this.props.visible ? 1 : 0),
                textHeight: 0,
            };
            this.showText = () => {
                const { scale } = this.props.theme.animation;
                Animated.timing(this.state.shown, {
                    toValue: 1,
                    duration: 150 * scale,
                    useNativeDriver: true,
                }).start();
            };
            this.hideText = () => {
                const { scale } = this.props.theme.animation;
                Animated.timing(this.state.shown, {
                    toValue: 0,
                    duration: 180 * scale,
                    useNativeDriver: true,
                }).start();
            };
            this.handleTextLayout = (e) => {
                //@ts-ignore Animated.Text typings are improved but something is still broken. It thinks onLayout is not callable.
                this.props.onLayout && this.props.onLayout(e);
                this.setState({
                    textHeight: e.nativeEvent.layout.height,
                });
            };
        }
        componentDidUpdate(prevProps, prevState) {
            if (prevProps.visible !== this.props.visible ||
                prevState.textHeight !== this.state.textHeight) {
                if (this.props.visible) {
                    this.showText();
                }
                else {
                    this.hideText();
                }
            }
        }
        render() {
            const { style, type, visible, theme, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onLayout, padding, ...rest } = this.props;
            const { colors, dark } = theme;
            const textColor = this.props.type === 'error'
                ? colors.error
                : color(colors.text)
                    .alpha(dark ? 0.7 : 0.54)
                    .rgb()
                    .string();
            return (React.createElement(AnimatedText, Object.assign({ onLayout: this.handleTextLayout, style: [
                    styles.text,
                    padding !== 'none' ? styles.padding : {},
                    {
                        color: textColor,
                        opacity: this.state.shown,
                        transform: visible && type === 'error'
                            ? [
                                {
                                    translateY: this.state.shown.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [-this.state.textHeight / 2, 0],
                                    }),
                                },
                            ]
                            : [],
                    },
                    style,
                ] }, rest), this.props.children));
        }
    }
    HelperText.defaultProps = {
        type: 'info',
        padding: 'normal',
        visible: true,
    };
    return HelperText;
})();
const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        paddingVertical: 4,
    },
    padding: {
        paddingHorizontal: 12,
    },
});
export default withTheme(HelperText);
