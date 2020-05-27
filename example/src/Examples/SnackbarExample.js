import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Snackbar, Colors, Button, useTheme } from 'react-native-paper';
const SnackbarExample = () => {
    const [visible, setVisible] = React.useState(false);
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(Button, { mode: "outlined", onPress: () => setVisible(!visible) }, visible ? 'Hide' : 'Show'),
        React.createElement(Snackbar, { visible: visible, onDismiss: () => setVisible(false), action: {
                label: 'Undo',
                onPress: () => {
                    // Do something
                },
            }, duration: Snackbar.DURATION_MEDIUM }, "Hey there! I'm a Snackbar.")));
};
SnackbarExample.title = 'Snackbar';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey200,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default SnackbarExample;
