import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Badge, IconButton, List, Paragraph, Switch, Colors, useTheme, } from 'react-native-paper';
const BadgeExample = () => {
    const [visible, setVisible] = React.useState(true);
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(View, { style: [styles.row, styles.item] },
            React.createElement(Paragraph, { style: styles.label }, "Show badges"),
            React.createElement(Switch, { value: visible, onValueChange: visible => setVisible(visible) })),
        React.createElement(List.Section, { title: "Text" },
            React.createElement(View, { style: styles.row },
                React.createElement(View, { style: styles.item },
                    React.createElement(IconButton, { icon: "palette-swatch", size: 36, style: styles.button }),
                    React.createElement(Badge, { visible: visible, style: styles.badge }, "12")),
                React.createElement(View, { style: styles.item },
                    React.createElement(IconButton, { icon: "inbox", size: 36, style: styles.button }),
                    React.createElement(Badge, { visible: visible, style: [styles.badge, { backgroundColor: Colors.blue500 }] }, "999+")))),
        React.createElement(List.Section, { title: "Dot" },
            React.createElement(View, { style: styles.row },
                React.createElement(View, { style: styles.item },
                    React.createElement(IconButton, { icon: "book-open", size: 36, style: styles.button }),
                    React.createElement(Badge, { visible: visible, style: styles.badge, size: 8 })),
                React.createElement(View, { style: styles.item },
                    React.createElement(IconButton, { icon: "receipt", size: 36, style: styles.button }),
                    React.createElement(Badge, { visible: visible, style: styles.badge, size: 8 }))))));
};
BadgeExample.title = 'Badge';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        margin: 16,
    },
    button: {
        opacity: 0.6,
    },
    badge: {
        position: 'absolute',
        top: 4,
        right: 0,
    },
    label: {
        flex: 1,
    },
});
export default BadgeExample;
