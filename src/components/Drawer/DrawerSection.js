import color from 'color';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Typography/Text';
import Divider from '../Divider';
import { withTheme } from '../../core/theming';
/**
 * A component to group content inside a navigation drawer.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/drawer-section.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Drawer } from 'react-native-paper';
 *
 * export default function MyComponent = () => {
 *
 *     const [active, setActive] = React.useState(false);
 *
 *     return (
 *       <Drawer.Section title="Some title">
 *         <Drawer.Item
 *           label="First Item"
 *           active={active === 'first'}
 *           onPress={() =>  setActive('first')}
 *         />
 *         <Drawer.Item
 *           label="Second Item"
 *           active={active === 'second'}
 *           onPress={() =>  setActive('second')}
 *         />
 *      </Drawer.Section>
 *     );
 * }
 * ```
 */
let DrawerSection = /** @class */ (() => {
    class DrawerSection extends React.Component {
        render() {
            const { children, title, theme, style, ...rest } = this.props;
            const { colors, fonts } = theme;
            const titleColor = color(colors.text)
                .alpha(0.54)
                .rgb()
                .string();
            const font = fonts.medium;
            return (React.createElement(View, Object.assign({ style: [styles.container, style] }, rest),
                title && (React.createElement(View, { style: styles.titleContainer },
                    React.createElement(Text, { numberOfLines: 1, style: { color: titleColor, ...font, marginLeft: 16 } }, title))),
                children,
                React.createElement(Divider, { style: styles.divider })));
        }
    }
    DrawerSection.displayName = 'Drawer.Section';
    return DrawerSection;
})();
const styles = StyleSheet.create({
    container: {
        marginBottom: 4,
    },
    titleContainer: {
        height: 40,
        justifyContent: 'center',
    },
    divider: {
        marginTop: 4,
    },
});
export default withTheme(DrawerSection);
