import * as React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import TouchableRipple from './TouchableRipple';
import RadioButton from './RadioButton';
import { RadioButtonContext, RadioButtonContextType } from './RadioButtonGroup';

type Props = {
  /**
   * Value of the radio button.
   */
  value: string;
  /**
   * Label to be displayed on the item.
   */
  label: string;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Status of radio button.
   */
  status?: 'checked' | 'unchecked';
  /**
   * Additional styles for container View
   */
  style?: StyleProp<ViewStyle>;
};

/**
 * RadioButton.Item allows you to press the whole row (item) instead of only the RadioButton.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { RadioButton, Text } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     value: 'first',
 *   };
 *
 *   render() {
 *     return(
 *       <RadioButton.Group
 *         onValueChange={value => this.setState({ value })}
 *         value={this.state.value}
 *       >
 *           <RadioButton.Item label="First item" value="first" />
 *           <RadioButton.Item label="Second item" value="second" />
 *       </RadioButton.Group>
 *     )
 *   }
 * }
 *```
 */
class RadioButtonItem extends React.Component<Props> {
  static displayName = 'RadioButton.Item';

  isChecked = (context: RadioButtonContextType) =>
    context.value === this.props.value ? 'checked' : 'unchecked';

  handlePress = (context: RadioButtonContextType) => () => {
    const { onPress } = this.props;
    const onValueChange = context ? context.onValueChange : () => {};

    onPress ? onPress() : onValueChange(this.props.value);
  };

  render() {
    const { value, label, style } = this.props;

    return (
      <RadioButtonContext.Consumer>
        {context => (
          <TouchableRipple onPress={this.handlePress(context)}>
            <View style={[styles.container, style]} pointerEvents="none">
              <Text>{label}</Text>
              <RadioButton
                value={value}
                status={
                  this.props.status || (context && this.isChecked(context))
                }
              ></RadioButton>
            </View>
          </TouchableRipple>
        )}
      </RadioButtonContext.Consumer>
    );
  }
}

export default RadioButtonItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
