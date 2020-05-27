import * as React from 'react';
import { View, StyleSheet, } from 'react-native';
import ListSubheader from './ListSubheader';
import { withTheme } from '../../core/theming';
/**
 * A component used to group list items.
 *
 * <div class="screenshots">
 *   <img src="screenshots/list-section.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <List.Section>
 *         <List.Subheader>Some title</List.Subheader>
 *         <List.Item
 *           title="First Item"
 *           left={() => <List.Icon icon="folder" />}
 *        />
 *         <List.Item
 *           title="Second Item"
 *           left={() => <List.Icon color="#000" icon="folder" />}
 *        />
 *      </List.Section>
 *     );
 *   }
 * }
 *
 * export default MyComponent;
 * ```
 */
let ListSection = /** @class */ (() => {
    class ListSection extends React.Component {
        render() {
            const { children, title, titleStyle, style, ...rest } = this.props;
            return (React.createElement(View, Object.assign({}, rest, { style: [styles.container, style] }),
                title && React.createElement(ListSubheader, { style: titleStyle }, title),
                children));
        }
    }
    ListSection.displayName = 'List.Section';
    return ListSection;
})();
const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
});
export default withTheme(ListSection);
