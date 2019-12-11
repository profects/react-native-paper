import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import color from 'color';
import { RadioButtonContext, RadioButtonContextType } from './RadioButtonGroup';
import { handlePress, isChecked } from './utils';
import Icon from '../Icon';
import TouchableRipple from '../TouchableRipple';
import { withTheme } from '../../core/theming';
import { Theme, $RemoveChildren } from '../../types';

type Props = $RemoveChildren<typeof TouchableRipple> & {
  /**
   * Value of the radio button
   */
  value: string;
  /**
   * Status of radio button.
   */
  status?: 'checked' | 'unchecked';
  /**
   * Whether radio is disabled.
   */
  disabled?: boolean;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Custom color for radio.
   */
  color?: string;
  /**
   * @optional
   */
  theme: Theme;
};

/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for iOS.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
class RadioButtonIOS extends React.Component<Props> {
  static displayName = 'RadioButton.IOS';

  render() {
    const { disabled, onPress, theme, status, value, ...rest } = this.props;

    const checkedColor = disabled
      ? theme.colors.disabled
      : this.props.color || theme.colors.accent;

    let rippleColor: string;

    if (disabled) {
      rippleColor = color(theme.colors.text)
        .alpha(0.16)
        .rgb()
        .string();
    } else {
      rippleColor = color(checkedColor)
        .fade(0.32)
        .rgb()
        .string();
    }

    return (
      <RadioButtonContext.Consumer>
        {(context?: RadioButtonContextType) => {
          const checked =
            isChecked({
              contextValue: context && context.value,
              status,
              value,
            }) === 'checked';

          return (
            <TouchableRipple
              {...rest}
              borderless
              rippleColor={rippleColor}
              onPress={
                disabled
                  ? undefined
                  : () => {
                      handlePress({
                        onPress,
                        value,
                        onValueChange: context && context.onValueChange,
                      });
                    }
              }
              accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
              accessibilityComponentType={
                checked ? 'radiobutton_checked' : 'radiobutton_unchecked'
              }
              accessibilityRole="button"
              accessibilityStates={disabled ? ['disabled'] : []}
              accessibilityLiveRegion="polite"
              style={styles.container}
            >
              <View style={{ opacity: checked ? 1 : 0 }}>
                <Icon
                  allowFontScaling={false}
                  source="check"
                  size={24}
                  color={checkedColor}
                />
              </View>
            </TouchableRipple>
          );
        }}
      </RadioButtonContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    padding: 6,
  },
});

export default withTheme(RadioButtonIOS);

// @component-docs ignore-next-line
export { RadioButtonIOS };
