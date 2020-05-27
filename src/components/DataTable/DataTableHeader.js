import * as React from 'react';
import color from 'color';
import { StyleSheet, View } from 'react-native';
import { black, white } from '../../styles/colors';
import { withTheme } from '../../core/theming';
/**
 * A component to display title in table header.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-header.png" />
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
 *       <DataTable>
 *         <DataTable.Header>
 *           <DataTable.Title
 *             sortDirection='descending'
 *           >
 *             Dessert
 *           </DataTable.Title>
 *           <DataTable.Title numeric>Calories</DataTable.Title>
 *           <DataTable.Title numeric>Fat (g)</DataTable.Title>
 *         </DataTable.Header>
 *       </DataTable>
 * );
 *
 * export default MyComponent;
 * ```
 */
let DataTableHeader = /** @class */ (() => {
    class DataTableHeader extends React.Component {
        render() {
            const { children, style, theme, ...rest } = this.props;
            const borderBottomColor = color(theme.dark ? white : black)
                .alpha(0.12)
                .rgb()
                .string();
            return (React.createElement(View, Object.assign({}, rest, { style: [styles.header, { borderBottomColor }, style] }), children));
        }
    }
    DataTableHeader.displayName = 'DataTable.Header';
    return DataTableHeader;
})();
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 48,
        paddingHorizontal: 16,
        borderBottomWidth: StyleSheet.hairlineWidth * 2,
    },
});
export default withTheme(DataTableHeader);
// @component-docs ignore-next-line
export { DataTableHeader };
