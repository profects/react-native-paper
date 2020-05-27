import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';
import color from 'color';
import { black, white } from '../styles/colors';
import { withTheme } from '../core/theming';
const defaultSize = 20;
/**
 * Badges are small status descriptors for UI elements.
 * A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="small" src="screenshots/badge-1.png" />
 *     <figcaption>Badge with content</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="small" src="screenshots/badge-2.png" />
 *     <figcaption>Badge without content</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Badge } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Badge>3</Badge>
 * );
 *
 * export default MyComponent;
 * ```
 */
let Badge = /** @class */ (() => {
    class Badge extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                opacity: new Animated.Value(this.props.visible ? 1 : 0),
            };
        }
        componentDidUpdate(prevProps) {
            const { visible, theme: { animation: { scale }, }, } = this.props;
            if (visible !== prevProps.visible) {
                Animated.timing(this.state.opacity, {
                    toValue: visible ? 1 : 0,
                    duration: 150 * scale,
                    useNativeDriver: true,
                }).start();
            }
        }
        render() {
            const { children, size = defaultSize, style, theme, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            visible, ...rest } = this.props;
            const { opacity } = this.state;
            const { backgroundColor = theme.colors.notification, ...restStyle } = StyleSheet.flatten(style) || {};
            const textColor = color(backgroundColor).isLight() ? black : white;
            const borderRadius = size / 2;
            return (React.createElement(Animated.Text, Object.assign({ numberOfLines: 1, style: [
                    {
                        opacity,
                        backgroundColor,
                        color: textColor,
                        fontSize: size * 0.5,
                        ...theme.fonts.regular,
                        lineHeight: size,
                        height: size,
                        minWidth: size,
                        borderRadius,
                    },
                    styles.container,
                    restStyle,
                ] }, rest), children));
        }
    }
    Badge.defaultProps = {
        visible: true,
        size: defaultSize,
    };
    return Badge;
})();
export default withTheme(Badge);
const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: 4,
        overflow: 'hidden',
    },
});
