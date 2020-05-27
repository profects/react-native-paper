import * as React from 'react';
export const RadioButtonContext = React.createContext(null);
/**
 * Radio button group allows to control a group of radio buttons.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/radio-button-group-android.gif" />
 *  <figcaption>Android</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/radio-button-group-ios.gif" />
 *  <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { RadioButton, Text } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     value: 'first',
 *   };
 *
 *   render() {
 *     return(
 *       <RadioButton.Group
 *         onValueChange={value => this.setState({ value })}
 *         value={this.state.value}
 *       >
 *         <View>
 *           <Text>First</Text>
 *           <RadioButton value="first" />
 *         </View>
 *         <View>
 *           <Text>Second</Text>
 *           <RadioButton value="second" />
 *         </View>
 *       </RadioButton.Group>
 *     )
 *   }
 * }
 *```
 */
let RadioButtonGroup = /** @class */ (() => {
    class RadioButtonGroup extends React.Component {
        render() {
            const { value, onValueChange, children } = this.props;
            return (React.createElement(RadioButtonContext.Provider, { value: { value, onValueChange } }, children));
        }
    }
    RadioButtonGroup.displayName = 'RadioButton.Group';
    return RadioButtonGroup;
})();
export default RadioButtonGroup;
