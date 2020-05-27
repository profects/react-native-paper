import * as React from 'react';
import { View, StyleSheet } from 'react-native';
/**
 * A component to show a scrollable content in a Dialog. The component only provides appropriate styling.
 * For the scrollable content you can use `ScrollView`, `FlatList` etc. depending on your requirement.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/dialog-scroll-area.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ScrollView } from 'react-native';
 * import { Dialog, Portal, Text } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     visible: false,
 *   };
 *
 *   _hideDialog = () => this.setState({ visible: false });
 *
 *   render() {
 *     return (
 *       <Portal>
 *         <Dialog
 *           visible={this.state.visible}
 *           onDismiss={this._hideDialog}>
 *           <Dialog.ScrollArea>
 *             <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
 *               <Text>This is a scrollable area</Text>
 *             </ScrollView>
 *           </Dialog.ScrollArea>
 *         </Dialog>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */
let DialogScrollArea = /** @class */ (() => {
    class DialogScrollArea extends React.Component {
        render() {
            return (React.createElement(View, Object.assign({}, this.props, { style: [styles.container, this.props.style] }), this.props.children));
        }
    }
    DialogScrollArea.displayName = 'Dialog.ScrollArea';
    return DialogScrollArea;
})();
const styles = StyleSheet.create({
    container: {
        borderColor: 'rgba(0, 0, 0, .12)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 24,
        flexGrow: 1,
        flexShrink: 1,
    },
});
export default DialogScrollArea;
