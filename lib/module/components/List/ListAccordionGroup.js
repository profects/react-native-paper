import * as React from 'react';
export const ListAccordionGroupContext = /*#__PURE__*/React.createContext(null);
/**
 * List.AccordionGroup allows to control a group of List Accordions. Id prop for List.Accordion is required in order to group to work.
 * List.AccordionGroup can be controlled or uncontrolled component. Example shows uncontrolled version.
 * At most one Accordion will be expanded in given time.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/list-accordion-group.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, Text } from 'react-native';
 * import { List } from 'react-native-paper';
 *
 * function MyComponent() {
 *  return (
 *   <List.AccordionGroup>
 *     <List.Accordion title="Accordion 1" id="1">
 *       <List.Item title="Item 1" />
 *     </List.Accordion>
 *     <List.Accordion title="Accordion 2" id="2">
 *       <List.Item title="Item 2" />
 *     </List.Accordion>
 *     <View>
 *       <Text>
 *         List.Accordion can be wrapped because implementation uses React.Context.
 *       </Text>
 *       <List.Accordion title="Accordion 3" id="3">
 *         <List.Item title="Item 3" />
 *       </List.Accordion>
 *     </View>
 *   </List.AccordionGroup>
 *  );
 * }
 *```
 */

let ListAccordionGroup =
/** @class */
(() => {
  class ListAccordionGroup extends React.Component {
    constructor() {
      super(...arguments);
      this.state = {
        expandedId: undefined
      };

      this.onAccordionPress = expandedId => {
        this.setState(({
          expandedId: currentExpandedId
        }) => ({
          expandedId: currentExpandedId === expandedId ? undefined : expandedId
        }));
      };
    }

    render() {
      const {
        expandedId,
        onAccordionPress,
        children
      } = this.props;
      return /*#__PURE__*/React.createElement(ListAccordionGroupContext.Provider, {
        value: {
          expandedId: expandedId || this.state.expandedId,
          onAccordionPress: onAccordionPress || this.onAccordionPress
        }
      }, children);
    }

  }

  ListAccordionGroup.displayName = 'List.AccordionGroup';
  return ListAccordionGroup;
})();

export default ListAccordionGroup;
//# sourceMappingURL=ListAccordionGroup.js.mapordionPress
      }
    }, children);
  }

}

_defineProperty(ListAccordionGroup, "displayName", 'List.AccordionGroup');

export default ListAccordionGroup;
//# sourceMappingURL=ListAccordionGroup.js.map