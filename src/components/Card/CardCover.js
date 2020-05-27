import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { withTheme } from '../../core/theming';
import { grey200 } from '../../styles/colors';
/**
 * A component to show a cover image inside a Card.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/card-cover.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://facebook.github.io/react-native/docs/image.html#props
 */
let CardCover = /** @class */ (() => {
    class CardCover extends React.Component {
        render() {
            const { index, total, style, theme, ...rest } = this.props;
            const { roundness } = theme;
            let coverStyle;
            if (index === 0) {
                if (total === 1) {
                    coverStyle = {
                        borderRadius: roundness,
                    };
                }
                else {
                    coverStyle = {
                        borderTopLeftRadius: roundness,
                        borderTopRightRadius: roundness,
                    };
                }
            }
            else if (typeof total === 'number' && index === total - 1) {
                coverStyle = {
                    borderBottomLeftRadius: roundness,
                };
            }
            return (React.createElement(View, { style: [styles.container, coverStyle, style] },
                React.createElement(Image, Object.assign({}, rest, { style: [styles.image, coverStyle] }))));
        }
    }
    CardCover.displayName = 'Card.Cover';
    return CardCover;
})();
const styles = StyleSheet.create({
    container: {
        height: 195,
        backgroundColor: grey200,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        padding: 16,
        justifyContent: 'flex-end',
        resizeMode: 'cover',
    },
});
export default withTheme(CardCover);
// @component-docs ignore-next-line
export { CardCover };
