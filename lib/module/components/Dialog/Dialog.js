function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Modal from '../Modal';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions'; // eslint-disable-next-line @typescript-eslint/no-unused-vars

import DialogTitle from './DialogTitle';
import DialogScrollArea from './DialogScrollArea';
import { withTheme } from '../../core/theming';

/**
 * Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.
 * To render the `Dialog` above other components, you'll need to wrap it with the [`Portal`](portal.html) component.
 *
 *  <div class="screenshots">
 *   <img class="medium" src="screenshots/dialog-1.png" />
 *   <img class="medium" src="screenshots/dialog-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const showDialog = () => setVisible(true);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <View>
 *       <Button onPress={showDialog}>Show Dialog</Button>
 *       <Portal>
 *         <Dialog visible={visible} onDismiss={hideDialog}>
 *           <Dialog.Title>Alert</Dialog.Title>
 *           <Dialog.Content>
 *             <Paragraph>This is simple dialog</Paragraph>
 *           </Dialog.Content>
 *           <Dialog.Actions>
 *             <Button onPress={hideDialog}>Done</Button>
 *           </Dialog.Actions>
 *         </Dialog>
 *       </Portal>
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
class Dialog extends React.Component {
  // @component ./DialogContent.tsx
  // @component ./DialogActions.tsx
  // @component ./DialogTitle.tsx
  // @component ./DialogScrollArea.tsx
  render() {
    const {
      children,
      dismissable,
      onDismiss,
      visible,
      style,
      theme
    } = this.props;
    return /*#__PURE__*/React.createElement(Modal, {
      dismissable: dismissable,
      onDismiss: onDismiss,
      visible: visible,
      contentContainerStyle: [{
        borderRadius: theme.roundness,
        backgroundColor: theme.colors.surface
      }, styles.container, style]
    }, React.Children.toArray(children).filter(child => child != null && typeof child !== 'boolean').map((child, i) => {
      if (i === 0 && /*#__PURE__*/React.isValidElement(child) && child.type === DialogContent) {
        // Dialog content is the first item, so we add a top padding
        return /*#__PURE__*/React.cloneElement(child, {
          style: [{
            paddingTop: 24
          }, child.props.style]
        });
      }

      return child;
    }));
  }

}

_defineProperty(Dialog, "Content", DialogContent);

_defineProperty(Dialog, "Actions", DialogActions);

_defineProperty(Dialog, "Title", DialogTitle);

_defineProperty(Dialog, "ScrollArea", DialogScrollArea);

_defineProperty(Dialog, "defaultProps", {
  dismissable: true,
  visible: false
});

const styles = StyleSheet.create({
  container: {
    /**
     * This prevents the shadow from being clipped on Android since Android
     * doesn't support `overflow: visible`.
     * One downside for this fix is that it will disable clicks on the area
     * of the shadow around the dialog, consequently, if you click around the
     * dialog (44 pixel from the top and bottom) it won't be dismissed.
     */
    marginVertical: Platform.OS === 'android' ? 44 : 0,
    marginHorizontal: 26,
    elevation: 24,
    justifyContent: 'flex-start'
  }
});
export default withTheme(Dialog);
//# sourceMappingURL=Dialog.js.map