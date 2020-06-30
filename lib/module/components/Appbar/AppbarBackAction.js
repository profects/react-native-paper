function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
class AppbarBackAction extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(AppbarAction, _extends({}, this.props, {
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