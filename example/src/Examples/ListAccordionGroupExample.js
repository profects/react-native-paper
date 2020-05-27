import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';
const ListAccordionGroupExample = () => {
    const [expandedId, setExpandedId] = React.useState(undefined);
    const _onAccordionPress = (newExpandedId) => expandedId === newExpandedId
        ? setExpandedId(undefined)
        : setExpandedId(newExpandedId);
    const { colors: { background }, } = useTheme();
    return (React.createElement(ScrollView, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(List.AccordionGroup, null,
            React.createElement(List.Section, { title: "Uncontrolled Accordion Group example" },
                React.createElement(List.Accordion, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "folder" })), title: "Expandable list item", id: "1" },
                    React.createElement(List.Item, { title: "List item 1" }),
                    React.createElement(List.Item, { title: "List item 2" })),
                React.createElement(List.Accordion, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "folder" })), title: "Expandable list item 2", id: "2" },
                    React.createElement(List.Item, { title: "List item 1" })),
                React.createElement(List.Accordion, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "folder" })), title: "Expandable list item 2", id: "3" },
                    React.createElement(List.Item, { title: "Another item" })))),
        React.createElement(List.AccordionGroup, { expandedId: expandedId, onAccordionPress: _onAccordionPress },
            React.createElement(List.Section, { title: "Controlled Accordion Group example" },
                React.createElement(List.Accordion, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "folder" })), title: "Expandable list item", id: "1" },
                    React.createElement(List.Item, { title: "List item 1" }),
                    React.createElement(List.Item, { title: "List item 2" })),
                React.createElement(List.Accordion, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "folder" })), title: "Expandable list item 2", id: "2" },
                    React.createElement(List.Item, { title: "List item 1" })),
                React.createElement(List.Accordion, { left: props => React.createElement(List.Icon, Object.assign({}, props, { icon: "folder" })), title: "Expandable list item 2", id: "3" },
                    React.createElement(List.Item, { title: "Another item" }))))));
};
ListAccordionGroupExample.title = 'List.AccordionGroup';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default ListAccordionGroupExample;
