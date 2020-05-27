import * as React from 'react';
import { Animated, I18nManager } from 'react-native';
import { withTheme } from '../../core/theming';
/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://facebook.github.io/react-native/docs/text.html#props
 */
function AnimatedText({ style, theme, ...rest }) {
    const writingDirection = I18nManager.isRTL ? 'rtl' : 'ltr';
    return (React.createElement(Animated.Text, Object.assign({}, rest, { style: [
            {
                ...theme.fonts.regular,
                color: theme.colors.text,
                textAlign: 'left',
                writingDirection,
            },
            style,
        ] })));
}
export default withTheme(AnimatedText);
