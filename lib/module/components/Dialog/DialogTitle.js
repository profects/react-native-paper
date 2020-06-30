function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyleSheet } from 'react-native';
import Title from '../Typography/Title';
import { withTheme } from '../../core/theming';
/**
 * A component to show a title in a Dialog.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/dialog-title.png" />
 *   </figure>
 * </div>
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
 *           <Dialog.Title>This is a title</Dialog.Title>
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

let DialogTitle =
/** @class */
(() => {
  class DialogTitle extends React.Component {
    render() {
      const _this$props = this.props,
            {
        children,
        theme,
        style
      } = _this$props,
            rest = _objectWithoutProperties(_this$props, ["children", "theme", "style"]);

      return /*#__PURE__*/React.createElement(Title, Object.assign({
        accessibilityTraits: "header",
        accessibilityRole: "header",
        style: [styles.text, {
          color: theme.colors.text
        }, style]
      }, rest), children);
    }

  }

  DialogTitle.displayName = 'Dialog.Title';
  return DialogTitle;
})();

const styles = StyleSheet.create({
  text: {
    marginTop: 22,
    marginBottom: 18,
    marginHorizontal: 24
  }
});
export default withTheme(DialogTitle); // @component-docs ignore-next-line

export { DialogTitle };
//# sourceMappingURL=DialogTitle.js.mape]
    }, rest), children);
  }

}

_defineProperty(DialogTitle, "displayName", 'Dialog.Title');

const styles = StyleSheet.create({
  text: {
    marginTop: 22,
    marginBottom: 18,
    marginHorizontal: 24
  }
});
export default withTheme(DialogTitle); // @component-docs ignore-next-line

export { DialogTitle };
//# sourceMappingURL=DialogTitle.js.map