import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import TouchableRipple from '../TouchableRipple';
import type { $RemoveChildren } from '../../types';
declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Content of the `DataTableRow`.
     */
    children: React.ReactNode;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
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
declare class DataTableRow extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DataTableRow) | (React.FunctionComponent<Props> & typeof DataTableRow), {}>) | (React.FunctionComponent<Pick<Props, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "borderless" | "background" | "centered" | "rippleColor" | "underlayColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DataTableRow) | (React.FunctionComponent<Props> & typeof DataTableRow), {}>);
export default _default;
export { DataTableRow };
