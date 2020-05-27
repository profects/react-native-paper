import * as React from 'react';
import { FlatList } from 'react-native';
import { Divider, List, useTheme } from 'react-native-paper';
const items = ['Apple', 'Banana', 'Coconut', 'Lemon', 'Mango', 'Peach'];
const DividerExample = () => {
    const { colors: { background }, } = useTheme();
    return (React.createElement(FlatList, { style: { backgroundColor: background }, renderItem: ({ item }) => React.createElement(List.Item, { title: item }), keyExtractor: item => item, ItemSeparatorComponent: Divider, data: items }));
};
DividerExample.title = 'Divider';
export default DividerExample;
