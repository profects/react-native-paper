import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, ProgressBar, Paragraph, Colors, useTheme, } from 'react-native-paper';
const ProgressBarExample = () => {
    const [visible, setVisible] = React.useState(true);
    const [progress, setProgress] = React.useState(0.3);
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(Button, { onPress: () => setVisible(!visible) }, "Toggle visible"),
        React.createElement(Button, { onPress: () => setProgress(Math.random()) }, "Random progress"),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Default ProgressBar "),
            React.createElement(ProgressBar, { progress: progress, visible: visible })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "Indeterminate ProgressBar"),
            React.createElement(ProgressBar, { indeterminate: true, visible: visible })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "ProgressBar with custom color"),
            React.createElement(ProgressBar, { progress: progress, visible: visible, color: Colors.red800 })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "ProgressBar with custom background color"),
            React.createElement(ProgressBar, { progress: progress, visible: visible, color: Colors.red800, style: { backgroundColor: Colors.teal500 } })),
        React.createElement(View, { style: styles.row },
            React.createElement(Paragraph, null, "ProgressBar with custom height"),
            React.createElement(ProgressBar, { progress: progress, visible: visible, style: { height: 20 } }))));
};
ProgressBarExample.title = 'Progress Bar';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    row: {
        marginVertical: 10,
    },
});
export default ProgressBarExample;
