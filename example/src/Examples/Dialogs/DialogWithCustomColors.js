import * as React from 'react';
import { Paragraph, Button, Portal, Dialog, Colors } from 'react-native-paper';
const DialogWithCustomColors = ({ visible, close, }) => (React.createElement(Portal, null,
    React.createElement(Dialog, { onDismiss: close, style: { backgroundColor: Colors.purple900 }, visible: visible },
        React.createElement(Dialog.Title, { style: { color: Colors.white } }, "Alert"),
        React.createElement(Dialog.Content, null,
            React.createElement(Paragraph, { style: { color: Colors.white } }, "This is a dialog with custom colors")),
        React.createElement(Dialog.Actions, null,
            React.createElement(Button, { color: Colors.white, onPress: close }, "OK")))));
export default DialogWithCustomColors;
