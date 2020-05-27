import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
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
let CheckboxItem = /** @class */ (() => {
    class CheckboxItem extends React.Component {
        render() {
            const { style, status, label, onPress, labelStyle, theme: { colors }, ...props } = this.props;
            return (React.createElement(TouchableRipple, { onPress: onPress },
                React.createElement(View, { style: [styles.container, style], pointerEvents: "none" },
                    React.createElement(Text, { style: [styles.label, labelStyle, { color: colors.primary }] }, label),
                    React.createElement(CheckBox, Object.assign({ status: status }, props)))));
        }
    }
    CheckboxItem.displayName = 'Checkbox.Item';
    return CheckboxItem;
})();
export default withTheme(CheckboxItem);
// @component-docs ignore-next-line
export { CheckboxItem };
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    label: {
        fontSize: 16,
    },
});
