import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { withTheme } from '../../core/theming';
import color from 'color';
import IconButton from '../IconButton';
import ToggleButtonGroup, { ToggleButtonGroupContext, } from './ToggleButtonGroup';
import ToggleButtonRow from './ToggleButtonRow';
import { black, white } from '../../styles/colors';
/**
 * Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons,
 * a group should share a common container.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/toggle-button.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ToggleButton } from 'react-native-paper';
 *
 * export default class ToggleButtonExample extends React.Component {
 *   state = {
 *     status: 'checked',
 *   };
 *
 *   _onButtonToggle = value => {
 *      this.setState({
 *        status: value === 'checked'
 *          ? 'unchecked'
 *          : 'checked',
 *      });
 *   }
 *
 *   render() {
 *     return (
 *       <ToggleButton
 *         icon="bluetooth"
 *         value="bluetooth"
 *         status={this.state.status}
 *         onPress={this._onButtonToggle}
 *       />
 *     );
 *   }
 * }
 * ```
 */
let ToggleButton = /** @class */ (() => {
    class ToggleButton extends React.Component {
        render() {
            const { icon, size, theme, accessibilityLabel, disabled, style, value, status, onPress, ...rest } = this.props;
            const borderRadius = theme.roundness;
            return (React.createElement(ToggleButtonGroupContext.Consumer, null, (context) => {
                let backgroundColor;
                const checked = (context && context.value === value) || status === 'checked';
                if (checked) {
                    backgroundColor = theme.dark
                        ? 'rgba(255, 255, 255, .12)'
                        : 'rgba(0, 0, 0, .08)';
                }
                else {
                    backgroundColor = 'transparent';
                }
                return (React.createElement(IconButton, Object.assign({ borderless: false, icon: icon, onPress: (e) => {
                        if (onPress) {
                            onPress(e);
                        }
                        if (context) {
                            context.onValueChange(!checked ? value : null);
                        }
                    }, size: size, accessibilityLabel: accessibilityLabel, disabled: disabled, style: [
                        styles.content,
                        {
                            backgroundColor,
                            borderRadius,
                            borderColor: color(theme.dark ? white : black)
                                .alpha(0.29)
                                .rgb()
                                .string(),
                        },
                        style,
                    ] }, rest)));
            }));
        }
    }
    // @component ./ToggleButtonGroup.tsx
    ToggleButton.Group = ToggleButtonGroup;
    // @component ./ToggleButtonRow.tsx
    ToggleButton.Row = ToggleButtonRow;
    return ToggleButton;
})();
const styles = StyleSheet.create({
    content: {
        width: 42,
        height: 42,
        margin: 0,
    },
});
export default withTheme(ToggleButton);
