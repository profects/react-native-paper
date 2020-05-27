import color from 'color';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Typography/Text';
import Icon from '../Icon';
import TouchableRipple from '../TouchableRipple';
import { withTheme } from '../../core/theming';
/**
 * A component used to show an action item with an icon and a label in a navigation drawer.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/drawer-item.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Drawer } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *    <Drawer.Item
 *      style={{ backgroundColor: '#64ffda' }}
 *      icon="star"
 *      label="First Item"
 *    />
 * );
 *
 * export default MyComponent;
 * ```
 */
let DrawerItem = /** @class */ (() => {
    class DrawerItem extends React.Component {
        render() {
            const { icon, label, active, theme, style, onPress, accessibilityLabel, ...rest } = this.props;
            const { colors, roundness } = theme;
            const backgroundColor = active
                ? color(colors.primary)
                    .alpha(0.12)
                    .rgb()
                    .string()
                : 'transparent';
            const contentColor = active
                ? colors.primary
                : color(colors.text)
                    .alpha(0.68)
                    .rgb()
                    .string();
            const font = theme.fonts.medium;
            const labelMargin = icon ? 32 : 0;
            return (React.createElement(View, Object.assign({}, rest, { style: [
                    styles.container,
                    { backgroundColor, borderRadius: roundness },
                    style,
                ] }),
                React.createElement(TouchableRipple, { borderless: true, delayPressIn: 0, onPress: onPress, style: { borderRadius: roundness }, accessibilityTraits: active ? ['button', 'selected'] : 'button', accessibilityComponentType: "button", accessibilityRole: "button", accessibilityStates: active ? ['selected'] : [], accessibilityLabel: accessibilityLabel },
                    React.createElement(View, { style: styles.wrapper },
                        icon ? (React.createElement(Icon, { source: icon, size: 24, color: contentColor })) : null,
                        React.createElement(Text, { numberOfLines: 1, style: [
                                styles.label,
                                {
                                    color: contentColor,
                                    ...font,
                                    marginLeft: labelMargin,
                                },
                            ] }, label)))));
        }
    }
    DrawerItem.displayName = 'Drawer.Item';
    return DrawerItem;
})();
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 4,
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    label: {
        marginRight: 32,
    },
});
export default withTheme(DrawerItem);
