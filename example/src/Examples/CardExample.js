import * as React from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Paragraph, Card, Button, IconButton, useTheme, } from 'react-native-paper';
const CardExample = () => {
    const { colors: { background }, } = useTheme();
    return (React.createElement(ScrollView, { style: [styles.container, { backgroundColor: background }], contentContainerStyle: styles.content },
        React.createElement(Card, { style: styles.card },
            React.createElement(Card.Cover, { source: require('../../assets/images/wrecked-ship.jpg') }),
            React.createElement(Card.Title, { title: "Abandoned Ship" }),
            React.createElement(Card.Content, null,
                React.createElement(Paragraph, null, "The Abandoned Ship is a wrecked ship located on Route 108 in Hoenn, originally being a ship named the S.S. Cactus. The second part of the ship can only be accessed by using Dive and contains the Scanner."))),
        React.createElement(Card, { style: styles.card },
            React.createElement(Card.Cover, { source: require('../../assets/images/forest.jpg') }),
            React.createElement(Card.Actions, null,
                React.createElement(Button, { onPress: () => { } }, "Share"),
                React.createElement(Button, { onPress: () => { } }, "Explore"))),
        React.createElement(Card, { style: styles.card },
            React.createElement(Card.Title, { title: "Berries that are trimmed at the end", subtitle: "Omega Ruby", left: (props) => React.createElement(Avatar.Icon, Object.assign({}, props, { icon: "folder" })), right: (props) => (React.createElement(IconButton, Object.assign({}, props, { icon: "dots-vertical", onPress: () => { } }))) }),
            React.createElement(Card.Content, null,
                React.createElement(Paragraph, null, "Dotted around the Hoenn region, you will find loamy soil, many of which are housing berries. Once you have picked the berries, then you have the ability to use that loamy soil to grow your own berries. These can be any berry and will require attention to get the best crop."))),
        React.createElement(Card, { style: styles.card },
            React.createElement(Card.Cover, { source: require('../../assets/images/strawberries.jpg') }),
            React.createElement(Card.Title, { title: "Just Strawberries", subtitle: "... and only Strawberries", right: (props) => (React.createElement(IconButton, Object.assign({}, props, { icon: "chevron-down", onPress: () => { } }))) })),
        React.createElement(Card, { style: styles.card, onPress: () => {
                Alert.alert('The Chameleon is Pressed');
            } },
            React.createElement(Card.Cover, { source: require('../../assets/images/chameleon.jpg') }),
            React.createElement(Card.Title, { title: "Pressable Chameleon" }),
            React.createElement(Card.Content, null,
                React.createElement(Paragraph, null, "This is a pressable chameleon. If you press me, I will alert."))),
        React.createElement(Card, { style: styles.card, onLongPress: () => {
                Alert.alert('The City is Long Pressed');
            } },
            React.createElement(Card.Cover, { source: require('../../assets/images/city.jpg') }),
            React.createElement(Card.Title, { title: "Long Pressable City", left: props => React.createElement(Avatar.Icon, Object.assign({}, props, { icon: "city" })) }),
            React.createElement(Card.Content, null,
                React.createElement(Paragraph, null, "This is a long press only city. If you long press me, I will alert.")))));
};
CardExample.title = 'Card';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 4,
    },
    card: {
        margin: 4,
    },
});
export default CardExample;
