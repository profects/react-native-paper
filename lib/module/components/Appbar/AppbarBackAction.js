import * as React from 'react';
import { View, Image, I18nManager, StyleSheet, Platform } from 'react-native';
import AppbarAction from './AppbarAction';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
/**
 * A component used to display a back button in the appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-backaction-android.png" />
 *     <figcaption>Android</figcaption>
 *   </figure>
 * </div>
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-backaction-ios.png" />
 *     <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */

let AppbarBackAction =
/** @class */
(() => {
  class AppbarBackAction extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement(AppbarAction, Object.assign({}, this.props, {
        icon: ({
          size,
          color
        }) => Platform.OS === 'ios' ? /*#__PURE__*/React.createElement(View, {
          style: [styles.wrapper, {
            width: size,
            height: size,
            transform: [{
              scaleX: I18nManager.isRTL ? -1 : 1
            }]
          }]
        }, /*#__PURE__*/React.createElement(Image, {
          source: require('../../assets/back-chevron.png'),
          style: [styles.icon, {
            tintColor: color
          }]
        })) : /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
          name: "arrow-left",
          color: color,
          size: size,
          direction: I18nManager.isRTL ? 'rtl' : 'ltr'
        })
      }));
    }

  }

  AppbarBackAction.displayName = 'Appbar.BackAction';
  AppbarBackAction.defaultProps = {
    accessibilityLabel: 'Back'
  };
  return AppbarBackAction;
})();

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 21,
    width: 21,
    resizeMode: 'contain'
  }
});
export default AppbarBackAction;
//# sourceMappingURL=AppbarBackAction.js.map}

_defineProperty(AppbarBackAction, "displayName", 'Appbar.BackAction');

_defineProperty(AppbarBackAction, "defaultProps", {
  accessibilityLabel: 'Back'
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 21,
    width: 21,
    resizeMode: 'contain'
  }
});
export default AppbarBackAction;
//# sourceMappingURL=AppbarBackAction.js.map