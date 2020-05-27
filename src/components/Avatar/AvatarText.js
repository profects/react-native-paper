import * as React from 'react';
import { View, StyleSheet, } from 'react-native';
import Color from 'color';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import { white } from '../../styles/colors';
const defaultSize = 64;
/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/avatar-text.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Text size={24} label="XD" />
 * );
 * ```
 */
let AvatarText = /** @class */ (() => {
    class AvatarText extends React.Component {
        render() {
            const { label, size = defaultSize, style, theme, labelStyle, color, ...rest } = this.props;
            const { backgroundColor = theme.colors.primary, ...restStyle } = StyleSheet.flatten(style) || {};
            const textColor = color ||
                (Color(backgroundColor).isLight() ? 'rgba(0, 0, 0, .54)' : white);
            return (React.createElement(View, Object.assign({ style: [
                    {
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        backgroundColor,
                    },
                    styles.container,
                    restStyle,
                ] }, rest),
                React.createElement(Text, { style: [
                        styles.text,
                        {
                            color: textColor,
                            fontSize: size / 2,
                            lineHeight: size,
                        },
                        labelStyle,
                    ], numberOfLines: 1 }, label)));
        }
    }
    AvatarText.displayName = 'Avatar.Text';
    AvatarText.defaultProps = {
        size: defaultSize,
    };
    return AvatarText;
})();
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});
export default withTheme(AvatarText);
