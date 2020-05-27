import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, List, Colors, useTheme } from 'react-native-paper';
const AvatarExample = () => {
    const { colors } = useTheme();
    return (React.createElement(ScrollView, { style: [styles.container, { backgroundColor: colors.surface }] },
        React.createElement(List.Section, { title: "Text" },
            React.createElement(View, { style: styles.row },
                React.createElement(Avatar.Text, { style: [styles.avatar, { backgroundColor: Colors.yellow500 }], label: "XD", color: Colors.black }),
                React.createElement(Avatar.Text, { style: styles.avatar, label: "XD" }),
                React.createElement(Avatar.Text, { style: styles.avatar, label: "XD", size: 80 }))),
        React.createElement(List.Section, { title: "Icon" },
            React.createElement(View, { style: styles.row },
                React.createElement(Avatar.Icon, { style: [styles.avatar, { backgroundColor: Colors.yellow500 }], icon: "folder", color: Colors.black }),
                React.createElement(Avatar.Icon, { style: styles.avatar, icon: "folder" }),
                React.createElement(Avatar.Icon, { style: styles.avatar, icon: "folder", size: 80 }))),
        React.createElement(List.Section, { title: "Image" },
            React.createElement(View, { style: styles.row },
                React.createElement(Avatar.Image, { style: styles.avatar, source: require('../../assets/images/avatar.png') }),
                React.createElement(Avatar.Image, { style: styles.avatar, source: require('../../assets/images/avatar.png'), size: 80 })))));
};
AvatarExample.title = 'Avatar';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 8,
    },
    avatar: {
        margin: 8,
    },
});
export default AvatarExample;
