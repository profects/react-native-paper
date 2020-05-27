import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { DataTable, Card, useTheme } from 'react-native-paper';
const DataTableExample = () => {
    const [sortAscending, setSortAscending] = React.useState(true);
    const [page, setPage] = React.useState(0);
    const [items] = React.useState([
        {
            key: 1,
            name: 'Cupcake',
            calories: 356,
            fat: 16,
        },
        {
            key: 2,
            name: 'Eclair',
            calories: 262,
            fat: 16,
        },
        {
            key: 3,
            name: 'Frozen yogurt',
            calories: 159,
            fat: 6,
        },
        {
            key: 4,
            name: 'Gingerbread',
            calories: 305,
            fat: 3.7,
        },
        {
            key: 5,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9,
        },
        {
            key: 6,
            name: 'Jelly Bean',
            calories: 375,
            fat: 0,
        },
    ]);
    const { colors: { background }, } = useTheme();
    const sortedItems = items
        .slice()
        .sort((item1, item2) => (sortAscending
        ? item1.name < item2.name
        : item2.name < item1.name)
        ? 1
        : -1);
    const itemsPerPage = 2;
    const from = page * itemsPerPage;
    const to = (page + 1) * itemsPerPage;
    return (React.createElement(ScrollView, { style: [styles.container, { backgroundColor: background }], contentContainerStyle: styles.content },
        React.createElement(Card, null,
            React.createElement(DataTable, null,
                React.createElement(DataTable.Header, null,
                    React.createElement(DataTable.Title, { sortDirection: sortAscending ? 'ascending' : 'descending', onPress: () => setSortAscending(!sortAscending), style: styles.first }, "Dessert"),
                    React.createElement(DataTable.Title, { numeric: true }, "Calories"),
                    React.createElement(DataTable.Title, { numeric: true }, "Fat (g)")),
                sortedItems.slice(from, to).map(item => (React.createElement(DataTable.Row, { key: item.key },
                    React.createElement(DataTable.Cell, { style: styles.first }, item.name),
                    React.createElement(DataTable.Cell, { numeric: true }, item.calories),
                    React.createElement(DataTable.Cell, { numeric: true }, item.fat)))),
                React.createElement(DataTable.Pagination, { page: page, numberOfPages: Math.floor(sortedItems.length / itemsPerPage), onPageChange: page => setPage(page), label: `${from + 1}-${to} of ${sortedItems.length}` })))));
};
DataTableExample.title = 'Data Table';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 8,
    },
    first: {
        flex: 2,
    },
});
export default DataTableExample;
