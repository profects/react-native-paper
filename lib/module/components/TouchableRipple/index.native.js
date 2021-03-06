function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Platform, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';
import color from 'color';
import { withTheme } from '../../core/theming';
const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;

class TouchableRipple extends React.Component {
  render() {
    const _this$props = this.props,
          {
      style,
      background,
      borderless,
      disabled: disabledProp,
      rippleColor,
      underlayColor,
      children,
      theme
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["style", "background", "borderless", "disabled", "rippleColor", "underlayColor", "children", "theme"]);

    const {
      dark,
      colors
    } = theme;
    const disabled = disabledProp || !this.props.onPress;
    const calculatedRippleColor = rippleColor || color(colors.text).alpha(dark ? 0.32 : 0.2).rgb().string(); // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
    // https://github.com/facebook/react-native/issues/6480

    const useForeground = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_PIE && borderless;

    if (TouchableRipple.supported) {
      return /*#__PURE__*/React.createElement(TouchableNativeFeedback, _extends({}, rest, {
        disabled: disabled,
        useForeground: useForeground,
        background: background != null ? background : TouchableNativeFeedback.Ripple(calculatedRippleColor, borderless)
      }), /*#__PURE__*/React.createElement(View, {
        style: [borderless && {
          overflow: 'hidden'
        }, style]
      }, React.Children.only(children)));
    }

    return /*#__PURE__*/React.createElement(TouchableHighlight, _extends({}, rest, {
      disabled: disabled,
      style: [borderless && {
        overflow: 'hidden'
      }, style],
      underlayColor: underlayColor != null ? underlayColor : color(calculatedRippleColor).fade(0.5).rgb().string()
    }), React.Children.only(children));
  }

}

_defineProperty(TouchableRipple, "defaultProps", {
  borderless: false
});

_defineProperty(TouchableRipple, "supported", Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP);

export default withTheme(TouchableRipple);
//# sourceMappingURL=index.native.js.map