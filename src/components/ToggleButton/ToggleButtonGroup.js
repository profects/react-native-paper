import * as React from 'react';
export const ToggleButtonGroupContext = React.createContext(null);
/**
 * Toggle group allows to control a group of toggle buttons.</br>
 * It doesn't change the appearance of the toggle buttons. If you want to group them in a row, checkout <a href="/toggle-button-row.html">`ToggleButton.Row`</a>.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/toggle-button-group.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { ToggleButton } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     value: 'left',
 *   };
 *
 *   render() {
 *     return(
 *       <ToggleButton.Group
 *         onValueChange={value => this.setState({ value })}
 *         value={this.state.value}
 *       >
 *           <ToggleButton icon="format-align-left" value="left" />
 *           <ToggleButton icon="format-align-right" value="right" />
 *       </ToggleButton.Group>
 *     )
 *   }
 * }
 *```
 */
let ToggleButtonGroup = /** @class */ (() => {
    class ToggleButtonGroup extends React.Component {
        render() {
            const { value, onValueChange, children } = this.props;
            return (React.createElement(ToggleButtonGroupContext.Provider, { value: {
                    value,
                    onValueChange,
                } }, children));
        }
    }
    ToggleButtonGroup.displayName = 'ToggleButton.Group';
    return ToggleButtonGroup;
})();
export default ToggleButtonGroup;
