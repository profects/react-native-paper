import * as React from 'react';
import { Paragraph, Button, Portal, Dialog, Colors } from 'react-native-paper';
const DialogWithLongText = ({ visible, close, }) => (React.createElement(Portal, null,
    React.createElement(Dialog, { onDismiss: close, visible: visible, dismissable: false },
        React.createElement(Dialog.Title, null, "Alert"),
        React.createElement(Dialog.Content, null,
            React.createElement(Paragraph, null, "This is an undismissable dialog!!")),
        React.createElement(Dialog.Actions, null,
            React.createElement(Button, { color: Colors.teal500, disabled: true }, "Disagree"),
            React.createElement(Button, { onPress: close }, "Agree")))));
export default DialogWithLongText;
