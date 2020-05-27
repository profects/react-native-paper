import * as React from 'react';
import { StyleSheet, View, I18nManager, } from 'react-native';
import color from 'color';
import IconButton from '../IconButton';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
/**
 * A component to show pagination for data table.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-pagination.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 *
 *   const itemsPerPage = 2;
 *
 *   const items = [
 *    {
 *      key: 1,
 *      name: 'Page 1',
 *    },
 *    {
 *      key: 2,
 *      name: 'Page 2',
 *    },
 *    {
 *      key: 3,
 *      name: 'Page 3',
 *    }
 *  ];
 *
 * const MyComponent = () => (
 *
 *   const [page, setPage] = React.useState(0);
 *   const from = page * itemsPerPage;
 *   const to = (page + 1) * itemsPerPage;
 *
 *      <DataTable>
 *        <DataTable.Pagination
 *          page={page}
 *          numberOfPages={Math.floor(items.length / itemsPerPage)}
 *          onPageChange={page => setPage(page)}
 *          label={`${from + 1}-${to} of ${items.length}`}
 *        />
 *      </DataTable>
 * );
 *
 * export default MyComponent;
 * ```
 */
let DataTablePagination = /** @class */ (() => {
    class DataTablePagination extends React.Component {
        render() {
            const { label, page, numberOfPages, onPageChange, style, theme, ...rest } = this.props;
            const labelColor = color(theme.colors.text)
                .alpha(0.6)
                .rgb()
                .string();
            return (React.createElement(View, Object.assign({}, rest, { style: [styles.container, style] }),
                React.createElement(Text, { style: [styles.label, { color: labelColor }], numberOfLines: 1 }, label),
                React.createElement(IconButton, { icon: ({ size, color }) => (React.createElement(MaterialCommunityIcon, { name: "chevron-left", color: color, size: size, direction: I18nManager.isRTL ? 'rtl' : 'ltr' })), color: theme.colors.text, disabled: page === 0, onPress: () => onPageChange(page - 1) }),
                React.createElement(IconButton, { icon: ({ size, color }) => (React.createElement(MaterialCommunityIcon, { name: "chevron-right", color: color, size: size, direction: I18nManager.isRTL ? 'rtl' : 'ltr' })), color: theme.colors.text, disabled: page === numberOfPages - 1, onPress: () => onPageChange(page + 1) })));
        }
    }
    DataTablePagination.displayName = 'DataTable.Pagination';
    return DataTablePagination;
})();
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
    },
    label: {
        fontSize: 12,
        marginRight: 44,
    },
});
export default withTheme(DataTablePagination);
// @component-docs ignore-next-line
export { DataTablePagination };
