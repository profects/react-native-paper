import color from 'color';
import * as React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import ActivityIndicator from '../ActivityIndicator';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import FABGroup from './FABGroup';
import Surface from '../Surface';
import CrossFadeIcon from '../CrossFadeIcon';
import Text from '../Typography/Text';
import TouchableRipple from '../TouchableRipple';
import { black, white } from '../../styles/colors';
import { withTheme } from '../../core/theming';
/**
 * A floating action button represents the primary action in an application.
 *
 * <div class="screenshots">
 *   <img src="screenshots/fab-1.png" />
 *   <img src="screenshots/fab-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { FAB } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <FAB
 *     style={styles.fab}
 *     small
 *     icon="plus"
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   fab: {
 *     position: 'absolute',
 *     margin: 16,
 *     right: 0,
 *     bottom: 0,
 *   },
 * })
 *
 * export default MyComponent;
 * ```
 */
let FAB = /** @class */ (() => {
    class FAB extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                visibility: new Animated.Value(this.props.visible ? 1 : 0),
            };
        }
        componentDidUpdate(prevProps) {
            const { scale } = this.props.theme.animation;
            if (this.props.visible === prevProps.visible) {
                return;
            }
            if (this.props.visible) {
                Animated.timing(this.state.visibility, {
                    toValue: 1,
                    duration: 200 * scale,
                    useNativeDriver: true,
                }).start();
            }
            else {
                Animated.timing(this.state.visibility, {
                    toValue: 0,
                    duration: 150 * scale,
                    useNativeDriver: true,
                }).start();
            }
        }
        render() {
            const { small, icon, label, accessibilityLabel = label, color: customColor, disabled, onPress, theme, style, visible, loading, testID, ...rest } = this.props;
            const { visibility } = this.state;
            const disabledColor = color(theme.dark ? white : black)
                .alpha(0.12)
                .rgb()
                .string();
            const { backgroundColor = disabled ? disabledColor : theme.colors.accent } = StyleSheet.flatten(style) || {};
            let foregroundColor;
            if (typeof customColor !== 'undefined') {
                foregroundColor = customColor;
            }
            else if (disabled) {
                foregroundColor = color(theme.dark ? white : black)
                    .alpha(0.32)
                    .rgb()
                    .string();
            }
            else {
                foregroundColor = !color(backgroundColor).isLight()
                    ? white
                    : 'rgba(0, 0, 0, .54)';
            }
            const rippleColor = color(foregroundColor)
                .alpha(0.32)
                .rgb()
                .string();
            return (React.createElement(Surface, Object.assign({}, rest, { style: [
                    {
                        backgroundColor,
                        opacity: visibility,
                        transform: [
                            {
                                scale: visibility,
                            },
                        ],
                    },
                    styles.container,
                    disabled && styles.disabled,
                    style,
                ], pointerEvents: visible ? 'auto' : 'none' }),
                React.createElement(TouchableRipple, { borderless: true, onPress: onPress, rippleColor: rippleColor, disabled: disabled, accessibilityLabel: accessibilityLabel, accessibilityTraits: disabled ? ['button', 'disabled'] : 'button', accessibilityComponentType: "button", accessibilityRole: "button", accessibilityStates: disabled ? ['disabled'] : [], style: styles.touchable, testID: testID },
                    React.createElement(View, { style: [
                            styles.content,
                            label ? styles.extended : small ? styles.small : styles.standard,
                        ], pointerEvents: "none" },
                        icon && loading !== true ? (React.createElement(CrossFadeIcon, { source: icon, size: 24, color: foregroundColor })) : null,
                        loading ? (React.createElement(ActivityIndicator, { size: 18, color: foregroundColor })) : null,
                        label ? (React.createElement(Text, { style: [
                                styles.label,
                                { color: foregroundColor, ...theme.fonts.medium },
                            ] }, label.toUpperCase())) : null))));
        }
    }
    // @component ./FABGroup.tsx
    FAB.Group = FABGroup;
    FAB.defaultProps = {
        visible: true,
    };
    return FAB;
})();
const styles = StyleSheet.create({
    container: {
        borderRadius: 28,
        elevation: 6,
    },
    touchable: {
        borderRadius: 28,
    },
    standard: {
        height: 56,
        width: 56,
    },
    small: {
        height: 40,
        width: 40,
    },
    extended: {
        height: 48,
        paddingHorizontal: 16,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        marginHorizontal: 8,
    },
    disabled: {
        elevation: 0,
    },
});
export default withTheme(FAB);
