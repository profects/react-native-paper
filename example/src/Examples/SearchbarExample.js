import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, Caption, Searchbar, useTheme } from 'react-native-paper';
const SearchExample = ({ navigation }) => {
    const [firstQuery, setFirstQuery] = React.useState('');
    const [secondQuery, setSecondQuery] = React.useState('');
    const [thirdQuery, setThirdQuery] = React.useState('');
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(Searchbar, { placeholder: "Search", onChangeText: (query) => setFirstQuery(query), value: firstQuery, style: styles.searchbar }),
        React.createElement(Caption, { style: styles.caption }, "Clickable icon"),
        React.createElement(Searchbar, { placeholder: "Search", onChangeText: (query) => setSecondQuery(query), value: secondQuery, onIconPress: () => navigation.goBack(), icon: { source: 'arrow-left', direction: 'auto' }, style: styles.searchbar }),
        React.createElement(Searchbar, { placeholder: "Search", onChangeText: (query) => setThirdQuery(query), value: thirdQuery, onIconPress: /* In real code, this will open the drawer */ () => { }, icon: "menu", style: styles.searchbar })));
};
SearchExample.title = 'Searchbar';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey200,
    },
    caption: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    searchbar: {
        margin: 4,
    },
});
export default SearchExample;
