import * as React from 'react';
import { Animated, TextInput as NativeTextInput, Platform, } from 'react-native';
import TextInputOutlined from './TextInputOutlined';
import TextInputFlat from './TextInputFlat';
import { withTheme } from '../../core/theming';
const BLUR_ANIMATION_DURATION = 180;
const FOCUS_ANIMATION_DURATION = 150;
/**
 * A component to allow users to input text.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-flat.focused.png" />
 *     <figcaption>Flat (focused)</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-flat.disabled.png" />
 *     <figcaption>Flat (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-outlined.focused.png" />
 *     <figcaption>Outlined (focused)</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-outlined.disabled.png" />
 *     <figcaption>Outlined (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     text: ''
 *   };
 *
 *   render(){
 *     return (
 *       <TextInput
 *         label='Email'
 *         value={this.state.text}
 *         onChangeText={text => this.setState({ text })}
 *       />
 *     );
 *   }
 * }
 * ```
 *
 * @extends TextInput props https://facebook.github.io/react-native/docs/textinput.html#props
 */
let TextInput = /** @class */ (() => {
    class TextInput extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                labeled: new Animated.Value((this.props.value !== undefined
                    ? this.props.value
                    : this.props.defaultValue)
                    ? 0
                    : 1),
                error: new Animated.Value(this.props.error ? 1 : 0),
                focused: false,
                placeholder: '',
                value: this.props.value !== undefined
                    ? this.props.value
                    : this.props.defaultValue,
                labelLayout: {
                    measured: false,
                    width: 0,
                    height: 0,
                },
            };
            this.showPlaceholder = () => {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                // Set the placeholder in a delay to offset the label animation
                // If we show it immediately, they'll overlap and look ugly
                // @ts-ignore
                this.timer = setTimeout(() => this.setState({
                    placeholder: this.props.placeholder,
                }), 50);
            };
            this.hidePlaceholder = () => this.setState({
                placeholder: '',
            });
            this.showError = () => {
                const { scale } = this.props.theme.animation;
                Animated.timing(this.state.error, {
                    toValue: 1,
                    duration: FOCUS_ANIMATION_DURATION * scale,
                    // To prevent this - https://github.com/callstack/react-native-paper/issues/941
                    useNativeDriver: Platform.select({
                        ios: false,
                        default: true,
                    }),
                }).start(this.showPlaceholder);
            };
            this.hideError = () => {
                const { scale } = this.props.theme.animation;
                Animated.timing(this.state.error, {
                    toValue: 0,
                    duration: BLUR_ANIMATION_DURATION * scale,
                    // To prevent this - https://github.com/callstack/react-native-paper/issues/941
                    useNativeDriver: Platform.select({
                        ios: false,
                        default: true,
                    }),
                }).start();
            };
            this.restoreLabel = () => {
                const { scale } = this.props.theme.animation;
                Animated.timing(this.state.labeled, {
                    toValue: 1,
                    duration: FOCUS_ANIMATION_DURATION * scale,
                    // To prevent this - https://github.com/callstack/react-native-paper/issues/941
                    useNativeDriver: Platform.select({
                        ios: false,
                        default: true,
                    }),
                }).start();
            };
            this.minimizeLabel = () => {
                const { scale } = this.props.theme.animation;
                Animated.timing(this.state.labeled, {
                    toValue: 0,
                    duration: BLUR_ANIMATION_DURATION * scale,
                    // To prevent this - https://github.com/callstack/react-native-paper/issues/941
                    useNativeDriver: Platform.select({
                        ios: false,
                        default: true,
                    }),
                }).start();
            };
            this.handleFocus = (args) => {
                if (this.props.disabled || !this.props.editable) {
                    return;
                }
                this.setState({ focused: true });
                if (this.props.onFocus) {
                    this.props.onFocus(args);
                }
            };
            this.handleBlur = (args) => {
                if (this.props.disabled || !this.props.editable) {
                    return;
                }
                this.setState({ focused: false });
                if (this.props.onBlur) {
                    this.props.onBlur(args);
                }
            };
            this.handleChangeText = (value) => {
                if (!this.props.editable) {
                    return;
                }
                this.setState({ value });
                this.props.onChangeText && this.props.onChangeText(value);
            };
            this.handleLayoutAnimatedText = (e) => {
                this.setState({
                    labelLayout: {
                        width: e.nativeEvent.layout.width,
                        height: e.nativeEvent.layout.height,
                        measured: true,
                    },
                });
            };
        }
        static getDerivedStateFromProps(nextProps, prevState) {
            return {
                value: typeof nextProps.value !== 'undefined'
                    ? nextProps.value
                    : prevState.value,
            };
        }
        componentDidUpdate(prevProps, prevState) {
            if (prevState.focused !== this.state.focused ||
                prevState.value !== this.state.value ||
                // workaround for animated regression for react native > 0.61
                // https://github.com/callstack/react-native-paper/pull/1440
                prevState.labelLayout !== this.state.labelLayout) {
                // The label should be minimized if the text input is focused, or has text
                // In minimized mode, the label moves up and becomes small
                if (this.state.value || this.state.focused) {
                    this.minimizeLabel();
                }
                else {
                    this.restoreLabel();
                }
            }
            if (prevState.focused !== this.state.focused ||
                prevProps.label !== this.props.label) {
                // Show placeholder text only if the input is focused, or there's no label
                // We don't show placeholder if there's a label because the label acts as placeholder
                // When focused, the label moves up, so we can show a placeholder
                if (this.state.focused || !this.props.label) {
                    this.showPlaceholder();
                }
                else {
                    this.hidePlaceholder();
                }
            }
            if (prevProps.error !== this.props.error) {
                // When the input has an error, we wiggle the label and apply error styles
                if (this.props.error) {
                    this.showError();
                }
                else {
                    this.hideError();
                }
            }
        }
        componentWillUnmount() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        }
        /**
         * @internal
         */
        setNativeProps(args) {
            return this.root && this.root.setNativeProps(args);
        }
        /**
         * Returns `true` if the input is currently focused, `false` otherwise.
         */
        isFocused() {
            return this.root && this.root.isFocused();
        }
        /**
         * Removes all text from the TextInput.
         */
        clear() {
            return this.root && this.root.clear();
        }
        /**
         * Focuses the input.
         */
        focus() {
            return this.root && this.root.focus();
        }
        /**
         * Removes focus from the input.
         */
        blur() {
            return this.root && this.root.blur();
        }
        render() {
            const { mode, ...rest } = this.props;
            return mode === 'outlined' ? (React.createElement(TextInputOutlined, Object.assign({}, rest, { value: this.state.value, parentState: this.state, innerRef: ref => {
                    this.root = ref;
                }, onFocus: this.handleFocus, onBlur: this.handleBlur, onChangeText: this.handleChangeText, onLayoutAnimatedText: this.handleLayoutAnimatedText }))) : (React.createElement(TextInputFlat, Object.assign({}, rest, { value: this.state.value, parentState: this.state, innerRef: ref => {
                    this.root = ref;
                }, onFocus: this.handleFocus, onBlur: this.handleBlur, onChangeText: this.handleChangeText, onLayoutAnimatedText: this.handleLayoutAnimatedText })));
        }
    }
    TextInput.defaultProps = {
        mode: 'flat',
        dense: false,
        disabled: false,
        error: false,
        multiline: false,
        editable: true,
        render: (props) => React.createElement(NativeTextInput, Object.assign({}, props)),
    };
    return TextInput;
})();
export default withTheme(TextInput);
