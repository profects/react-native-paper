import color from 'color';
import * as React from 'react';
import { View, ViewStyle, StyleProp, TextStyle } from 'react-native';
import TouchableRipple from '../TouchableRipple';
import Icon from '../Icon';
import { withTheme } from '../../core/theming';
import { Theme } from '../../types';
import { styles } from './ListAccordion';
import {
  ListAccordionGroupContext,
  ListAccordionGroupContextType,
} from './ListAccordionGroup';

type Props = {
  /**
   * Title text for the list accordion.
   */
  renderTitle: (props: { style: StyleProp<TextStyle> }) => React.ReactNode;
  /**
   * Description text for the list accordion.
   */
  renderDescription: (props: {
    style: StyleProp<TextStyle>;
  }) => React.ReactNode;
  /**
   * Callback which returns a React element to display on the left side.
   */
  left?: (props: { color: string }) => React.ReactNode;
  /**
   * Callback which returns a React element to display on the right side.
   */
  right?: (props: { color: string }) => React.ReactNode;
  /**
   * Whether the accordion is expanded
   * If this prop is provided, the accordion will behave as a "controlled component".
   * You'll need to update this prop when you want to toggle the component or on `onPress`.
   */
  expanded?: boolean;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Content of the section.
   */
  children: React.ReactNode;
  /**
   * @optional
   */
  theme: Theme;
  /**
   * Style that is passed to the wrapping TouchableRipple element.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Style that is passed to Title element.
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Style that is passed to Description element.
   */
  descriptionStyle?: StyleProp<TextStyle>;
  /**
   * Truncate Title text such that the total number of lines does not
   * exceed this number.
   */
  titleNumberOfLines?: number;
  /**
   * Truncate Description text such that the total number of lines does not
   * exceed this number.
   */
  descriptionNumberOfLines?: number;
  /**
   * Id is used for distinguishing specific accordion when using List.AccordionGroup. Property is required when using List.AccordionGroup and has no impact on behavior when using standalone List.Accordion.
   */
  id?: string | number;
};

type State = {
  expanded: boolean;
};

/**
 * A component used to display an expandable list item.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/list-accordion-1.png" />
 *   <img class="medium" src="screenshots/list-accordion-2.png" />
 *   <img class="medium" src="screenshots/list-accordion-3.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, Checkbox } from 'react-native-paper';
 *
 * class MyComponent extends React.Component {
 *   state = {
 *     expanded: true
 *   }
 *
 *   _handlePress = () =>
 *     this.setState({
 *       expanded: !this.state.expanded
 *     });
 *
 *   render() {
 *     return (
 *       <List.Section title="Accordions">
 *         <List.Accordion
 *           title="Uncontrolled Accordion"
 *           left={props => <List.Icon {...props} icon="folder" />}
 *         >
 *           <List.Item title="First item" />
 *           <List.Item title="Second item" />
 *         </List.Accordion>
 *
 *         <List.Accordion
 *           title="Controlled Accordion"
 *           left={props => <List.Icon {...props} icon="folder" />}
 *           expanded={this.state.expanded}
 *           onPress={this._handlePress}
 *         >
 *           <List.Item title="First item" />
 *           <List.Item title="Second item" />
 *         </List.Accordion>
 *       </List.Section>
 *     );
 *   }
 * }
 *
 * export default MyComponent;
 * ```
 */
class ListAccordionRenderer extends React.Component<Props, State> {
  static displayName = 'List.AccordionRenderer';

  static defaultProps: Partial<Props> = {
    titleNumberOfLines: 1,
    descriptionNumberOfLines: 2,
  };

  state = {
    expanded: this.props.expanded || false,
  };

  private handlePress = () => {
    this.props.onPress && this.props.onPress();

    if (this.props.expanded === undefined) {
      // Only update state of the `expanded` prop was not passed
      // If it was passed, the component will act as a controlled component
      this.setState(state => ({
        expanded: !state.expanded,
      }));
    }
  };

  render() {
    const {
      left,
      right,
      children,
      theme,
      titleStyle,
      descriptionStyle,
      renderDescription,
      renderTitle,
      style,
      id,
    } = this.props;
    const titleColor = color(theme.colors.text)
      .alpha(0.87)
      .rgb()
      .string();
    const descriptionColor = color(theme.colors.text)
      .alpha(0.54)
      .rgb()
      .string();

    const expandedInternal =
      this.props.expanded !== undefined
        ? this.props.expanded
        : this.state.expanded;

    return (
      <ListAccordionGroupContext.Consumer>
        {(groupContext: ListAccordionGroupContextType) => {
          if (groupContext !== null && !id) {
            throw new Error(
              'List.Accordion is used inside a List.AccordionGroup without specifying an id prop.'
            );
          }
          const expanded = groupContext
            ? groupContext.expandedId === id
            : expandedInternal;
          const handlePress =
            groupContext && id !== undefined
              ? () => groupContext.onAccordionPress(id)
              : this.handlePress;
          return (
            <View>
              <TouchableRipple
                style={[styles.container, style]}
                onPress={handlePress}
                accessibilityTraits="button"
                accessibilityComponentType="button"
                accessibilityRole="button"
              >
                <View style={styles.row}>
                  {left
                    ? left({
                        color: expanded
                          ? theme.colors.primary
                          : descriptionColor,
                      })
                    : null}
                  <View style={[styles.item, styles.content]}>
                    {renderTitle({
                      style: [
                        styles.title,
                        {
                          color: expanded ? theme.colors.primary : titleColor,
                        },
                        titleStyle,
                      ],
                    })}

                    {renderDescription &&
                      renderDescription({
                        style: [
                          styles.description,
                          {
                            color: descriptionColor,
                          },
                          descriptionStyle,
                        ],
                      })}
                  </View>
                  {right
                    ? right({
                        color: expanded
                          ? theme.colors.primary
                          : descriptionColor,
                      })
                    : null}
                  <View
                    style={[
                      styles.item,
                      renderDescription ? styles.multiline : undefined,
                    ]}
                  >
                    <Icon
                      source={expanded ? 'chevron-up' : 'chevron-down'}
                      color={titleColor}
                      size={24}
                    />
                  </View>
                </View>
              </TouchableRipple>
              {expanded
                ? React.Children.map(children, child => {
                    if (
                      left &&
                      React.isValidElement(child) &&
                      !child.props.left &&
                      !child.props.right
                    ) {
                      return React.cloneElement(child, {
                        style: [styles.child, child.props.style],
                      });
                    }

                    return child;
                  })
                : null}
            </View>
          );
        }}
      </ListAccordionGroupContext.Consumer>
    );
  }
}

export default withTheme(ListAccordionRenderer);
