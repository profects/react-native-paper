import * as React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { ToggleButton, List, useTheme } from 'react-native-paper';
const ToggleButtonExample = () => {
    const [first, setFirst] = React.useState('bold');
    const [fruit, setFruit] = React.useState('watermelon');
    const [status, setStatus] = React.useState('checked');
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(List.Section, { title: "Single" },
            React.createElement(View, { style: styles.padding },
                React.createElement(ToggleButton, { icon: "android", value: "android", status: status, onPress: status => setStatus(status === 'checked' ? 'unchecked' : 'checked') }))),
        React.createElement(List.Section, { title: "Group" },
            React.createElement(ToggleButton.Row, { value: first, onValueChange: (value) => setFirst(value), style: styles.padding },
                React.createElement(ToggleButton, { disabled: true, icon: "format-italic", value: "italic" }),
                React.createElement(ToggleButton, { icon: "format-bold", value: "bold" }),
                React.createElement(ToggleButton, { icon: "format-underline", value: "underlined" }),
                React.createElement(ToggleButton, { icon: "format-color-text", value: "format-color" }))),
        React.createElement(List.Section, { title: "Custom" },
            React.createElement(View, { style: [styles.padding, styles.row] },
                React.createElement(ToggleButton.Group, { value: fruit, onValueChange: (value) => setFruit(value) },
                    React.createElement(ImageBackground, { style: {
                            width: 143,
                            height: 153,
                            margin: 2,
                        }, source: {
                            uri: 'https://images.pexels.com/photos/1068534/pexels-photo-1068534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                        } },
                        React.createElement(ToggleButton, { value: "watermelon", size: 24, style: {
                                position: 'absolute',
                                right: 0,
                            }, color: "white", icon: fruit === 'watermelon' ? 'heart' : 'heart-outline' })),
                    React.createElement(ImageBackground, { style: {
                            width: 143,
                            height: 153,
                            margin: 2,
                        }, source: {
                            uri: 'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                        } },
                        React.createElement(ToggleButton, { value: "strawberries", size: 24, style: {
                                position: 'absolute',
                                right: 0,
                            }, color: "white", icon: fruit === 'strawberries' ? 'heart' : 'heart-outline' })))))));
};
ToggleButtonExample.title = 'Toggle Button';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    padding: {
        paddingHorizontal: 16,
    },
    row: {
        flexDirection: 'row',
    },
});
export default ToggleButtonExample;
