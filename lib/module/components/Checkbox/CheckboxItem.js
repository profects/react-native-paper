function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import CheckBox from './Checkbox';
import Text from '../Typography/Text';
import TouchableRipple from '../TouchableRipple';
import { withTheme } from '../../core/theming';
/**
 * Checkbox.Item allows you to press the whole row (item) instead of only the Checkbox.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Checkbox, Text } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *
 *   render() {
 *     return(
 *       <View>
 *           <Checkbox.Item label="Item" status="checked" />
 *       </View>
 *     )
 *   }
 * }
 *```
 */

let CheckboxItem =
/** @class */
(() => {
  class CheckboxItem extends React.Component {
    render() {
      const _this$props = this.props,
            {
        style,
        status,
        label,
        onPress,
        labelStyle,
        theme: {
          colors
        }
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["style", "status", "label", "onPress", "labelStyle", "theme"]);

      return /*#__PURE__*/React.createElement(TouchableRipple, {
        onPress: onPress
      }, /*#__PURE__*/React.createElement(View, {
        style: [styles.container, style],
        pointerEvents: "none"
      }, /*#__PURE__*/React.createElement(Text, {
        style: [styles.label, labelStyle, {
          color: colors.primary
        }]
      }, label), /*#__PURE__*/React.createElement(CheckBox, Object.assign({
        status: status
      }, props))));
    }

  }

  CheckboxItem.displayName = 'Checkbox.Item';
  return CheckboxItem;
})();

export default withTheme(CheckboxItem); // @component-docs ignore-next-line

export { CheckboxItem };
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  label: {
    fontSize: 16
  }
});
//# sourceMappingURL=CheckboxItem.js.mape(CheckboxItem); // @component-docs ignore-next-line

export { CheckboxItem };
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  label: {
    fontSize: 16
  }
});
//# sourceMappingURL=CheckboxItem.js.map