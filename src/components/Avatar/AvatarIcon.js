import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import color from 'color';
import Icon from '../Icon';
import { withTheme } from '../../core/theming';
import { white } from '../../styles/colors';
const defaultSize = 64;
/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/avatar-icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Icon size={24} icon="folder" />
 * );
 * ```
 */
let Avatar = /** @class */ (() => {
    class Avatar extends React.Component {
        render() {
            const { icon, size = defaultSize, style, theme, ...rest } = this.props;
            const { backgroundColor = theme.colors.primary, ...restStyle } = StyleSheet.flatten(style) || {};
            const textColor = this.props.color ||
                (color(backgroundColor).isLight() ? 'rgba(0, 0, 0, .54)' : white);
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
                React.createElement(Icon, { source: icon, color: textColor, size: size * 0.6 })));
        }
    }
    Avatar.displayName = 'Avatar.Icon';
    Avatar.defaultProps = {
        size: defaultSize,
    };
    return Avatar;
})();
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default withTheme(Avatar);
