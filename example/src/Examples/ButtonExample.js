import * as React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Button, List, useTheme } from 'react-native-paper';
const ButtonExample = () => {
    const { colors } = useTheme();
    return (React.createElement(ScrollView, { style: [styles.container, { backgroundColor: colors.background }] },
        React.createElement(List.Section, { title: "Text button" },
            React.createElement(View, { style: styles.row },
                React.createElement(Button, { onPress: () => { }, style: styles.button }, "Default"),
                React.createElement(Button, { color: colors.accent, onPress: () => { }, style: styles.button }, "Custom"),
                React.createElement(Button, { disabled: true, onPress: () => { }, style: styles.button }, "Disabled"),
                React.createElement(Button, { icon: "camera", onPress: () => { }, style: styles.button }, "Icon"),
                React.createElement(Button, { loading: true, onPress: () => { }, style: styles.button }, "Loading"))),
        React.createElement(List.Section, { title: "Outlined button" },
            React.createElement(View, { style: styles.row },
                React.createElement(Button, { mode: "outlined", onPress: () => { }, style: styles.button }, "Default"),
                React.createElement(Button, { mode: "outlined", color: colors.accent, onPress: () => { }, style: styles.button }, "Custom"),
                React.createElement(Button, { mode: "outlined", disabled: true, onPress: () => { }, style: styles.button }, "Disabled"),
                React.createElement(Button, { mode: "outlined", icon: "camera", onPress: () => { }, style: styles.button }, "Icon"),
                React.createElement(Button, { mode: "outlined", loading: true, onPress: () => { }, style: styles.button }, "Loading"),
                React.createElement(Button, { icon: "heart", mode: "outlined", onPress: () => { }, style: styles.button, labelStyle: {
                        fontWeight: '800',
                        fontSize: 24,
                    } }, "Custom Font"))),
        React.createElement(List.Section, { title: "Contained button" },
            React.createElement(View, { style: styles.row },
                React.createElement(Button, { mode: "contained", onPress: () => { }, style: styles.button }, "Default"),
                React.createElement(Button, { mode: "contained", color: colors.accent, onPress: () => { }, style: styles.button }, "Custom"),
                React.createElement(Button, { mode: "contained", disabled: true, onPress: () => { }, style: styles.button }, "Disabled"),
                React.createElement(Button, { mode: "contained", icon: "camera", onPress: () => { }, style: styles.button }, "Icon"),
                React.createElement(Button, { mode: "contained", loading: true, onPress: () => { }, style: styles.button }, "Loading"))),
        React.createElement(List.Section, { title: "Custom icon" },
            React.createElement(View, { style: styles.row },
                React.createElement(Button, { mode: "outlined", icon: {
                        uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400',
                    }, onPress: () => { }, style: styles.button }, "Remote image"),
                React.createElement(Button, { mode: "outlined", icon: require('../../assets/images/favorite.png'), onPress: () => { }, style: styles.button }, "Required asset"),
                React.createElement(Button, { mode: "outlined", icon: ({ size }) => (React.createElement(Image, { source: require('../../assets/images/chameleon.jpg'), style: { width: size, height: size, borderRadius: size / 2 } })), onPress: () => { }, style: styles.button }, "Custom component")))));
};
ButtonExample.title = 'Button';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
    },
    button: {
        margin: 4,
    },
});
export default ButtonExample;
