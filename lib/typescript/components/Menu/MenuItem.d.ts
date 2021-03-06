import * as React from 'react';
import { TextStyle, ViewStyle, StyleProp } from 'react-native';
import { IconSource } from '../Icon';
declare type Props = {
    /**
     * Title text for the `MenuItem`.
     */
    title: React.ReactNode;
    /**
     * Description text for the `MenuItem`.
     */
    description: React.ReactNode;
    /**
     * Icon to display for the `MenuItem`.
     */
    icon?: IconSource;
    /**
     * Whether the 'item' is disabled. A disabled 'item' is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
};
/**
 * A component to show a single list item inside a Menu.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/menu-item.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Menu } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View style={{ flex: 1 }}>
 *     <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
 *     <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
 *     <Menu.Item icon="content-cut" onPress={() => {}} title="Cut" disabled />
 *     <Menu.Item icon="content-copy" onPress={() => {}} title="Copy" disabled />
 *     <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare class MenuItem extends React.Component<Props> {
    static displayName: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "style" | "title" | "icon" | "onPress" | "testID" | "disabled" | "description" | "titleStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof MenuItem) | (React.FunctionComponent<Props> & typeof MenuItem), {}>) | (React.FunctionComponent<Pick<Props, "style" | "title" | "icon" | "onPress" | "testID" | "disabled" | "description" | "titleStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof MenuItem) | (React.FunctionComponent<Props> & typeof MenuItem), {}>);
export default _default;
export { MenuItem };
