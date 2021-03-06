"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButtonIOS = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _RadioButtonGroup = require("./RadioButtonGroup");

var _utils = require("./utils");

var _MaterialCommunityIcon = _interopRequireDefault(require("../MaterialCommunityIcon"));

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple"));

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for iOS.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
class RadioButtonIOS extends React.Component {
  render() {
    const _this$props = this.props,
          {
      disabled,
      onPress,
      theme,
      status,
      value
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["disabled", "onPress", "theme", "status", "value"]);

    const checkedColor = disabled ? theme.colors.disabled : this.props.color || theme.colors.accent;
    let rippleColor;

    if (disabled) {
      rippleColor = (0, _color.default)(theme.colors.text).alpha(0.16).rgb().string();
    } else {
      rippleColor = (0, _color.default)(checkedColor).fade(0.32).rgb().string();
    }

    return /*#__PURE__*/React.createElement(_RadioButtonGroup.RadioButtonContext.Consumer, null, context => {
      const checked = (0, _utils.isChecked)({
        contextValue: context === null || context === void 0 ? void 0 : context.value,
        status,
        value
      }) === 'checked';
      return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
        borderless: true,
        rippleColor: rippleColor,
        onPress: disabled ? undefined : () => {
          (0, _utils.handlePress)({
            onPress,
            value,
            onValueChange: context === null || context === void 0 ? void 0 : context.onValueChange
          });
        },
        accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
        accessibilityComponentType: checked ? 'radiobutton_checked' : 'radiobutton_unchecked',
        accessibilityRole: "button",
        accessibilityState: {
          disabled
        },
        accessibilityLiveRegion: "polite",
        style: styles.container
      }), /*#__PURE__*/React.createElement(_reactNative.View, {
        style: {
          opacity: checked ? 1 : 0
        }
      }, /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
        allowFontScaling: false,
        name: "check",
        size: 24,
        color: checkedColor,
        direction: "ltr"
      })));
    });
  }

}

exports.RadioButtonIOS = RadioButtonIOS;

_defineProperty(RadioButtonIOS, "displayName", 'RadioButton.IOS');

const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 18,
    padding: 6
  }
});

var _default = (0, _theming.withTheme)(RadioButtonIOS); // @component-docs ignore-next-line


exports.default = _default;
//# sourceMappingURL=RadioButtonIOS.js.map