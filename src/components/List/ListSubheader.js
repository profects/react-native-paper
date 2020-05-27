import * as React from 'react';
import { StyleSheet } from 'react-native';
import color from 'color';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
/**
 * A component used to display a header in lists.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * class MyComponent extends React.Component {
 *  render () {
 *    return <List.Subheader>My List Title</List.Subheader>;
 *  }
 * }
 *
 * export default MyComponent;
 * ```
 */
let ListSubheader = /** @class */ (() => {
    class ListSubheader extends React.Component {
        render() {
            const { style, theme, ...rest } = this.props;
            const { colors, fonts } = theme;
            const font = fonts.medium;
            const textColor = color(colors.text)
                .alpha(0.54)
                .rgb()
                .string();
            return (React.createElement(Text, Object.assign({ numberOfLines: 1 }, rest, { style: [styles.container, { color: textColor, ...font }, style] })));
        }
    }
    ListSubheader.displayName = 'List.Subheader';
    return ListSubheader;
})();
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 13,
    },
});
export default withTheme(ListSubheader);
