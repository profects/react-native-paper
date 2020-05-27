import * as React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import ToggleButton from './ToggleButton';

type Props = {
  /**
   * Function to execute on selection change.
   */
  onValueChange: (value: string) => void;
  /**
   * Value of the currently selected toggle button.
   */
  value: string;
  /**
   * React elements containing toggle buttons.
   */
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

/**
 * Toggle button row renders a group of toggle buttons in a row.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/toggle-button-row.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { ToggleButton } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     value: 'left',
 *   };
 *
 *   render() {
 *     return(
 *       <ToggleButton.Row
 *         onValueChange={value => this.setState({ value })}
 *         value={this.state.value}
 *       >
 *           <ToggleButton icon="format-align-left" value="left" />
 *           <ToggleButton icon="format-align-right" value="right" />
 *       </ToggleButton.Row>
 *     )
 *   }
 * }
 *```
 */
class ToggleButtonRow extends React.Component<Props> {
  static displayName = 'ToggleButton.Row';

  render() {
    const { value, onValueChange, children, style } = this.props;
    const count = React.Children.count(children);

    return (
      <ToggleButton.Group value={value} onValueChange={onValueChange}>
        <View style={[styles.row, style]}>
          {React.Children.map(children, (child, i) => {
            // @ts-ignore
            if (child && child.type === ToggleButton) {
              // @ts-ignore
              return React.cloneElement(child, {
                style: [
                  styles.button,
                  i === 0
                    ? styles.first
                    : i === count - 1
                    ? styles.last
                    : styles.middle,
                  // @ts-ignore
                  child.props.style,
                ],
              });
            }

            return child;
          })}
        </View>
      </ToggleButton.Group>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
  },

  first: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  middle: {
    borderRadius: 0,
    borderLeftWidth: 0,
  },

  last: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default ToggleButtonRow;
