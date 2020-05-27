import * as React from 'react';
import { Platform } from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CheckboxIOS from './CheckboxIOS';
import CheckboxAndroid from './CheckboxAndroid';
import CheckboxItem from './CheckboxItem';
import { withTheme } from '../../core/theming';
/**
 * Checkboxes allow the selection of multiple options from a set.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Checkbox } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     checked: false,
 *   };
 *
 *   render() {
 *     const { checked } = this.state;
 *     return (
 *       <Checkbox
 *         status={checked ? 'checked' : 'unchecked'}
 *         onPress={() => { this.setState({ checked: !checked }); }}
 *       />
 *     );
 *   }
 * }
 * ```
 */
let Checkbox = /** @class */ (() => {
    class Checkbox extends React.Component {
        render() {
            return Platform.OS === 'ios' ? (React.createElement(CheckboxIOS, Object.assign({}, this.props))) : (React.createElement(CheckboxAndroid, Object.assign({}, this.props)));
        }
    }
    // @component ./CheckboxItem.tsx
    Checkbox.Item = CheckboxItem;
    // @component ./CheckboxAndroid.tsx
    Checkbox.Android = CheckboxAndroid;
    // @component ./CheckboxIOS.tsx
    Checkbox.IOS = CheckboxIOS;
    return Checkbox;
})();
export default withTheme(Checkbox);
