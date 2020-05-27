import * as React from 'react';
import { Animated, View, StyleSheet, } from 'react-native';
import color from 'color';
import ActivityIndicator from './ActivityIndicator';
import Icon from './Icon';
import Surface from './Surface';
import Text from './Typography/Text';
import TouchableRipple from './TouchableRipple';
import { black, white } from '../styles/colors';
import { withTheme } from '../core/theming';
/**
 * A button is component that the user can press to trigger an action.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/button-1.png" />
 *     <figcaption>Text button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/button-2.png" />
 *     <figcaption>Outlined button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/button-3.png" />
 *     <figcaption>Contained button</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
 *     Press me
 *   </Button>
 * );
 *
 * export default MyComponent;
 * ```
 */
let Button = /** @class */ (() => {
    class Button extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                elevation: new Animated.Value(this.props.mode === 'contained' ? 2 : 0),
            };
            this.handlePressIn = () => {
                if (this.props.mode === 'contained') {
                    const { scale } = this.props.theme.animation;
                    Animated.timing(this.state.elevation, {
                        toValue: 8,
                        duration: 200 * scale,
                        useNativeDriver: false,
                    }).start();
                }
            };
            this.handlePressOut = () => {
                if (this.props.mode === 'contained') {
                    const { scale } = this.props.theme.animation;
                    Animated.timing(this.state.elevation, {
                        toValue: 2,
                        duration: 150 * scale,
                        useNativeDriver: false,
                    }).start();
                }
            };
        }
        render() {
            const { disabled, compact, mode, dark, loading, icon, color: buttonColor, children, uppercase, accessibilityLabel, onPress, style, theme, contentStyle, labelStyle, testID, ...rest } = this.props;
            const { colors, roundness } = theme;
            const font = theme.fonts.medium;
            let backgroundColor, borderColor, textColor, borderWidth;
            if (mode === 'contained') {
                if (disabled) {
                    backgroundColor = color(theme.dark ? white : black)
                        .alpha(0.12)
                        .rgb()
                        .string();
                }
                else if (buttonColor) {
                    backgroundColor = buttonColor;
                }
                else {
                    backgroundColor = colors.primary;
                }
            }
            else {
                backgroundColor = 'transparent';
            }
            if (mode === 'outlined') {
                borderColor = color(theme.dark ? white : black)
                    .alpha(0.29)
                    .rgb()
                    .string();
                borderWidth = StyleSheet.hairlineWidth;
            }
            else {
                borderColor = 'transparent';
                borderWidth = 0;
            }
            if (disabled) {
                textColor = color(theme.dark ? white : black)
                    .alpha(0.32)
                    .rgb()
                    .string();
            }
            else if (mode === 'contained') {
                let isDark;
                if (typeof dark === 'boolean') {
                    isDark = dark;
                }
                else {
                    isDark =
                        backgroundColor === 'transparent'
                            ? false
                            : !color(backgroundColor).isLight();
                }
                textColor = isDark ? white : black;
            }
            else if (buttonColor) {
                textColor = buttonColor;
            }
            else {
                textColor = colors.primary;
            }
            const rippleColor = color(textColor)
                .alpha(0.32)
                .rgb()
                .string();
            const buttonStyle = {
                backgroundColor,
                borderColor,
                borderWidth,
                borderRadius: roundness,
            };
            const touchableStyle = {
                borderRadius: style
                    ? StyleSheet.flatten(style).borderRadius || roundness
                    : roundness,
            };
            const { color: customLabelColor, fontSize: customLabelSize } = StyleSheet.flatten(labelStyle) || {};
            const textStyle = { color: textColor, ...font };
            const elevation = disabled || mode !== 'contained' ? 0 : this.state.elevation;
            return (React.createElement(Surface, Object.assign({}, rest, { style: [
                    styles.button,
                    compact && styles.compact,
                    { elevation },
                    buttonStyle,
                    style,
                ] }),
                React.createElement(TouchableRipple, { borderless: true, delayPressIn: 0, onPress: onPress, onPressIn: this.handlePressIn, onPressOut: this.handlePressOut, accessibilityLabel: accessibilityLabel, accessibilityTraits: disabled ? ['button', 'disabled'] : 'button', accessibilityComponentType: "button", accessibilityRole: "button", accessibilityStates: disabled ? ['disabled'] : [], disabled: disabled, rippleColor: rippleColor, style: touchableStyle, testID: testID },
                    React.createElement(View, { style: [styles.content, contentStyle] },
                        icon && loading !== true ? (React.createElement(View, { style: styles.icon },
                            React.createElement(Icon, { source: icon, size: customLabelSize || 16, color: customLabelColor || textColor }))) : null,
                        loading ? (React.createElement(ActivityIndicator, { size: customLabelSize || 16, color: customLabelColor || textColor, style: styles.icon })) : null,
                        React.createElement(Text, { numberOfLines: 1, style: [
                                styles.label,
                                compact && styles.compactLabel,
                                uppercase && styles.uppercaseLabel,
                                textStyle,
                                font,
                                labelStyle,
                            ] }, children)))));
        }
    }
    Button.defaultProps = {
        mode: 'text',
        uppercase: true,
    };
    return Button;
})();
const styles = StyleSheet.create({
    button: {
        minWidth: 64,
        borderStyle: 'solid',
    },
    compact: {
        minWidth: 'auto',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginLeft: 12,
        marginRight: -4,
    },
    label: {
        textAlign: 'center',
        letterSpacing: 1,
        marginVertical: 9,
        marginHorizontal: 16,
    },
    compactLabel: {
        marginHorizontal: 8,
    },
    uppercaseLabel: {
        textTransform: 'uppercase',
    },
});
export default withTheme(Button);
