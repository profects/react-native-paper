import * as React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Chip, List, useTheme, Snackbar } from 'react-native-paper';
import color from 'color';
const ChipExample = () => {
    const [visible, setVisible] = React.useState(false);
    const { colors } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(ScrollView, { style: [styles.container, { backgroundColor: colors.surface }] },
            React.createElement(List.Section, { title: "Flat chip" },
                React.createElement(View, { style: styles.row },
                    React.createElement(Chip, { mode: "outlined", selected: true, onPress: () => { }, style: styles.chip }, "Simple"),
                    React.createElement(Chip, { onPress: () => { }, onClose: () => { }, style: styles.chip }, "Close button"),
                    React.createElement(Chip, { icon: "heart", onPress: () => { }, onClose: () => { }, style: styles.chip }, "Icon"),
                    React.createElement(Chip, { avatar: React.createElement(Image, { source: require('../../assets/images/avatar.png') }), onPress: () => { }, onClose: () => { }, style: styles.chip }, "Avatar"),
                    React.createElement(Chip, { selected: true, avatar: React.createElement(Image, { source: require('../../assets/images/avatar.png') }), onPress: () => { }, style: styles.chip }, "Avatar (selected)"),
                    React.createElement(Chip, { disabled: true, icon: "heart", onClose: () => { }, style: styles.chip }, "Icon (disabled)"),
                    React.createElement(Chip, { disabled: true, avatar: React.createElement(Image, { source: require('../../assets/images/avatar.png') }), style: styles.chip }, "Avatar (disabled)"))),
            React.createElement(List.Section, { title: "Outlined chip" },
                React.createElement(View, { style: styles.row },
                    React.createElement(Chip, { mode: "outlined", onPress: () => { }, style: styles.chip }, "Simple"),
                    React.createElement(Chip, { mode: "outlined", onPress: () => { }, onClose: () => { }, style: styles.chip }, "Close button"),
                    React.createElement(Chip, { mode: "outlined", icon: "heart", onPress: () => { }, onClose: () => { }, style: styles.chip }, "Icon"),
                    React.createElement(Chip, { mode: "outlined", avatar: React.createElement(Image, { source: require('../../assets/images/avatar.png') }), onPress: () => { }, style: styles.chip }, "Avatar"),
                    React.createElement(Chip, { selected: true, mode: "outlined", avatar: React.createElement(Image, { source: require('../../assets/images/avatar.png') }), onPress: () => { }, style: styles.chip }, "Avatar (selected)"),
                    React.createElement(Chip, { disabled: true, mode: "outlined", icon: "heart", onClose: () => { }, style: styles.chip }, "Icon (disabled)"),
                    React.createElement(Chip, { disabled: true, mode: "outlined", avatar: React.createElement(Image, { source: require('../../assets/images/avatar.png') }), style: styles.chip }, "Avatar (disabled)"))),
            React.createElement(List.Section, { title: "Custom chip" },
                React.createElement(View, { style: styles.row },
                    React.createElement(Chip, { mode: "outlined", onPress: () => { }, onLongPress: () => setVisible(true), style: styles.chip }, "With onLongPress"),
                    React.createElement(Chip, { selected: true, onPress: () => { }, style: [
                            styles.chip,
                            {
                                backgroundColor: color(colors.primary)
                                    .alpha(0.2)
                                    .rgb()
                                    .string(),
                            },
                        ], selectedColor: colors.primary }, "Flat selected chip with custom color"),
                    React.createElement(Chip, { onPress: () => { }, style: styles.chip, selectedColor: colors.primary }, "Flat unselected chip with custom color"),
                    React.createElement(Chip, { selected: true, mode: "outlined", onPress: () => { }, style: [
                            styles.chip,
                            {
                                backgroundColor: color(colors.primary)
                                    .alpha(0.2)
                                    .rgb()
                                    .string(),
                            },
                        ], selectedColor: colors.primary }, "Outlined selected chip with custom color"),
                    React.createElement(Chip, { mode: "outlined", onPress: () => { }, style: styles.chip, selectedColor: colors.primary }, "Outlined unselected chip with custom color"),
                    React.createElement(Chip, { onPress: () => { }, style: styles.chip, textStyle: styles.tiny }, "With custom size")))),
        React.createElement(Snackbar, { visible: visible, onDismiss: () => setVisible(false), duration: Snackbar.DURATION_SHORT }, "onLongPress activated!")));
};
ChipExample.title = 'Chip';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
    },
    chip: {
        margin: 4,
    },
    tiny: {
        marginVertical: 2,
        marginRight: 2,
        marginLeft: 2,
        minHeight: 19,
        lineHeight: 19,
    },
});
export default ChipExample;
