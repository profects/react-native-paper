import * as React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Typography/Text';
import TouchableRipple from '../TouchableRipple';
/**
 * A component to show a single cell inside of a table.
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
let DataTableCell = /** @class */ (() => {
    class DataTableCell extends React.Component {
        render() {
            const { children, style, numeric, ...rest } = this.props;
            return (React.createElement(TouchableRipple, Object.assign({}, rest, { style: [styles.container, numeric && styles.right, style] }),
                React.createElement(Text, { numberOfLines: 1 }, children)));
        }
    }
    DataTableCell.displayName = 'DataTable.Cell';
    return DataTableCell;
})();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        justifyContent: 'flex-end',
    },
});
export default DataTableCell;
