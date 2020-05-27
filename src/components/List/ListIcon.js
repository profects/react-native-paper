import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from '../Icon';
/**
 * A component to show an icon in a list item.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/list-icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Icon color={Colors.blue500} icon="folder" />
 *   <List.Icon color={Colors.blue500} icon="equal" />
 *   <List.Icon color={Colors.blue500} icon="calendar" />
 * );
 *
 * export default MyComponent;
 * ```
 */
let ListIcon = /** @class */ (() => {
    class ListIcon extends React.Component {
        render() {
            const { icon, color: iconColor, style } = this.props;
            return (React.createElement(View, { style: [styles.item, style], pointerEvents: "box-none" },
                React.createElement(Icon, { source: icon, size: 24, color: iconColor })));
        }
    }
    ListIcon.displayName = 'List.Icon';
    return ListIcon;
})();
export default ListIcon;
const styles = StyleSheet.create({
    item: {
        margin: 8,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
