import * as React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import { Paragraph, Colors, Portal, Dialog } from 'react-native-paper';
const isIOS = Platform.OS === 'ios';
const DialogWithLoadingIndicator = ({ visible, close, }) => (React.createElement(Portal, null,
    React.createElement(Dialog, { onDismiss: close, visible: visible },
        React.createElement(Dialog.Title, null, "Progress Dialog"),
        React.createElement(Dialog.Content, null,
            React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center' } },
                React.createElement(ActivityIndicator, { color: Colors.indigo500, size: isIOS ? 'large' : 48, style: { marginRight: 16 } }),
                React.createElement(Paragraph, null, "Loading....."))))));
export default DialogWithLoadingIndicator;
