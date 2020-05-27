import * as React from 'react';
import { Platform, TouchableHighlight, TouchableNativeFeedback, View, } from 'react-native';
import color from 'color';
import { withTheme } from '../../core/theming';
const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;
let TouchableRipple = /** @class */ (() => {
    class TouchableRipple extends React.Component {
        render() {
            const { style, background, borderless, disabled: disabledProp, rippleColor, underlayColor, children, theme, ...rest } = this.props;
            const { dark, colors } = theme;
            const disabled = disabledProp || !this.props.onPress;
            const calculatedRippleColor = rippleColor ||
                color(colors.text)
                    .alpha(dark ? 0.32 : 0.2)
                    .rgb()
                    .string();
            // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
            // https://github.com/facebook/react-native/issues/6480
            const useForeground = Platform.OS === 'android' &&
                Platform.Version >= ANDROID_VERSION_PIE &&
                borderless;
            if (TouchableRipple.supported) {
                return (React.createElement(TouchableNativeFeedback, Object.assign({}, rest, { disabled: disabled, useForeground: useForeground, background: background != null
                        ? background
                        : TouchableNativeFeedback.Ripple(calculatedRippleColor, borderless) }),
                    React.createElement(View, { style: [borderless && { overflow: 'hidden' }, style] }, React.Children.only(children))));
            }
            return (React.createElement(TouchableHighlight, Object.assign({}, rest, { disabled: disabled, style: [borderless && { overflow: 'hidden' }, style], underlayColor: underlayColor != null
                    ? underlayColor
                    : color(calculatedRippleColor)
                        .fade(0.5)
                        .rgb()
                        .string() }), React.Children.only(children)));
        }
    }
    TouchableRipple.defaultProps = {
        borderless: false,
    };
    TouchableRipple.supported = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;
    return TouchableRipple;
})();
export default withTheme(TouchableRipple);
