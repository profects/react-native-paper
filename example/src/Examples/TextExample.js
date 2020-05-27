import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Caption, Headline, Paragraph, Subheading, Title, useTheme, } from 'react-native-paper';
const TextExample = () => {
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(Caption, { style: styles.text }, "Caption"),
        React.createElement(Paragraph, { style: styles.text }, "Paragraph"),
        React.createElement(Subheading, { style: styles.text }, "Subheading"),
        React.createElement(Title, { style: styles.text }, "Title"),
        React.createElement(Headline, { style: styles.text }, "Headline")));
};
TextExample.title = 'Typography';
const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    },
    text: {
        marginVertical: 4,
    },
});
export default TextExample;
