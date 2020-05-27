import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph, Checkbox, Colors, TouchableRipple, useTheme, } from 'react-native-paper';
const CheckboxExample = () => {
    const [checkedNormal, setCheckedNormal] = React.useState(true);
    const [checkedCustom, setCheckedCustom] = React.useState(true);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [
            styles.container,
            {
                backgroundColor: background,
            },
        ] },
        React.createElement(TouchableRipple, { onPress: () => setCheckedNormal(!checkedNormal) },
            React.createElement(View, { style: styles.row },
                React.createElement(Paragraph, null, "Normal"),
                React.createElement(View, { pointerEvents: "none" },
                    React.createElement(Checkbox, { status: checkedNormal ? 'checked' : 'unchecked' })))),
        React.createElement(TouchableRipple, { onPress: () => setCheckedCustom(!checkedCustom) },
            React.createElement(View, { style: styles.row },
                React.createElement(Paragraph, null, "Custom"),
                React.createElement(View, { pointerEvents: "none" },
                    React.createElement(Checkbox, { color: Colors.blue500, status: checkedCustom ? 'checked' : 'unchecked' })))),
        React.createElement(TouchableRipple, { onPress: () => setIndeterminate(!indeterminate) },
            React.createElement(View, { style: styles.row },
                React.createElement(Paragraph, null, "Indeterminate"),
                React.createElement(View, { pointerEvents: "none" },
                    React.createElement(Checkbox, { status: indeterminate ? 'indeterminate' : 'unchecked' })))),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Checked (Disabled)"),
            React.createElement(Checkbox, { status: "checked", disabled: true })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Unchecked (Disabled)"),
            React.createElement(Checkbox, { status: "unchecked", disabled: true })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Indeterminate (Disabled)"),
            React.createElement(Checkbox, { status: "indeterminate", disabled: true }))));
};
CheckboxExample.title = 'Checkbox';
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
export default CheckboxExample;
