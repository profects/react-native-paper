import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Subheading, Button, Portal, Dialog, RadioButton, TouchableRipple, } from 'react-native-paper';
const DialogWithRadioBtns = ({ visible, close }) => {
    const [checked, setChecked] = React.useState('normal');
    return (React.createElement(Portal, null,
        React.createElement(Dialog, { onDismiss: close, visible: visible },
            React.createElement(Dialog.Title, null, "Choose an option"),
            React.createElement(Dialog.ScrollArea, { style: { maxHeight: 170, paddingHorizontal: 0 } },
                React.createElement(ScrollView, null,
                    React.createElement(View, null,
                        React.createElement(TouchableRipple, { onPress: () => setChecked('normal') },
                            React.createElement(View, { style: styles.row },
                                React.createElement(View, { pointerEvents: "none" },
                                    React.createElement(RadioButton, { value: "normal", status: checked === 'normal' ? 'checked' : 'unchecked' })),
                                React.createElement(Subheading, { style: styles.text }, "Option 1"))),
                        React.createElement(TouchableRipple, { onPress: () => setChecked('second') },
                            React.createElement(View, { style: styles.row },
                                React.createElement(View, { pointerEvents: "none" },
                                    React.createElement(RadioButton, { value: "second", status: checked === 'second' ? 'checked' : 'unchecked' })),
                                React.createElement(Subheading, { style: styles.text }, "Option 2"))),
                        React.createElement(TouchableRipple, { onPress: () => setChecked('third') },
                            React.createElement(View, { style: styles.row },
                                React.createElement(View, { pointerEvents: "none" },
                                    React.createElement(RadioButton, { value: "third", status: checked === 'third' ? 'checked' : 'unchecked' })),
                                React.createElement(Subheading, { style: styles.text }, "Option 3"))),
                        React.createElement(TouchableRipple, { onPress: () => setChecked('fourth') },
                            React.createElement(View, { style: styles.row },
                                React.createElement(View, { pointerEvents: "none" },
                                    React.createElement(RadioButton, { value: "fourth", status: checked === 'fourth' ? 'checked' : 'unchecked' })),
                                React.createElement(Subheading, { style: styles.text }, "Option 4")))))),
            React.createElement(Dialog.Actions, null,
                React.createElement(Button, { onPress: close }, "Cancel"),
                React.createElement(Button, { onPress: close }, "Ok")))));
};
export default DialogWithRadioBtns;
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text: {
        paddingLeft: 8,
    },
});
