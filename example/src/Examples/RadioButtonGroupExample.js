import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, RadioButton, Paragraph, List, useTheme, } from 'react-native-paper';
const RadioButtonGroupExample = () => {
    const [value, setValue] = React.useState('first');
    const [value2, setValue2] = React.useState('first');
    const { colors: { background, primary }, } = useTheme();
    return (React.createElement(View, { style: [
            styles.container,
            {
                backgroundColor: background,
            },
        ] },
        React.createElement(List.Section, { title: "With RadioButton" },
            React.createElement(RadioButton.Group, { value: value, onValueChange: (value) => setValue(value) },
                React.createElement(View, { style: styles.row },
                    React.createElement(Paragraph, null, "First"),
                    React.createElement(RadioButton, { value: "first" })),
                React.createElement(View, { style: styles.row },
                    React.createElement(Paragraph, null, "Second"),
                    React.createElement(RadioButton.Android, { value: "second" })),
                React.createElement(View, { style: styles.row },
                    React.createElement(Paragraph, null, "Third"),
                    React.createElement(RadioButton.IOS, { value: "third" })))),
        React.createElement(List.Section, { title: "With RadioButton.Item" },
            React.createElement(RadioButton.Group, { value: value2, onValueChange: (value) => setValue2(value) },
                React.createElement(RadioButton.Item, { label: "First item", value: "first" }),
                React.createElement(RadioButton.Item, { label: "Second item", value: "second" }),
                React.createElement(RadioButton.Item, { label: "Third item", value: "third", labelStyle: { color: primary } })))));
};
RadioButtonGroupExample.title = 'Radio Button Group';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
export default RadioButtonGroupExample;
