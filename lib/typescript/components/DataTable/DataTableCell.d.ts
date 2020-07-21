import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import TouchableRipple from '../TouchableRipple';
import type { $RemoveChildren } from '../../types';
declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Content of the `DataTableCell`.
     */
    children: React.ReactNode;
    /**
     * Align the text to the right. Generally monetary or number fields are aligned to right.
     */
    numeric?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
};
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
declare class DataTableCell extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
export default DataTableCell;
