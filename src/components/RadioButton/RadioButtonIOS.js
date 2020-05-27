import * as React from 'react';
import { StyleSheet, View, I18nManager } from 'react-native';
import color from 'color';
import { RadioButtonContext } from './RadioButtonGroup';
import { handlePress, isChecked } from './utils';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import TouchableRipple from '../TouchableRipple';
import { withTheme } from '../../core/theming';
/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for iOS.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
let RadioButtonIOS = /** @class */ (() => {
    class RadioButtonIOS extends React.Component {
        render() {
            const { disabled, onPress, theme, status, value, ...rest } = this.props;
            const checkedColor = disabled
                ? theme.colors.disabled
                : this.props.color || theme.colors.accent;
            let rippleColor;
            if (disabled) {
                rippleColor = color(theme.colors.text)
                    .alpha(0.16)
                    .rgb()
                    .string();
            }
            else {
                rippleColor = color(checkedColor)
                    .fade(0.32)
                    .rgb()
                    .string();
            }
            return (React.createElement(RadioButtonContext.Consumer, null, (context) => {
                const checked = isChecked({
                    contextValue: context?.value,
                    status,
                    value,
                }) === 'checked';
                return (React.createElement(TouchableRipple, Object.assign({}, rest, { borderless: true, rippleColor: rippleColor, onPress: disabled
                        ? undefined
                        : () => {
                            handlePress({
                                onPress,
                                value,
                                onValueChange: context?.onValueChange,
                            });
                        }, accessibilityTraits: disabled ? ['button', 'disabled'] : 'button', accessibilityComponentType: checked ? 'radiobutton_checked' : 'radiobutton_unchecked', accessibilityRole: "button", accessibilityStates: disabled ? ['disabled'] : [], accessibilityLiveRegion: "polite", style: styles.container }),
                    React.createElement(View, { style: { opacity: checked ? 1 : 0 } },
                        React.createElement(MaterialCommunityIcon, { allowFontScaling: false, name: "check", size: 24, color: checkedColor, direction: I18nManager.isRTL ? 'rtl' : 'ltr' }))));
            }));
        }
    }
    RadioButtonIOS.displayName = 'RadioButton.IOS';
    return RadioButtonIOS;
})();
const styles = StyleSheet.create({
    container: {
        borderRadius: 18,
        padding: 6,
    },
});
export default withTheme(RadioButtonIOS);
// @component-docs ignore-next-line
export { RadioButtonIOS };
