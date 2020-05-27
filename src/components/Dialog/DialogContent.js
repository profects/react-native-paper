import * as React from 'react';
import { View, StyleSheet } from 'react-native';
/**
 * A component to show content in a Dialog.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/dialog-content.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Paragraph, Dialog, Portal } from 'react-native-paper';
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
 *           <Dialog.Content>
 *             <Paragraph>This is simple dialog</Paragraph>
 *           </Dialog.Content>
 *         </Dialog>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */
let DialogContent = /** @class */ (() => {
    class DialogContent extends React.Component {
        render() {
            return (React.createElement(View, Object.assign({}, this.props, { style: [styles.container, this.props.style] }), this.props.children));
        }
    }
    DialogContent.displayName = 'Dialog.Content';
    return DialogContent;
})();
const styles = StyleSheet.create({
    container: {
        paddingBottom: 24,
        paddingHorizontal: 24,
    },
});
export default DialogContent;
