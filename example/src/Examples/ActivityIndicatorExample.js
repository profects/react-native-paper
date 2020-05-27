import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Colors, FAB, useTheme } from 'react-native-paper';
const ActivityIndicatorExample = () => {
    const [animating, setAnimating] = React.useState(true);
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(View, { style: styles.row },
            React.createElement(FAB, { small: true, icon: animating ? 'pause' : 'play', onPress: () => setAnimating(!animating) })),
        React.createElement(View, { style: styles.row },
            React.createElement(ActivityIndicator, { animating: animating })),
        React.createElement(View, { style: styles.row },
            React.createElement(ActivityIndicator, { animating: animating, hidesWhenStopped: false })),
        React.createElement(View, { style: styles.row },
            React.createElement(ActivityIndicator, { animating: animating, size: "large" })),
        React.createElement(View, { style: styles.row },
            React.createElement(ActivityIndicator, { animating: animating, color: Colors.red500 }))));
};
ActivityIndicatorExample.title = 'Activity Indicator';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
    },
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
});
export default ActivityIndicatorExample;
