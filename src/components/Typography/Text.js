import * as React from 'react';
import { Text as NativeText } from 'react-native';
import { withTheme } from '../../core/theming';
// @component-group Typography
/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://facebook.github.io/react-native/docs/text.html#props
 */
class Text extends React.Component {
    /**
     * @internal
     */
    setNativeProps(args) {
        return this.root && this.root.setNativeProps(args);
    }
    render() {
        const { style, theme, ...rest } = this.props;
        return (React.createElement(NativeText, Object.assign({}, rest, { ref: c => {
                this.root = c;
            }, style: [
                {
                    ...theme.fonts.regular,
                    color: theme.colors.text,
                    textAlign: 'left',
                },
                style,
            ] })));
    }
}
export default withTheme(Text);
