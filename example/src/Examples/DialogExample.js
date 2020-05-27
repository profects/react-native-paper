import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Button, useTheme } from 'react-native-paper';
import { DialogWithCustomColors, DialogWithLoadingIndicator, DialogWithLongText, DialogWithRadioBtns, UndismissableDialog, } from './Dialogs';
const DialogExample = () => {
    const [visible, setVisible] = React.useState({});
    const _toggleDialog = (name) => () => setVisible({ ...visible, [name]: !visible[name] });
    const _getVisible = (name) => !!visible[name];
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(Button, { mode: "outlined", onPress: _toggleDialog('dialog1'), style: styles.button }, "Long text"),
        React.createElement(Button, { mode: "outlined", onPress: _toggleDialog('dialog2'), style: styles.button }, "Radio buttons"),
        React.createElement(Button, { mode: "outlined", onPress: _toggleDialog('dialog3'), style: styles.button }, "Progress indicator"),
        React.createElement(Button, { mode: "outlined", onPress: _toggleDialog('dialog4'), style: styles.button }, "Undismissable Dialog"),
        React.createElement(Button, { mode: "outlined", onPress: _toggleDialog('dialog5'), style: styles.button }, "Custom colors"),
        React.createElement(DialogWithLongText, { visible: _getVisible('dialog1'), close: _toggleDialog('dialog1') }),
        React.createElement(DialogWithRadioBtns, { visible: _getVisible('dialog2'), close: _toggleDialog('dialog2') }),
        React.createElement(DialogWithLoadingIndicator, { visible: _getVisible('dialog3'), close: _toggleDialog('dialog3') }),
        React.createElement(UndismissableDialog, { visible: _getVisible('dialog4'), close: _toggleDialog('dialog4') }),
        React.createElement(DialogWithCustomColors, { visible: _getVisible('dialog5'), close: _toggleDialog('dialog5') })));
};
DialogExample.title = 'Dialog';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey200,
        padding: 12,
    },
    button: {
        margin: 4,
    },
});
export default DialogExample;
