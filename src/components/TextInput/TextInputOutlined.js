import * as React from 'react';
import { View, TextInput as NativeTextInput, StyleSheet, I18nManager, Platform, } from 'react-native';
import color from 'color';
import InputLabel from './Label/InputLabel';
import LabelBackground from './Label/LabelBackground';
import { MAXIMIZED_LABEL_FONT_SIZE, MINIMIZED_LABEL_FONT_SIZE, LABEL_WIGGLE_X_OFFSET, } from './constants';
import { calculateLabelTopPosition, calculateInputHeight, calculatePadding, adjustPaddingOut, interpolatePlaceholder, } from './helpers';
const OUTLINE_MINIMIZED_LABEL_Y_OFFSET = -6;
const LABEL_PADDING_TOP = 8;
const MIN_HEIGHT = 64;
const MIN_DENSE_HEIGHT = 48;
const INPUT_PADDING_HORIZONTAL = 14;
let TextInputOutlined = /** @class */ (() => {
    class TextInputOutlined extends React.Component {
        render() {
            const { disabled, editable, label, error, selectionColor, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            underlineColor, dense, style, theme, render, multiline, parentState, innerRef, onFocus, onBlur, onChangeText, onLayoutAnimatedText, ...rest } = this.props;
            const { colors, fonts } = theme;
            const font = fonts.regular;
            const hasActiveOutline = parentState.focused || error;
            const { fontSize: fontSizeStyle, fontWeight, height, backgroundColor = colors.background, ...viewStyle } = (StyleSheet.flatten(style) || {});
            const fontSize = fontSizeStyle || MAXIMIZED_LABEL_FONT_SIZE;
            let inputTextColor, activeColor, outlineColor, placeholderColor, errorColor;
            if (disabled) {
                inputTextColor = activeColor = color(colors.text)
                    .alpha(0.54)
                    .rgb()
                    .string();
                placeholderColor = outlineColor = colors.disabled;
            }
            else {
                inputTextColor = colors.text;
                activeColor = error ? colors.error : colors.primary;
                placeholderColor = outlineColor = colors.placeholder;
                errorColor = colors.error;
            }
            const labelScale = MINIMIZED_LABEL_FONT_SIZE / fontSize;
            const fontScale = MAXIMIZED_LABEL_FONT_SIZE / fontSize;
            const labelWidth = parentState.labelLayout.width;
            const labelHeight = parentState.labelLayout.height;
            const labelHalfWidth = labelWidth / 2;
            const labelHalfHeight = labelHeight / 2;
            const baseLabelTranslateX = (I18nManager.isRTL ? 1 : -1) *
                (labelHalfWidth -
                    (labelScale * labelWidth) / 2 -
                    (fontSize - MINIMIZED_LABEL_FONT_SIZE) * labelScale);
            const minInputHeight = (dense ? MIN_DENSE_HEIGHT : MIN_HEIGHT) - LABEL_PADDING_TOP;
            const inputHeight = calculateInputHeight(labelHeight, height, minInputHeight);
            const topPosition = calculateLabelTopPosition(labelHeight, inputHeight, LABEL_PADDING_TOP);
            if (height && typeof height !== 'number')
                // eslint-disable-next-line
                console.warn('Currently we support only numbers in height prop');
            const paddingSettings = {
                height: height ? +height : null,
                labelHalfHeight,
                offset: LABEL_PADDING_TOP,
                multiline: multiline ? multiline : null,
                dense: dense ? dense : null,
                topPosition,
                fontSize,
                label,
                scale: fontScale,
                isAndroid: Platform.OS === 'android',
                styles: StyleSheet.flatten(dense ? styles.inputOutlinedDense : styles.inputOutlined),
            };
            const pad = calculatePadding(paddingSettings);
            const paddingOut = adjustPaddingOut({ ...paddingSettings, pad });
            const baseLabelTranslateY = -labelHalfHeight - (topPosition + OUTLINE_MINIMIZED_LABEL_Y_OFFSET);
            const placeholderOpacity = interpolatePlaceholder(parentState.labeled, hasActiveOutline);
            const labelProps = {
                label,
                onLayoutAnimatedText,
                placeholderOpacity,
                error,
                placeholderStyle: styles.placeholder,
                baseLabelTranslateY,
                baseLabelTranslateX,
                font,
                fontSize,
                fontWeight,
                labelScale,
                wiggleOffsetX: LABEL_WIGGLE_X_OFFSET,
                topPosition,
                hasActiveOutline,
                activeColor,
                placeholderColor,
                backgroundColor,
                errorColor,
            };
            const minHeight = height || (dense ? MIN_DENSE_HEIGHT : MIN_HEIGHT);
            return (React.createElement(View, { style: viewStyle },
                React.createElement(View, null,
                    React.createElement(Outline, { theme: theme, hasActiveOutline: hasActiveOutline, activeColor: activeColor, outlineColor: outlineColor, backgroundColor: backgroundColor }),
                    React.createElement(View, { style: {
                            paddingTop: LABEL_PADDING_TOP,
                            paddingBottom: 0,
                            minHeight,
                        } },
                        React.createElement(InputLabel, { parentState: parentState, labelProps: labelProps, labelBackground: LabelBackground }),
                        render?.({
                            ...rest,
                            ref: innerRef,
                            onChangeText,
                            placeholder: label
                                ? parentState.placeholder
                                : this.props.placeholder,
                            placeholderTextColor: placeholderColor,
                            editable: !disabled && editable,
                            selectionColor: typeof selectionColor === 'undefined'
                                ? activeColor
                                : selectionColor,
                            onFocus,
                            onBlur,
                            underlineColorAndroid: 'transparent',
                            multiline,
                            style: [
                                styles.input,
                                !multiline || (multiline && height)
                                    ? { height: inputHeight }
                                    : {},
                                paddingOut,
                                {
                                    ...font,
                                    fontSize,
                                    fontWeight,
                                    color: inputTextColor,
                                    textAlignVertical: multiline ? 'top' : 'center',
                                },
                            ],
                        })))));
        }
    }
    TextInputOutlined.defaultProps = {
        disabled: false,
        error: false,
        multiline: false,
        editable: true,
        render: (props) => React.createElement(NativeTextInput, Object.assign({}, props)),
    };
    return TextInputOutlined;
})();
export default TextInputOutlined;
const Outline = ({ theme, hasActiveOutline, activeColor, outlineColor, backgroundColor, }) => (React.createElement(View, { pointerEvents: "none", style: [
        styles.outline,
        // eslint-disable-next-line react-native/no-inline-styles
        {
            backgroundColor,
            borderRadius: theme.roundness,
            borderWidth: hasActiveOutline ? 2 : 1,
            borderColor: hasActiveOutline ? activeColor : outlineColor,
        },
    ] }));
const styles = StyleSheet.create({
    placeholder: {
        position: 'absolute',
        left: 0,
        paddingHorizontal: INPUT_PADDING_HORIZONTAL,
    },
    outline: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 6,
        bottom: 0,
    },
    input: {
        flexGrow: 1,
        paddingHorizontal: INPUT_PADDING_HORIZONTAL,
        margin: 0,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        zIndex: 1,
    },
    inputOutlined: {
        paddingTop: 8,
        paddingBottom: 8,
    },
    inputOutlinedDense: {
        paddingTop: 4,
        paddingBottom: 4,
    },
});
