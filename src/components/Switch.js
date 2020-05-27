import * as React from 'react';
import { grey400, grey800, grey50, white, black } from '../styles/colors';
import { NativeModules, Platform, Switch as NativeSwitch, } from 'react-native';
import setColor from 'color';
import { withTheme } from '../core/theming';
const version = NativeModules.PlatformConstants
    ? NativeModules.PlatformConstants.reactNativeVersion
    : undefined;
/**
 * Switch is a visual toggle between two mutually exclusive states — on and off.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/switch-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/switch-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/switch-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/switch-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Switch } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     isSwitchOn: false,
 *   };
 *
 *   _onToggleSwitch = () => this.setState(state => ({ isSwitchOn: !state.isSwitchOn }));
 *
 *   render() {
 *     const { isSwitchOn } = this.state;
 *     return (
 *       <Switch
 *         value={isSwitchOn}
 *         onValueChange={this._onToggleSwitch}
 *       />
 *     );
 *   }
 * }
 * ```
 */
class Switch extends React.Component {
    render() {
        const { value, disabled, onValueChange, color, theme, ...rest } = this.props;
        const checkedColor = color || theme.colors.accent;
        const onTintColor = Platform.OS === 'ios'
            ? checkedColor
            : disabled
                ? theme.dark
                    ? setColor(white)
                        .alpha(0.1)
                        .rgb()
                        .string()
                    : setColor(black)
                        .alpha(0.12)
                        .rgb()
                        .string()
                : setColor(checkedColor)
                    .alpha(0.5)
                    .rgb()
                    .string();
        const thumbTintColor = Platform.OS === 'ios'
            ? undefined
            : disabled
                ? theme.dark
                    ? grey800
                    : grey400
                : value
                    ? checkedColor
                    : theme.dark
                        ? grey400
                        : grey50;
        const props = version && version.major === 0 && version.minor <= 56
            ? {
                onTintColor,
                thumbTintColor,
            }
            : {
                thumbColor: thumbTintColor,
                trackColor: {
                    true: onTintColor,
                    false: '',
                },
            };
        return (React.createElement(NativeSwitch, Object.assign({ value: value, disabled: disabled, onValueChange: disabled ? undefined : onValueChange }, props, rest)));
    }
}
export default withTheme(Switch);
