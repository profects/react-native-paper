import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import color from 'color';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import TouchableRipple from '../TouchableRipple';
import { withTheme } from '../../core/theming';
/**
 * Checkboxes allow the selection of multiple options from a set.
 * This component follows platform guidelines for iOS.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
let CheckboxIOS = /** @class */ (() => {
    class CheckboxIOS extends React.Component {
        render() {
            const { status, disabled, onPress, theme, ...rest } = this.props;
            const checked = status === 'checked';
            const indeterminate = status === 'indeterminate';
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
            const icon = indeterminate ? 'minus' : 'check';
            return (React.createElement(TouchableRipple, Object.assign({}, rest, { borderless: true, rippleColor: rippleColor, onPress: onPress, disabled: disabled, accessibilityTraits: disabled ? ['button', 'disabled'] : 'button', accessibilityComponentType: "button", accessibilityRole: "button", accessibilityStates: disabled ? ['disabled'] : [], accessibilityLiveRegion: "polite", style: styles.container }),
                React.createElement(View, { style: { opacity: indeterminate || checked ? 1 : 0 } },
                    React.createElement(MaterialCommunityIcon, { allowFontScaling: false, name: icon, size: 24, color: checkedColor, direction: "ltr" }))));
        }
    }
    CheckboxIOS.displayName = 'Checkbox.IOS';
    return CheckboxIOS;
})();
const styles = StyleSheet.create({
    container: {
        borderRadius: 18,
        padding: 6,
    },
});
export default withTheme(CheckboxIOS);
// @component-docs ignore-next-line
export { CheckboxIOS };
