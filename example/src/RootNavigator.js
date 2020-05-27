import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import ExampleList, { examples } from './ExampleList';
const Stack = createStackNavigator();
export default function Root() {
    return (React.createElement(Stack.Navigator, { headerMode: "screen", screenOptions: {
            header: ({ navigation, scene, previous }) => (React.createElement(Appbar.Header, null,
                previous ? (React.createElement(Appbar.BackAction, { onPress: () => navigation.goBack() })) : navigation.openDrawer ? (React.createElement(Appbar.Action, { icon: "menu", onPress: () => navigation.openDrawer() })) : null,
                React.createElement(Appbar.Content, { title: scene.descriptor.options.title }))),
        } },
        React.createElement(Stack.Screen, { name: "Home", component: ExampleList, options: { title: 'Examples' } }),
        Object.keys(examples).map(id => (React.createElement(Stack.Screen, { key: id, name: id, component: examples[id], options: { title: examples[id].title } })))));
}
