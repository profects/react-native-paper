import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, Divider, useTheme } from 'react-native-paper';
const ListAccordionExample = () => {
    const [expanded, setExpanded] = React.useState(true);
    const _handlePress = () => {
        setExpanded(!expanded);
    };
    const { colors: { background }, } = useTheme();
    return (React.createElement(ScrollView, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(List.Section, { title: "Expandable list item" },
            React.createElement(List.Accordion, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "folder" })), title: "Expandable list item" },
                React.createElement(List.Item, { title: "List item 1" }),
                React.createElement(List.Item, { title: "List item 2" })),
            React.createElement(List.Accordion, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "folder" })), title: "Start expanded", expanded: expanded, onPress: _handlePress },
                React.createElement(List.Item, { title: "List item 1" }))),
        React.createElement(Divider, null),
        React.createElement(List.Section, { title: "Expandable & multiline list item" },
            React.createElement(List.Accordion, { title: "Expandable list item", description: "Describes the expandable list item" },
                React.createElement(List.Item, { title: "List item 1" }),
                React.createElement(List.Item, { title: "List item 2" }))),
        React.createElement(Divider, null),
        React.createElement(List.Section, { title: "Expandable list with icons" },
            React.createElement(List.Accordion, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "star" })), title: "Accordion item 1" },
                React.createElement(List.Item, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "thumb-up" })), title: "List item 1" }),
                React.createElement(List.Item, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "thumb-down" })), title: "List item 2" })))));
};
ListAccordionExample.title = 'List.Accordion';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default ListAccordionExample;
