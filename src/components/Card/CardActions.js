import * as React from 'react';
import { StyleSheet, View } from 'react-native';
/**
 * A component to show a list of actions inside a Card.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/card-actions.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Button } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
let CardActions = /** @class */ (() => {
    class CardActions extends React.Component {
        render() {
            return (React.createElement(View, Object.assign({}, this.props, { style: [styles.container, this.props.style] }), React.Children.map(this.props.children, child => React.isValidElement(child)
                ? React.cloneElement(child, {
                    compact: child.props.compact !== false,
                })
                : child)));
        }
    }
    CardActions.displayName = 'Card.Actions';
    return CardActions;
})();
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 8,
    },
});
export default CardActions;
