"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _theming = require("../../core/theming");

var _ListAccordion = require("./ListAccordion");

var _ListAccordionGroup = require("./ListAccordionGroup");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
class ListAccordionRenderer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      expanded: this.props.expanded || false
    });

    _defineProperty(this, "handlePress", () => {
      this.props.onPress && this.props.onPress();

      if (this.props.expanded === undefined) {
        // Only update state of the `expanded` prop was not passed
        // If it was passed, the component will act as a controlled component
        this.setState(state => ({
          expanded: !state.expanded
        }));
      }
    });
  }

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
      rowStyle,
      id
    } = this.props;
    const titleColor = (0, _color.default)(theme.colors.text).alpha(0.87).rgb().string();
    const descriptionColor = (0, _color.default)(theme.colors.text).alpha(0.54).rgb().string();
    const expandedInternal = this.props.expanded !== undefined ? this.props.expanded : this.state.expanded;
    return /*#__PURE__*/React.createElement(_ListAccordionGroup.ListAccordionGroupContext.Consumer, null, groupContext => {
      if (groupContext !== null && !id) {
        throw new Error('List.Accordion is used inside a List.AccordionGroup without specifying an id prop.');
      }

      const expanded = groupContext ? groupContext.expandedId === id : expandedInternal;
      const handlePress = groupContext && id !== undefined ? () => groupContext.onAccordionPress(id) : this.handlePress;
      return /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(_TouchableRipple.default, {
        style: [_ListAccordion.styles.container, style],
        onPress: handlePress,
        accessibilityTraits: "button",
        accessibilityComponentType: "button",
        accessibilityRole: "button"
      }, /*#__PURE__*/React.createElement(_reactNative.View, {
        style: [_ListAccordion.styles.row, rowStyle]
      }, left ? left({
        color: expanded ? theme.colors.primary : descriptionColor
      }) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
        style: [_ListAccordion.styles.item, _ListAccordion.styles.content]
      }, renderTitle({
        style: [_ListAccordion.styles.title, {
          color: expanded ? theme.colors.primary : titleColor
        }, titleStyle]
      }), renderDescription ? renderDescription({
        style: [_ListAccordion.styles.description, {
          color: descriptionColor
        }, descriptionStyle]
      }) : null), right ? right({
        color: expanded ? theme.colors.primary : descriptionColor
      }) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
        style: [_ListAccordion.styles.item, renderDescription ? _ListAccordion.styles.multiline : undefined]
      }, /*#__PURE__*/React.createElement(_Icon.default, {
        source: expanded ? 'chevron-up' : 'chevron-down',
        color: titleColor,
        size: 24
      })))), expanded ? React.Children.map(children, child => {
        if (left && /*#__PURE__*/React.isValidElement(child) && !child.props.left && !child.props.right) {
          return /*#__PURE__*/React.cloneElement(child, {
            style: [_ListAccordion.styles.child, child.props.style]
          });
        }

        return child;
      }) : null);
    });
  }

}

_defineProperty(ListAccordionRenderer, "displayName", 'List.AccordionRenderer');

_defineProperty(ListAccordionRenderer, "defaultProps", {
  titleNumberOfLines: 1,
  descriptionNumberOfLines: 2
});

var _default = (0, _theming.withTheme)(ListAccordionRenderer);

exports.default = _default;
//# sourceMappingURL=ListAccordionRenderer.js.map