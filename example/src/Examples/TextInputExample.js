import * as React from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform, } from 'react-native';
import { TextInput, HelperText, useTheme } from 'react-native-paper';
import { inputReducer } from '../../utils';
const MAX_LENGTH = 20;
const initialState = {
    text: '',
    maxLengthName: '',
};
const TextInputAvoidingView = ({ children }) => {
    return Platform.OS === 'ios' ? (React.createElement(KeyboardAvoidingView, { style: styles.wrapper, behavior: "padding", keyboardVerticalOffset: 80 }, children)) : (React.createElement(React.Fragment, null, children));
};
const TextInputExample = () => {
    const [state, dispatch] = React.useReducer(inputReducer, initialState);
    const { text, name, outlinedText, largeText, outlinedLargeText, nameNoPadding, flatDenseText, flatDense, outlinedDenseText, outlinedDense, flatMultiline, flatTextArea, outlinedMultiline, outlinedTextArea, maxLengthName, } = state;
    const _isUsernameValid = (name) => /^[a-zA-Z]*$/.test(name);
    const { colors: { background }, } = useTheme();
    const inputActionHandler = (type, payload) => dispatch({
        type: type,
        payload: payload,
    });
    return (React.createElement(TextInputAvoidingView, null,
        React.createElement(ScrollView, { style: [styles.container, { backgroundColor: background }], keyboardShouldPersistTaps: 'always', removeClippedSubviews: false },
            React.createElement(TextInput, { style: styles.inputContainerStyle, label: "Flat input", placeholder: "Type something", value: text, onChangeText: text => inputActionHandler('text', text) }),
            React.createElement(TextInput, { style: [styles.inputContainerStyle, styles.fontSize], label: "Flat input large font", placeholder: "Type something", value: largeText, onChangeText: largeText => inputActionHandler('largeText', largeText) }),
            React.createElement(TextInput, { style: styles.inputContainerStyle, dense: true, label: "Dense flat input", placeholder: "Type something", value: flatDenseText, onChangeText: flatDenseText => inputActionHandler('flatDenseText', flatDenseText) }),
            React.createElement(TextInput, { style: styles.inputContainerStyle, dense: true, placeholder: "Dense flat input without label", value: flatDense, onChangeText: flatDense => inputActionHandler('flatDense', flatDense) }),
            React.createElement(TextInput, { style: styles.inputContainerStyle, label: "Flat input multiline", multiline: true, placeholder: "Type something", value: flatMultiline, onChangeText: flatMultiline => inputActionHandler('flatMultiline', flatMultiline) }),
            React.createElement(TextInput, { style: [styles.inputContainerStyle, styles.textArea], label: "Flat input text area", multiline: true, placeholder: "Type something", value: flatTextArea, onChangeText: flatTextArea => inputActionHandler('flatTextArea', flatTextArea) }),
            React.createElement(TextInput, { disabled: true, style: styles.inputContainerStyle, label: "Disabled flat input" }),
            React.createElement(TextInput, { mode: "outlined", style: styles.inputContainerStyle, label: "Outlined input", placeholder: "Type something", value: outlinedText, onChangeText: outlinedText => inputActionHandler('outlinedText', outlinedText) }),
            React.createElement(TextInput, { mode: "outlined", style: [styles.inputContainerStyle, styles.fontSize], label: "Outlined large font", placeholder: "Type something", value: outlinedLargeText, onChangeText: outlinedLargeText => inputActionHandler('outlinedLargeText', outlinedLargeText) }),
            React.createElement(TextInput, { mode: "outlined", style: styles.inputContainerStyle, dense: true, label: "Dense outlined input", placeholder: "Type something", value: outlinedDenseText, onChangeText: outlinedDenseText => inputActionHandler('outlinedDenseText', outlinedDenseText) }),
            React.createElement(TextInput, { mode: "outlined", style: styles.inputContainerStyle, dense: true, placeholder: "Dense outlined input without label", value: outlinedDense, onChangeText: outlinedDense => inputActionHandler('outlinedDense', outlinedDense) }),
            React.createElement(TextInput, { mode: "outlined", style: styles.inputContainerStyle, label: "Outlined input multiline", multiline: true, placeholder: "Type something", value: outlinedMultiline, onChangeText: outlinedMultiline => inputActionHandler('outlinedMultiline', outlinedMultiline) }),
            React.createElement(TextInput, { mode: "outlined", style: [styles.inputContainerStyle, styles.textArea], label: "Outlined input text area", multiline: true, placeholder: "Type something", value: outlinedTextArea, onChangeText: outlinedTextArea => inputActionHandler('outlinedTextArea', outlinedTextArea) }),
            React.createElement(TextInput, { mode: "outlined", disabled: true, style: styles.inputContainerStyle, label: "Disabled outlined input" }),
            React.createElement(View, { style: styles.inputContainerStyle },
                React.createElement(TextInput, { label: "Input with helper text", placeholder: "Enter username, only letters", value: name, error: !_isUsernameValid(name), onChangeText: name => inputActionHandler('name', name) }),
                React.createElement(HelperText, { type: "error", visible: !_isUsernameValid(name) }, "Error: Only letters are allowed")),
            React.createElement(View, { style: styles.inputContainerStyle },
                React.createElement(TextInput, { label: "Input with helper text and character counter", placeholder: "Enter username, only letters", value: maxLengthName, error: !_isUsernameValid(maxLengthName), onChangeText: maxLengthName => inputActionHandler('maxLengthName', maxLengthName), maxLength: MAX_LENGTH }),
                React.createElement(View, { style: styles.helpersWrapper },
                    React.createElement(HelperText, { type: "error", visible: !_isUsernameValid(maxLengthName), style: styles.helper }, "Error: Numbers and special characters are not allowed"),
                    React.createElement(HelperText, { type: "info", visible: true, style: styles.counterHelper },
                        maxLengthName.length,
                        " / ",
                        MAX_LENGTH))),
            React.createElement(View, { style: styles.inputContainerStyle },
                React.createElement(TextInput, { label: "Input with no padding", style: { backgroundColor: 'transparent', paddingHorizontal: 0 }, placeholder: "Enter username, only letters", value: nameNoPadding, error: !_isUsernameValid(nameNoPadding), onChangeText: nameNoPadding => inputActionHandler('nameNoPadding', nameNoPadding) }),
                React.createElement(HelperText, { type: "error", padding: "none", visible: !_isUsernameValid(nameNoPadding) }, "Error: Only letters are allowed")))));
};
TextInputExample.title = 'TextInput';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    helpersWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wrapper: {
        flex: 1,
    },
    helper: {
        flexShrink: 1,
    },
    counterHelper: {
        textAlign: 'right',
    },
    inputContainerStyle: {
        margin: 8,
    },
    fontSize: {
        fontSize: 24,
    },
    textArea: {
        height: 80,
    },
});
export default TextInputExample;
