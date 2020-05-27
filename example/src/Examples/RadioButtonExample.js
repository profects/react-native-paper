import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph, RadioButton, Colors, TouchableRipple, useTheme, } from 'react-native-paper';
const RadioButtonExample = () => {
    const [checked, setChecked] = React.useState('normal');
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [
            styles.container,
            {
                backgroundColor: background,
            },
        ] },
        React.createElement(TouchableRipple, { onPress: () => setChecked('normal') },
            React.createElement(View, { style: styles.row },
                React.createElement(Paragraph, null, "Normal - Android"),
                React.createElement(View, { pointerEvents: "none" },
                    React.createElement(RadioButton.Android, { value: "normal", status: checked === 'normal' ? 'checked' : 'unchecked' })))),
        React.createElement(TouchableRipple, { onPress: () => setChecked('normal-ios') },
            React.createElement(View, { style: styles.row },
                React.createElement(Paragraph, null, "Normal 2 - IOS"),
                React.createElement(View, { pointerEvents: "none" },
                    React.createElement(RadioButton.IOS, { value: "normal-ios", status: checked === 'normal-ios' ? 'checked' : 'unchecked' })))),
        React.createElement(TouchableRipple, { onPress: () => setChecked('custom') },
            React.createElement(View, { style: styles.row },
                React.createElement(Paragraph, null, "Custom"),
                React.createElement(View, { pointerEvents: "none" },
                    React.createElement(RadioButton, { value: "custom", color: Colors.blue500, status: checked === 'custom' ? 'checked' : 'unchecked' })))),
        React.createElement(RadioButton.Item, { label: "Normal 3 - Item", value: "normal-item", status: checked === 'normal-item' ? 'checked' : 'unchecked', onPress: () => setChecked('normal-item') }),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Checked (Disabled)"),
            React.createElement(RadioButton, { value: "first", status: "checked", disabled: true })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Unchecked (Disabled)"),
            React.createElement(RadioButton, { value: "second", status: "unchecked", disabled: true })),
        React.createElement(RadioButton.Item, { label: "Checked - Item (Disabled)", value: "third", status: "checked", disabled: true }),
        React.createElement(RadioButton.Item, { label: "Unchecked - Item (Disabled)", value: "fourth", status: "unchecked", disabled: true })));
};
RadioButtonExample.title = 'Radio Button';
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
export default RadioButtonExample;
