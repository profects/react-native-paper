import color from 'color';
import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import TouchableRipple from '../TouchableRipple';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
/**
 * A component to show tiles inside a List.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/list-item-1.png" />
 *   <img class="medium" src="screenshots/list-item-2.png" />
 *   <img class="medium" src="screenshots/list-item-3.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Item
 *     title="First Item"
 *     description="Item description"
 *     left={props => <List.Icon {...props} icon="folder" />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */
let ListItem = /** @class */ (() => {
    class ListItem extends React.Component {
        renderDescription(descriptionColor, description) {
            const { descriptionEllipsizeMode, descriptionStyle, descriptionNumberOfLines, } = this.props;
            return typeof description === 'function' ? (description({
                ellipsizeMode: descriptionEllipsizeMode,
                color: descriptionColor,
                fontSize: styles.description.fontSize,
            })) : (React.createElement(Text, { numberOfLines: descriptionNumberOfLines, ellipsizeMode: descriptionEllipsizeMode, style: [
                    styles.description,
                    { color: descriptionColor },
                    descriptionStyle,
                ] }, description));
        }
        render() {
            const { left, right, title, description, onPress, theme, style, titleStyle, titleNumberOfLines, titleEllipsizeMode, ...rest } = this.props;
            const titleColor = color(theme.colors.text)
                .alpha(0.87)
                .rgb()
                .string();
            const descriptionColor = color(theme.colors.text)
                .alpha(0.54)
                .rgb()
                .string();
            return (React.createElement(TouchableRipple, Object.assign({}, rest, { style: [styles.container, style], onPress: onPress }),
                React.createElement(View, { style: styles.row },
                    left
                        ? left({
                            color: descriptionColor,
                            style: description
                                ? styles.iconMarginLeft
                                : {
                                    ...styles.iconMarginLeft,
                                    ...styles.marginVerticalNone,
                                },
                        })
                        : null,
                    React.createElement(View, { style: [styles.item, styles.content] },
                        React.createElement(Text, { ellipsizeMode: titleEllipsizeMode, numberOfLines: titleNumberOfLines, style: [styles.title, { color: titleColor }, titleStyle] }, title),
                        description
                            ? this.renderDescription(descriptionColor, description)
                            : null),
                    right
                        ? right({
                            color: descriptionColor,
                            style: description
                                ? styles.iconMarginRight
                                : {
                                    ...styles.iconMarginRight,
                                    ...styles.marginVerticalNone,
                                },
                        })
                        : null)));
        }
    }
    ListItem.displayName = 'List.Item';
    ListItem.defaultProps = {
        titleNumberOfLines: 1,
        descriptionNumberOfLines: 2,
    };
    return ListItem;
})();
const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    row: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
    },
    description: {
        fontSize: 14,
    },
    marginVerticalNone: { marginVertical: 0 },
    iconMarginLeft: { marginLeft: 0, marginRight: 16 },
    iconMarginRight: { marginRight: 0 },
    item: {
        marginVertical: 6,
        paddingLeft: 8,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
});
export default withTheme(ListItem);
