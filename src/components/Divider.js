import * as React from 'react';
import color from 'color';
import { StyleSheet, View } from 'react-native';
import { withTheme } from '../core/theming';
import { black, white } from '../styles/colors';
/**
 * A divider is a thin, lightweight separator that groups content in lists and page layouts.
 *
 * <div class="screenshots">
 *  <figure>
 *    <img class="medium" src="screenshots/divider.png" />
 *  </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Divider, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Text>Apple</Text>
 *     <Divider />
 *     <Text>Orange</Text>
 *     <Divider />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */
class Divider extends React.Component {
    render() {
        const { inset, style, theme, ...rest } = this.props;
        const { dark: isDarkTheme } = theme;
        return (React.createElement(View, Object.assign({}, rest, { style: [
                isDarkTheme ? styles.dark : styles.light,
                inset && styles.inset,
                style,
            ] })));
    }
}
const styles = StyleSheet.create({
    light: {
        backgroundColor: color(black)
            .alpha(0.12)
            .rgb()
            .string(),
        height: StyleSheet.hairlineWidth,
    },
    dark: {
        backgroundColor: color(white)
            .alpha(0.12)
            .rgb()
            .string(),
        height: StyleSheet.hairlineWidth,
    },
    inset: {
        marginLeft: 72,
    },
});
export default withTheme(Divider);
