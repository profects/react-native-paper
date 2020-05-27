import color from 'color';
import * as React from 'react';
import { I18nManager } from 'react-native';
import Text from './Text';
import { withTheme } from '../../core/theming';
class StyledText extends React.Component {
    render() {
        const { theme, alpha, family, style, ...rest } = this.props;
        const textColor = color(theme.colors.text)
            .alpha(alpha)
            .rgb()
            .string();
        const font = theme.fonts[family];
        const writingDirection = I18nManager.isRTL ? 'rtl' : 'ltr';
        return (React.createElement(Text, Object.assign({}, rest, { style: [
                { color: textColor, ...font, textAlign: 'left', writingDirection },
                style,
                this.props.style,
            ] })));
    }
}
export default withTheme(StyledText);
