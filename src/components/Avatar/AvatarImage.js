import * as React from 'react';
import { Image, StyleSheet, View, } from 'react-native';
import { withTheme } from '../../core/theming';
const defaultSize = 64;
/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/avatar-image.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Image size={24} source={require('../assets/avatar.png')} />
 * );
 * ```
 */
let AvatarImage = /** @class */ (() => {
    class AvatarImage extends React.Component {
        render() {
            const { size = defaultSize, source, style, theme, ...rest } = this.props;
            const { colors } = theme;
            const { backgroundColor = colors.primary } = StyleSheet.flatten(style) || {};
            return (React.createElement(View, Object.assign({ style: [
                    {
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        backgroundColor,
                    },
                    style,
                ] }, rest),
                React.createElement(Image, { source: source, style: { width: size, height: size, borderRadius: size / 2 } })));
        }
    }
    AvatarImage.displayName = 'Avatar.Image';
    AvatarImage.defaultProps = {
        size: defaultSize,
    };
    return AvatarImage;
})();
export default withTheme(AvatarImage);
