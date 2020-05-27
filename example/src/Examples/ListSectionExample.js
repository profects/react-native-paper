import * as React from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
import { List, Text, Chip, Divider, useTheme } from 'react-native-paper';
const ListSectionExample = () => {
    const { colors: { background }, } = useTheme();
    return (React.createElement(ScrollView, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(List.Section, null,
            React.createElement(List.Subheader, null, "Single line"),
            React.createElement(List.Item, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "calendar" })), title: "List item 1" }),
            React.createElement(List.Item, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "wallet-giftcard" })), title: "List item 2" }),
            React.createElement(List.Item, { title: "List item 3", left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "folder" })), right: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "equal" })) })),
        React.createElement(Divider, null),
        React.createElement(List.Section, null,
            React.createElement(List.Subheader, null, "Two line"),
            React.createElement(List.Item, { left: () => (React.createElement(Image, { source: require('../../assets/images/email-icon.png'), style: styles.image })), title: "List item 1", description: "Describes item 1" }),
            React.createElement(List.Item, { left: () => (React.createElement(Image, { source: require('../../assets/images/email-icon.png'), style: styles.image })), right: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "information" })), title: "List item 2", description: "Describes item 2" })),
        React.createElement(Divider, null),
        React.createElement(List.Section, null,
            React.createElement(List.Subheader, null, "Three line"),
            React.createElement(List.Item, { left: () => (React.createElement(Image, { source: require('../../assets/images/email-icon.png'), style: styles.image })), title: "List item 1", description: "Describes item 1. Example of a very very long description." }),
            React.createElement(List.Item, { left: () => (React.createElement(Image, { source: require('../../assets/images/email-icon.png'), style: styles.image })), right: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "star-outline" })), title: "List item 2", description: "Describes item 2. Example of a very very long description." })),
        React.createElement(Divider, null),
        React.createElement(List.Section, null,
            React.createElement(List.Subheader, null, "Custom description"),
            React.createElement(List.Item, { left: () => (React.createElement(Image, { source: require('../../assets/images/email-icon.png'), style: styles.image })), right: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "star-outline" })), title: "List Item 1", description: ({ ellipsizeMode, color: descriptionColor, fontSize, }) => (React.createElement(View, { style: [styles.container, styles.column] },
                    React.createElement(Text, { numberOfLines: 2, ellipsizeMode: ellipsizeMode, style: { color: descriptionColor, fontSize } }, "React Native Paper is a high-quality, standard-compliant Material Design library that has you covered in all major use-cases."),
                    React.createElement(View, { style: [styles.container, styles.row, { paddingTop: 8 }] },
                        React.createElement(Chip, { icon: "file-pdf", onPress: () => { } }, "DOCS.pdf")))) }))));
};
ListSectionExample.title = 'List.Section';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 40,
        width: 40,
        margin: 8,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
});
export default ListSectionExample;
