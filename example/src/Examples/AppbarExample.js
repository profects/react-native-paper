import * as React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Colors, Appbar, FAB, Switch, Paragraph, useTheme, } from 'react-native-paper';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const AppbarExample = ({ navigation }) => {
    const { colors } = useTheme();
    const [showLeftIcon, setShowLeftIcon] = React.useState(true);
    const [showSubtitle, setShowSubtitle] = React.useState(true);
    const [showSearchIcon, setShowSearchIcon] = React.useState(true);
    const [showMoreIcon, setShowMoreIcon] = React.useState(true);
    const [showCustomColor, setShowCustomColor] = React.useState(false);
    const [showExactTheme, setShowExactTheme] = React.useState(false);
    navigation.setOptions({
        header: () => (React.createElement(Appbar.Header, { style: showCustomColor ? { backgroundColor: '#ffff00' } : null, theme: {
                mode: showExactTheme ? 'exact' : 'adaptive',
            } },
            showLeftIcon && (React.createElement(Appbar.BackAction, { onPress: () => navigation.goBack() })),
            React.createElement(Appbar.Content, { title: "Title", subtitle: showSubtitle ? 'Subtitle' : null }),
            showSearchIcon && React.createElement(Appbar.Action, { icon: "magnify", onPress: () => { } }),
            showMoreIcon && React.createElement(Appbar.Action, { icon: MORE_ICON, onPress: () => { } }))),
    });
    return (React.createElement(View, { style: [styles.container, { backgroundColor: colors.background }] },
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Left icon"),
            React.createElement(Switch, { value: showLeftIcon, onValueChange: setShowLeftIcon })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Subtitle"),
            React.createElement(Switch, { value: showSubtitle, onValueChange: setShowSubtitle })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Search icon"),
            React.createElement(Switch, { value: showSearchIcon, onValueChange: setShowSearchIcon })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "More icon"),
            React.createElement(Switch, { value: showMoreIcon, onValueChange: setShowMoreIcon })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Custom Color"),
            React.createElement(Switch, { value: showCustomColor, onValueChange: setShowCustomColor })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Exact Dark Theme"),
            React.createElement(Switch, { value: showExactTheme, onValueChange: setShowExactTheme })),
        React.createElement(Appbar, { style: [styles.bottom], theme: { mode: showExactTheme ? 'exact' : 'adaptive' } },
            React.createElement(Appbar.Action, { icon: "archive", onPress: () => { } }),
            React.createElement(Appbar.Action, { icon: "email", onPress: () => { } }),
            React.createElement(Appbar.Action, { icon: "label", onPress: () => { } }),
            React.createElement(Appbar.Action, { icon: "delete", onPress: () => { } })),
        React.createElement(FAB, { icon: "reply", onPress: () => { }, style: styles.fab })));
};
AppbarExample.title = 'Appbar';
export default AppbarExample;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingVertical: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 28,
    },
});
