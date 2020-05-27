import * as React from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View, I18nManager, } from 'react-native';
import color from 'color';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
/**
 * A component to display title in table header.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-header.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *       <DataTable>
 *         <DataTable.Header>
 *           <DataTable.Title
 *             sortDirection='descending'
 *           >
 *             Dessert
 *           </DataTable.Title>
 *           <DataTable.Title numeric>Calories</DataTable.Title>
 *           <DataTable.Title numeric>Fat (g)</DataTable.Title>
 *         </DataTable.Header>
 *       </DataTable>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
let DataTableTitle = /** @class */ (() => {
    class DataTableTitle extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                spinAnim: new Animated.Value(this.props.sortDirection === 'ascending' ? 0 : 1),
            };
        }
        componentDidUpdate(prevProps) {
            if (prevProps.sortDirection === this.props.sortDirection) {
                return;
            }
            Animated.timing(this.state.spinAnim, {
                toValue: this.props.sortDirection === 'ascending' ? 0 : 1,
                duration: 150,
                useNativeDriver: true,
            }).start();
        }
        render() {
            const { numeric, children, onPress, sortDirection, theme, style, numberOfLines, ...rest } = this.props;
            const textColor = color(theme.colors.text)
                .alpha(0.6)
                .rgb()
                .string();
            const spin = this.state.spinAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '180deg'],
            });
            const icon = sortDirection ? (React.createElement(Animated.View, { style: [styles.icon, { transform: [{ rotate: spin }] }] },
                React.createElement(MaterialCommunityIcon, { name: "arrow-down", size: 16, color: theme.colors.text, direction: I18nManager.isRTL ? 'rtl' : 'ltr' }))) : null;
            return (React.createElement(TouchableWithoutFeedback, Object.assign({ disabled: !onPress, onPress: onPress }, rest),
                React.createElement(View, { style: [styles.container, numeric && styles.right, style] },
                    icon,
                    React.createElement(Text, { style: [
                            styles.cell,
                            sortDirection ? styles.sorted : { color: textColor },
                        ], numberOfLines: numberOfLines }, children))));
        }
    }
    DataTableTitle.displayName = 'DataTable.Title';
    DataTableTitle.defaultProps = {
        numberOfLines: 1,
    };
    return DataTableTitle;
})();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        paddingVertical: 12,
    },
    right: {
        justifyContent: 'flex-end',
    },
    cell: {
        height: 24,
        lineHeight: 24,
        fontSize: 12,
        fontWeight: '500',
        alignItems: 'center',
    },
    sorted: {
        marginLeft: 8,
    },
    icon: {
        height: 24,
        justifyContent: 'center',
    },
});
export default withTheme(DataTableTitle);
// @component-docs ignore-next-line
export { DataTableTitle };
