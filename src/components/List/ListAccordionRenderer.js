import color from 'color';
import * as React from 'react';
import { View } from 'react-native';
import TouchableRipple from '../TouchableRipple';
import Icon from '../Icon';
import { withTheme } from '../../core/theming';
import { styles } from './ListAccordion';
import { ListAccordionGroupContext, } from './ListAccordionGroup';
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
let ListAccordionRenderer = /** @class */ (() => {
    class ListAccordionRenderer extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                expanded: this.props.expanded || false,
            };
            this.handlePress = () => {
                this.props.onPress && this.props.onPress();
                if (this.props.expanded === undefined) {
                    // Only update state of the `expanded` prop was not passed
                    // If it was passed, the component will act as a controlled component
                    this.setState(state => ({
                        expanded: !state.expanded,
                    }));
                }
            };
        }
        render() {
            const { left, right, children, theme, titleStyle, descriptionStyle, renderDescription, renderTitle, style, rowStyle, id, } = this.props;
            const titleColor = color(theme.colors.text)
                .alpha(0.87)
                .rgb()
                .string();
            const descriptionColor = color(theme.colors.text)
                .alpha(0.54)
                .rgb()
                .string();
            const expandedInternal = this.props.expanded !== undefined
                ? this.props.expanded
                : this.state.expanded;
            return (React.createElement(ListAccordionGroupContext.Consumer, null, (groupContext) => {
                if (groupContext !== null && !id) {
                    throw new Error('List.Accordion is used inside a List.AccordionGroup without specifying an id prop.');
                }
                const expanded = groupContext
                    ? groupContext.expandedId === id
                    : expandedInternal;
                const handlePress = groupContext && id !== undefined
                    ? () => groupContext.onAccordionPress(id)
                    : this.handlePress;
                return (React.createElement(View, null,
                    React.createElement(TouchableRipple, { style: [styles.container, style], onPress: handlePress, accessibilityTraits: "button", accessibilityComponentType: "button", accessibilityRole: "button" },
                        React.createElement(View, { style: [styles.row, rowStyle] },
                            left
                                ? left({
                                    color: expanded
                                        ? theme.colors.primary
                                        : descriptionColor,
                                })
                                : null,
                            React.createElement(View, { style: [styles.item, styles.content] },
                                renderTitle({
                                    style: [
                                        styles.title,
                                        {
                                            color: expanded ? theme.colors.primary : titleColor,
                                        },
                                        titleStyle,
                                    ],
                                }),
                                renderDescription &&
                                    renderDescription({
                                        style: [
                                            styles.description,
                                            {
                                                color: descriptionColor,
                                            },
                                            descriptionStyle,
                                        ],
                                    })),
                            right
                                ? right({
                                    color: expanded
                                        ? theme.colors.primary
                                        : descriptionColor,
                                })
                                : null,
                            React.createElement(View, { style: [
                                    styles.item,
                                    renderDescription ? styles.multiline : undefined,
                                ] },
                                React.createElement(Icon, { source: expanded ? 'chevron-up' : 'chevron-down', color: titleColor, size: 24 })))),
                    expanded
                        ? React.Children.map(children, child => {
                            if (left &&
                                React.isValidElement(child) &&
                                !child.props.left &&
                                !child.props.right) {
                                return React.cloneElement(child, {
                                    style: [styles.child, child.props.style],
                                });
                            }
                            return child;
                        })
                        : null));
            }));
        }
    }
    ListAccordionRenderer.displayName = 'List.AccordionRenderer';
    ListAccordionRenderer.defaultProps = {
        titleNumberOfLines: 1,
        descriptionNumberOfLines: 2,
    };
    return ListAccordionRenderer;
})();
export default withTheme(ListAccordionRenderer);
