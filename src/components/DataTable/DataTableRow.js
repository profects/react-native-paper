import * as React from 'react';
import color from 'color';
import { StyleSheet, View } from 'react-native';
import TouchableRipple from '../TouchableRipple';
import { black, white } from '../../styles/colors';
import { withTheme } from '../../core/theming';
/**
 * A component to show a single row inside of a table.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-row-cell.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *      <DataTable.Row>
 *        <DataTable.Cell numeric>1</DataTable.Cell>
 *        <DataTable.Cell numeric>2</DataTable.Cell>
 *        <DataTable.Cell numeric>3</DataTable.Cell>
 *        <DataTable.Cell numeric>4</DataTable.Cell>
 *      </DataTable.Row>
 * );
 *
 * export default MyComponent;
 * ```
 */
let DataTableRow = /** @class */ (() => {
    class DataTableRow extends React.Component {
        render() {
            const { onPress, style, theme, ...rest } = this.props;
            const borderBottomColor = color(theme.dark ? white : black)
                .alpha(0.12)
                .rgb()
                .string();
            return (React.createElement(TouchableRipple, Object.assign({}, rest, { onPress: onPress, style: [styles.container, { borderBottomColor }, style] }),
                React.createElement(View, { style: styles.content }, this.props.children)));
        }
    }
    DataTableRow.displayName = 'DataTable.Row';
    return DataTableRow;
})();
const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderBottomWidth: StyleSheet.hairlineWidth,
        minHeight: 48,
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
});
export default withTheme(DataTableRow);
// @component-docs ignore-next-line
export { DataTableRow };
