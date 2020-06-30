import color from 'color';
import * as React from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
import TouchableRipple from '../TouchableRipple';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import { ListAccordionGroupContext } from './ListAccordionGroup';
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

let ListAccordion =
/** @class */
(() => {
  class ListAccordion extends React.Component {
    constructor() {
      super(...arguments);
      this.state = {
        expanded: this.props.expanded || false
      };

      this.handlePress = () => {
        this.props.onPress && this.props.onPress();

        if (this.props.expanded === undefined) {
          // Only update state of the `expanded` prop was not passed
          // If it was passed, the component will act as a controlled component
          this.setState(state => ({
            expanded: !state.expanded
          }));
        }
      };
    }

    render() {
      const {
        left,
        title,
        description,
        children,
        theme,
        titleStyle,
        descriptionStyle,
        titleNumberOfLines,
        descriptionNumberOfLines,
        style,
        id,
        testID
      } = this.props;
      const titleColor = color(theme.colors.text).alpha(0.87).rgb().string();
      const descriptionColor = color(theme.colors.text).alpha(0.54).rgb().string();
      const expandedInternal = this.props.expanded !== undefined ? this.props.expanded : this.state.expanded;
      return /*#__PURE__*/React.createElement(ListAccordionGroupContext.Consumer, null, groupContext => {
        if (groupContext !== null && !id) {
          throw new Error('List.Accordion is used inside a List.AccordionGroup without specifying an id prop.');
        }

        const expanded = groupContext ? groupContext.expandedId === id : expandedInternal;
        const handlePress = groupContext && id !== undefined ? () => groupContext.onAccordionPress(id) : this.handlePress;
        return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(TouchableRipple, {
          style: [styles.container, style],
          onPress: handlePress,
          accessibilityTraits: "button",
          accessibilityComponentType: "button",
          accessibilityRole: "button",
          testID: testID
        }, /*#__PURE__*/React.createElement(View, {
          style: styles.row,
          pointerEvents: "none"
        }, left ? left({
          color: expanded ? theme.colors.primary : descriptionColor
        }) : null, /*#__PURE__*/React.createElement(View, {
          style: [styles.item, styles.content]
        }, /*#__PURE__*/React.createElement(Text, {
          numberOfLines: titleNumberOfLines,
          style: [styles.title, {
            color: expanded ? theme.colors.primary : titleColor
          }, titleStyle]
        }, title), description && /*#__PURE__*/React.createElement(Text, {
          numberOfLines: descriptionNumberOfLines,
          style: [styles.description, {
            color: descriptionColor
          }, descriptionStyle]
        }, description)), /*#__PURE__*/React.createElement(View, {
          style: [styles.item, description ? styles.multiline : undefined]
        }, /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
          name: expanded ? 'chevron-up' : 'chevron-down',
          color: titleColor,
          size: 24,
          direction: I18nManager.isRTL ? 'rtl' : 'ltr'
        })))), expanded ? React.Children.map(children, child => {
          if (left && /*#__PURE__*/React.isValidElement(child) && !child.props.left && !child.props.right) {
            return /*#__PURE__*/React.cloneElement(child, {
              style: [styles.child, child.props.style]
            });
          }

          return child;
        }) : null);
      });
    }

  }

  ListAccordion.displayName = 'List.Accordion';
  ListAccordion.defaultProps = {
    titleNumberOfLines: 1,
    descriptionNumberOfLines: 2
  };
  return ListAccordion;
})();

export const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  multiline: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16
  },
  description: {
    fontSize: 14
  },
  item: {
    margin: 8
  },
  child: {
    paddingLeft: 64
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  }
});
export default withTheme(ListAccordion);
//# sourceMappingURL=ListAccordion.js.map