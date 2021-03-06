function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import color from 'color';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import TouchableRipple from '../TouchableRipple';
import { withTheme } from '../../core/theming';
// From https://material.io/design/motion/speed.html#duration
const ANIMATION_DURATION = 100;
/**
 * Checkboxes allow the selection of multiple options from a set.
 * This component follows platform guidelines for Android.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.android.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.android.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */

class CheckboxAndroid extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      scaleAnim: new Animated.Value(1)
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status === this.props.status) {
      return;
    }

    const checked = this.props.status === 'checked';
    const {
      animation
    } = this.props.theme;
    Animated.sequence([Animated.timing(this.state.scaleAnim, {
      toValue: 0.85,
      duration: checked ? ANIMATION_DURATION * animation.scale : 0,
      useNativeDriver: false
    }), Animated.timing(this.state.scaleAnim, {
      toValue: 1,
      duration: checked ? ANIMATION_DURATION * animation.scale : ANIMATION_DURATION * animation.scale * 1.75,
      useNativeDriver: false
    })]).start();
  }

  render() {
    const _this$props = this.props,
          {
      status,
      disabled,
      onPress,
      theme,
      style
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["status", "disabled", "onPress", "theme", "style"]);

    const checked = status === 'checked';
    const indeterminate = status === 'indeterminate';
    const checkedColor = this.props.color || theme.colors.accent;
    const uncheckedColor = this.props.uncheckedColor || color(theme.colors.text).alpha(theme.dark ? 0.7 : 0.54).rgb().string();
    let rippleColor, checkboxColor;

    if (disabled) {
      rippleColor = color(theme.colors.text).alpha(0.16).rgb().string();
      checkboxColor = theme.colors.disabled;
    } else {
      rippleColor = color(checkedColor).fade(0.32).rgb().string();
      checkboxColor = checked ? checkedColor : uncheckedColor;
    }

    const borderWidth = this.state.scaleAnim.interpolate({
      inputRange: [0.8, 1],
      outputRange: [7, 0]
    });
    const icon = indeterminate ? 'minus-box' : checked ? 'checkbox-marked' : 'checkbox-blank-outline';
    return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
      borderless: true,
      rippleColor: rippleColor,
      onPress: onPress,
      disabled: disabled,
      accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
      accessibilityComponentType: "button",
      accessibilityRole: "button",
      accessibilityState: {
        disabled
      },
      accessibilityLiveRegion: "polite",
      style: [styles.container, style]
    }), /*#__PURE__*/React.createElement(Animated.View, {
      style: {
        transform: [{
          scale: this.state.scaleAnim
        }]
      }
    }, /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
      allowFontScaling: false,
      name: icon,
      size: 24,
      color: checkboxColor,
      direction: "ltr"
    }), /*#__PURE__*/React.createElement(View, {
      style: [StyleSheet.absoluteFill, styles.fillContainer]
    }, /*#__PURE__*/React.createElement(Animated.View, {
      style: [styles.fill, {
        borderColor: checkboxColor
      }, {
        borderWidth
      }]
    }))));
  }

}

_defineProperty(CheckboxAndroid, "displayName", 'Checkbox.Android');

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    width: 36,
    height: 36,
    padding: 6
  },
  fillContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  fill: {
    height: 14,
    width: 14
  }
});
export default withTheme(CheckboxAndroid); // @component-docs ignore-next-line

export { CheckboxAndroid };
//# sourceMappingURL=CheckboxAndroid.js.map