import * as React from 'react';
import { View, StyleSheet, Platform, } from 'react-native';
import { Menu, Appbar, Divider, Button, useTheme, List, TouchableRipple, } from 'react-native-paper';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const MenuExample = ({ navigation }) => {
    const [visible, setVisible] = React.useState({});
    const [contextualMenuCoord, setContextualMenuCoor] = React.useState({ x: 0, y: 0 });
    const _toggleMenu = (name) => () => setVisible({ ...visible, [name]: !visible[name] });
    const _getVisible = (name) => !!visible[name];
    const _handleLongPress = (event) => {
        const { nativeEvent } = event;
        setContextualMenuCoor({
            x: nativeEvent.pageX,
            y: nativeEvent.pageY,
        });
        setVisible({ menu3: true });
    };
    const { colors: { background }, } = useTheme();
    navigation.setOptions({
        headerShown: false,
    });
    return (React.createElement(View, { style: styles.screen },
        React.createElement(Appbar.Header, null,
            React.createElement(Appbar.BackAction, { onPress: () => navigation.goBack() }),
            React.createElement(Appbar.Content, { title: "Menu" }),
            React.createElement(Menu, { visible: _getVisible('menu1'), onDismiss: _toggleMenu('menu1'), anchor: React.createElement(Appbar.Action, { icon: MORE_ICON, color: "white", onPress: _toggleMenu('menu1') }) },
                React.createElement(Menu.Item, { onPress: () => { }, title: "Undo" }),
                React.createElement(Menu.Item, { onPress: () => { }, title: "Redo" }),
                React.createElement(Divider, null),
                React.createElement(Menu.Item, { onPress: () => { }, title: "Cut", disabled: true }),
                React.createElement(Menu.Item, { onPress: () => { }, title: "Copy", disabled: true }),
                React.createElement(Menu.Item, { onPress: () => { }, title: "Paste" }))),
        React.createElement(View, { style: [styles.container, { backgroundColor: background }] },
            React.createElement(View, { style: styles.alignCenter },
                React.createElement(Menu, { visible: _getVisible('menu2'), onDismiss: _toggleMenu('menu2'), anchor: React.createElement(Button, { mode: "outlined", onPress: _toggleMenu('menu2') }, "Menu with icons") },
                    React.createElement(Menu.Item, { icon: "undo", onPress: () => { }, title: "Undo" }),
                    React.createElement(Menu.Item, { icon: "redo", onPress: () => { }, title: "Redo" }),
                    React.createElement(Divider, null),
                    React.createElement(Menu.Item, { icon: "content-cut", onPress: () => { }, title: "Cut", disabled: true }),
                    React.createElement(Menu.Item, { icon: "content-copy", onPress: () => { }, title: "Copy", disabled: true }),
                    React.createElement(Menu.Item, { icon: "content-paste", onPress: () => { }, title: "Paste" }))),
            React.createElement(Menu, { visible: _getVisible('menu3'), onDismiss: _toggleMenu('menu3'), anchor: contextualMenuCoord },
                React.createElement(Menu.Item, { onPress: () => { }, title: "Item 1" }),
                React.createElement(Menu.Item, { onPress: () => { }, title: "Item 2" }),
                React.createElement(Divider, null),
                React.createElement(Menu.Item, { onPress: () => { }, title: "Item 3", disabled: true })),
            React.createElement(List.Section, { style: styles.list, title: "Contextual menu" },
                React.createElement(TouchableRipple, { onPress: () => { }, onLongPress: () => _handleLongPress },
                    React.createElement(List.Item, { title: "List item", description: "Long press me to open contextual menu" }))))));
};
MenuExample.title = 'Menu';
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingTop: 48,
    },
    list: {
        marginTop: 48,
    },
    alignCenter: {
        alignItems: 'center',
    },
});
export default MenuExample;
