function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import color from 'color';
import { RadioButtonContext } from './RadioButtonGroup';
import { handlePress, isChecked } from './utils';
import TouchableRipple from '../TouchableRipple';
import { withTheme } from '../../core/theming';
const BORDER_WIDTH = 2;
/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for Android.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.android.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.android.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */

class RadioButtonAndroid extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      borderAnim: new Animated.Value(BORDER_WIDTH),
      radioAnim: new Animated.Value(1)
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status === this.props.status) {
      return;
    }

    const {
      scale
    } = this.props.theme.animation;

    if (this.props.status === 'checked') {
      this.state.radioAnim.setValue(1.2);
      Animated.timing(this.state.radioAnim, {
        toValue: 1,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    } else {
      this.state.borderAnim.setValue(10);
      Animated.timing(this.state.borderAnim, {
        toValue: BORDER_WIDTH,
        duration: 150 * scale,
        useNativeDriver: false
      }).start();
    }
  }

  render() {
    const _this$props = this.props,
          {
      disabled,
      onPress,
      theme,
      value,
      status,
      style
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["disabled", "onPress", "theme", "value", "status", "style"]);

    const checkedColor = this.props.color || theme.colors.accent;
    const uncheckedColor = this.props.uncheckedColor || color(theme.colors.text).alpha(theme.dark ? 0.7 : 0.54).rgb().string();
    let rippleColor, radioColor;
    return /*#__PURE__*/React.createElement(RadioButtonContext.Consumer, null, context => {
      const checked = isChecked({
        contextValue: context === null || context === void 0 ? void 0 : context.value,
        status,
        value
      }) === 'checked';

      if (disabled) {
        rippleColor = color(theme.colors.text).alpha(0.16).rgb().string();
        radioColor = theme.colors.disabled;
      } else {
        rippleColor = color(checkedColor).fade(0.32).rgb().string();
        radioColor = checked ? checkedColor : uncheckedColor;
      }

      return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
        borderless: true,
        rippleColor: rippleColor,
        onPress: disabled ? undefined : () => {
          handlePress({
            onPress,
            onValueChange: context === null || context === void 0 ? void 0 : context.onValueChange,
            value
          });
        },
        accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
        accessibilityComponentType: checked ? 'radiobutton_checked' : 'radiobutton_unchecked',
        accessibilityRole: "button",
        accessibilityState: {
          disabled
        },
        accessibilityLiveRegion: "polite",
        style: [styles.container, style]
      }), /*#__PURE__*/React.createElement(Animated.View, {
        style: [styles.radio, {
          borderColor: radioColor,
          borderWidth: this.state.borderAnim
        }]
      }, checked ? /*#__PURE__*/React.createElement(View, {
        style: [StyleSheet.absoluteFill, styles.radioContainer]
      }, /*#__PURE__*/React.createElement(Animated.View, {
        style: [styles.dot, {
          backgroundColor: radioColor,
          transform: [{
            scale: this.state.radioAnim
          }]
        }]
      })) : null));
    });
  }

}

_defineProperty(RadioButtonAndroid, "displayName", 'RadioButton.Android');

const styles = StyleSheet.create({
  container: {
    borderRadius: 18
  },
  radioContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 8
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5
  }
});
export default withTheme(RadioButtonAndroid); // @component-docs ignore-next-line

export { RadioButtonAndroid };
//# sourceMappingURL=RadioButtonAndroid.js.map