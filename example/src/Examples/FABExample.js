import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, FAB, Portal, useTheme } from 'react-native-paper';
const ButtonExample = () => {
    const [visible, setVisible] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(View, { style: styles.row },
            React.createElement(FAB, { small: true, icon: visible ? 'eye-off' : 'eye', style: styles.fab, onPress: () => setVisible(!visible) })),
        React.createElement(View, { style: styles.row },
            React.createElement(FAB, { icon: "heart", style: styles.fab, onPress: () => { }, visible: visible }),
            React.createElement(FAB, { icon: "check", label: "Extended FAB", style: styles.fab, onPress: () => { }, visible: visible }),
            React.createElement(FAB, { icon: "cancel", label: "Disabled FAB", style: styles.fab, onPress: () => { }, visible: visible, disabled: true }),
            React.createElement(FAB, { icon: "cancel", label: "Loading FAB", style: styles.fab, onPress: () => { }, visible: visible, loading: true }),
            React.createElement(Portal, null,
                React.createElement(FAB.Group, { open: open, icon: open ? 'calendar-today' : 'plus', actions: [
                        { icon: 'plus', onPress: () => { } },
                        { icon: 'star', label: 'Star', onPress: () => { } },
                        { icon: 'email', label: 'Email', onPress: () => { } },
                        { icon: 'bell', label: 'Remind', onPress: () => { } },
                    ], onStateChange: ({ open }) => setOpen(open), onPress: () => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }, visible: visible })))));
};
ButtonExample.title = 'Floating Action Button';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey200,
        padding: 4,
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    fab: {
        margin: 8,
    },
});
export default ButtonExample;
