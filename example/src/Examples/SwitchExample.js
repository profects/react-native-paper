import * as React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Paragraph, Switch, Colors, TouchableRipple, useTheme, } from 'react-native-paper';
const SwitchExample = () => {
    const [valueNormal, setNormalValue] = React.useState(true);
    const [valueCustom, setCustomValue] = React.useState(true);
    const { colors: { background }, } = useTheme();
    const switchValueNormalLabel = `switch ${valueNormal === true ? 'on' : 'off'}`;
    const switchValueCustomlLabel = `switch ${valueCustom === true ? 'on' : 'off'}`;
    return Platform.OS === 'android' ? (React.createElement(View, { style: [
            styles.container,
            {
                backgroundColor: background,
            },
        ] },
        React.createElement(TouchableRipple, { onPress: () => setNormalValue(!valueNormal) },
            React.createElement(View, { style: styles.row },
                React.createElement(Paragraph, null,
                    "Normal ",
                    switchValueNormalLabel),
                React.createElement(View, { pointerEvents: "none" },
                    React.createElement(Switch, { value: valueNormal })))),
        React.createElement(TouchableRipple, { onPress: () => setCustomValue(!valueCustom) },
            React.createElement(View, { style: styles.row },
                React.createElement(Paragraph, null,
                    "Custom ",
                    switchValueCustomlLabel),
                React.createElement(View, { pointerEvents: "none" },
                    React.createElement(Switch, { value: valueCustom, color: Colors.blue500 })))),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Switch on (disabled)"),
            React.createElement(Switch, { disabled: true, value: true })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Switch off (disabled)"),
            React.createElement(Switch, { disabled: true })))) : (React.createElement(View, { style: [
            styles.container,
            {
                backgroundColor: background,
            },
        ] },
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null,
                "Normal ",
                switchValueNormalLabel),
            React.createElement(Switch, { value: valueNormal, onValueChange: () => setNormalValue(!valueNormal) })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null,
                "Custom ",
                switchValueCustomlLabel),
            React.createElement(Switch, { value: valueCustom, onValueChange: () => setCustomValue(!valueCustom), color: Colors.blue500 })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Switch on (disabled)"),
            React.createElement(Switch, { value: true, disabled: true })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Switch off (disabled)"),
            React.createElement(Switch, { value: false, disabled: true }))));
};
SwitchExample.title = 'Switch';
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
});
export default SwitchExample;
