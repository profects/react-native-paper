import * as React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import color from 'color';
import { RadioButtonContext } from './RadioButtonGroup';
import { handlePress, isChecked } from './utils';
import TouchableRipple from '../TouchableRipple';
import { withTheme } from '../../core/theming';
const BORDER_WIDTH = 2;
/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for Android.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.android.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.android.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
let RadioButtonAndroid = /** @class */ (() => {
    class RadioButtonAndroid extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                borderAnim: new Animated.Value(BORDER_WIDTH),
                radioAnim: new Animated.Value(1),
            };
        }
        componentDidUpdate(prevProps) {
            if (prevProps.status === this.props.status) {
                return;
            }
            const { scale } = this.props.theme.animation;
            if (this.props.status === 'checked') {
                this.state.radioAnim.setValue(1.2);
                Animated.timing(this.state.radioAnim, {
                    toValue: 1,
                    duration: 150 * scale,
                    useNativeDriver: false,
                }).start();
            }
            else {
                this.state.borderAnim.setValue(10);
                Animated.timing(this.state.borderAnim, {
                    toValue: BORDER_WIDTH,
                    duration: 150 * scale,
                    useNativeDriver: false,
                }).start();
            }
        }
        render() {
            const { disabled, onPress, theme, value, status, style, ...rest } = this.props;
            const checkedColor = this.props.color || theme.colors.accent;
            const uncheckedColor = this.props.uncheckedColor ||
                color(theme.colors.text)
                    .alpha(theme.dark ? 0.7 : 0.54)
                    .rgb()
                    .string();
            let rippleColor, radioColor;
            return (React.createElement(RadioButtonContext.Consumer, null, (context) => {
                const checked = isChecked({
                    contextValue: context?.value,
                    status,
                    value,
                }) === 'checked';
                if (disabled) {
                    rippleColor = color(theme.colors.text)
                        .alpha(0.16)
                        .rgb()
                        .string();
                    radioColor = theme.colors.disabled;
                }
                else {
                    rippleColor = color(checkedColor)
                        .fade(0.32)
                        .rgb()
                        .string();
                    radioColor = checked ? checkedColor : uncheckedColor;
                }
                return (React.createElement(TouchableRipple, Object.assign({}, rest, { borderless: true, rippleColor: rippleColor, onPress: disabled
                        ? undefined
                        : () => {
                            handlePress({
                                onPress,
                                onValueChange: context?.onValueChange,
                                value,
                            });
                        }, accessibilityTraits: disabled ? ['button', 'disabled'] : 'button', accessibilityComponentType: checked ? 'radiobutton_checked' : 'radiobutton_unchecked', accessibilityRole: "button", accessibilityStates: disabled ? ['disabled'] : [], accessibilityLiveRegion: "polite", style: [styles.container, style] }),
                    React.createElement(Animated.View, { style: [
                            styles.radio,
                            {
                                borderColor: radioColor,
                                borderWidth: this.state.borderAnim,
                            },
                        ] }, checked ? (React.createElement(View, { style: [StyleSheet.absoluteFill, styles.radioContainer] },
                        React.createElement(Animated.View, { style: [
                                styles.dot,
                                {
                                    backgroundColor: radioColor,
                                    transform: [{ scale: this.state.radioAnim }],
                                },
                            ] }))) : null)));
            }));
        }
    }
    RadioButtonAndroid.displayName = 'RadioButton.Android';
    return RadioButtonAndroid;
})();
const styles = StyleSheet.create({
    container: {
        borderRadius: 18,
    },
    radioContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    radio: {
        height: 20,
        width: 20,
        borderRadius: 10,
        margin: 8,
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
    },
});
export default withTheme(RadioButtonAndroid);
// @component-docs ignore-next-line
export { RadioButtonAndroid };
