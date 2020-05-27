import * as React from 'react';
import { Platform, StyleSheet, TouchableWithoutFeedback, View, } from 'react-native';
import color from 'color';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import { white } from '../../styles/colors';
/**
 * A component used to display a title and optional subtitle in an appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-content.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
let AppbarContent = /** @class */ (() => {
    class AppbarContent extends React.Component {
        render() {
            const { color: titleColor = white, subtitle, subtitleStyle, onPress, style, titleRef, titleStyle, theme, title, ...rest } = this.props;
            const { fonts } = theme;
            const subtitleColor = color(titleColor)
                .alpha(0.7)
                .rgb()
                .string();
            return (React.createElement(TouchableWithoutFeedback, { onPress: onPress, disabled: !onPress },
                React.createElement(View, Object.assign({ style: [styles.container, style] }, rest),
                    React.createElement(Text, { ref: titleRef, style: [
                            {
                                color: titleColor,
                                ...(Platform.OS === 'ios' ? fonts.regular : fonts.medium),
                            },
                            styles.title,
                            titleStyle,
                        ], numberOfLines: 1, accessible: true, accessibilityTraits: "header", 
                        // @ts-ignore
                        accessibilityRole: Platform.OS === 'web' ? 'heading' : 'header' }, title),
                    subtitle ? (React.createElement(Text, { style: [styles.subtitle, { color: subtitleColor }, subtitleStyle], numberOfLines: 1 }, subtitle)) : null)));
        }
    }
    AppbarContent.displayName = 'Appbar.Content';
    return AppbarContent;
})();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    title: {
        fontSize: Platform.OS === 'ios' ? 17 : 20,
    },
    subtitle: {
        fontSize: Platform.OS === 'ios' ? 11 : 14,
    },
});
export default withTheme(AppbarContent);
// @component-docs ignore-next-line
export { AppbarContent };
