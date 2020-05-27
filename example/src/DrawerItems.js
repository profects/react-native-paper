import * as React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Drawer, Switch, TouchableRipple, Text, Colors, useTheme, } from 'react-native-paper';
const DrawerItemsData = [
    { label: 'Inbox', icon: 'inbox', key: 0 },
    { label: 'Starred', icon: 'star', key: 1 },
    { label: 'Sent mail', icon: 'send', key: 2 },
    { label: 'Colored label', icon: 'palette', key: 3 },
    { label: 'A very long title that will be truncated', icon: 'delete', key: 4 },
];
const DrawerItems = ({ toggleTheme, toggleRTL, isRTL, isDarkTheme }) => {
    const [drawerItemIndex, setDrawerItemIndex] = React.useState(0);
    const _setDrawerItem = (index) => setDrawerItemIndex(index);
    const { colors } = useTheme();
    return (React.createElement(View, { style: [styles.drawerContent, { backgroundColor: colors.surface }] },
        React.createElement(Drawer.Section, { title: "Example items" }, DrawerItemsData.map((props, index) => (React.createElement(Drawer.Item, Object.assign({}, props, { key: props.key, theme: props.key === 3
                ? { colors: { primary: Colors.tealA200 } }
                : undefined, active: drawerItemIndex === index, onPress: () => _setDrawerItem(index) }))))),
        React.createElement(Drawer.Section, { title: "Preferences" },
            React.createElement(TouchableRipple, { onPress: toggleTheme },
                React.createElement(View, { style: styles.preference },
                    React.createElement(Text, null, "Dark Theme"),
                    React.createElement(View, { pointerEvents: "none" },
                        React.createElement(Switch, { value: isDarkTheme })))),
            React.createElement(TouchableRipple, { onPress: toggleRTL },
                React.createElement(View, { style: styles.preference },
                    React.createElement(Text, null, "RTL"),
                    React.createElement(View, { pointerEvents: "none" },
                        React.createElement(Switch, { value: isRTL })))))));
};
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 22,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
export default DrawerItems;
