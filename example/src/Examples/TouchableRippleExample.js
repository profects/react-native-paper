import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableRipple, Paragraph, useTheme } from 'react-native-paper';
const RippleExample = () => {
    const { colors: { background }, } = useTheme();
    return (React.createElement(View, { style: [styles.container, { backgroundColor: background }] },
        React.createElement(TouchableRipple, { style: styles.ripple, onPress: () => { }, rippleColor: "rgba(0, 0, 0, .32)" },
            React.createElement(View, { pointerEvents: "none" },
                React.createElement(Paragraph, null, "Press anywhere")))));
};
RippleExample.title = 'TouchableRipple';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ripple: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default RippleExample;
