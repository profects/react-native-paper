import * as React from 'react';
import { Animated, StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof TouchableWithoutFeedback> & {
    /**
     * Text content of the `DataTableTitle`.
     */
    children: React.ReactNode;
    /**
     * Align the text to the right. Generally monetary or number fields are aligned to right.
     */
    numeric?: boolean;
    /**
     * Direction of sorting. An arrow indicating the direction is displayed when this is given.
     */
    sortDirection?: 'ascending' | 'descending';
    /**
     * The number of lines to show.
     */
    numberOfLines?: number;
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
declare type State = {
    spinAnim: Animated.Value;
};
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
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare class DataTableTitle extends React.Component<Props, State> {
    static displayName: string;
    static defaultProps: {
        numberOfLines: number;
    };
    state: {
        spinAnim: Animated.Value;
    };
    componentDidUpdate(prevProps: Props): void;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "ref" | "style" | "children" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "numeric" | "sortDirection"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DataTableTitle) | (React.FunctionComponent<Props> & typeof DataTableTitle), {}>) | (React.FunctionComponent<Pick<Props, "ref" | "style" | "children" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "numeric" | "sortDirection"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DataTableTitle) | (React.FunctionComponent<Props> & typeof DataTableTitle), {}>);
export default _default;
export { DataTableTitle };
