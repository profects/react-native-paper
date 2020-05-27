import * as React from 'react';
import { StyleSheet, Animated, TouchableWithoutFeedback, View, } from 'react-native';
import CardContent from './CardContent';
import CardActions from './CardActions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CardCover from './CardCover';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CardTitle from './CardTitle';
import Surface from '../Surface';
import { withTheme } from '../../core/theming';
/**
 * A card is a sheet of material that serves as an entry point to more detailed information.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/card-1.png" />
 *   <img class="medium" src="screenshots/card-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
 *
 * const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
 *     <Card.Content>
 *       <Title>Card title</Title>
 *       <Paragraph>Card content</Paragraph>
 *     </Card.Content>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
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
let Card = /** @class */ (() => {
    class Card extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                // @ts-ignore
                elevation: new Animated.Value(this.props.elevation),
            };
            this.handlePressIn = () => {
                const { scale } = this.props.theme.animation;
                Animated.timing(this.state.elevation, {
                    toValue: 8,
                    duration: 150 * scale,
                    useNativeDriver: false,
                }).start();
            };
            this.handlePressOut = () => {
                const { scale } = this.props.theme.animation;
                Animated.timing(this.state.elevation, {
                    // @ts-ignore
                    toValue: this.props.elevation,
                    duration: 150 * scale,
                    useNativeDriver: false,
                }).start();
            };
        }
        render() {
            const { children, 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            elevation: cardElevation, onLongPress, onPress, style, theme, testID, accessible, ...rest } = this.props;
            const { elevation } = this.state;
            const { roundness } = theme;
            const total = React.Children.count(children);
            const siblings = React.Children.map(children, child => React.isValidElement(child) && child.type
                ? child.type.displayName
                : null);
            return (React.createElement(Surface
            //@ts-ignore
            , Object.assign({ 
                //@ts-ignore
                style: [{ borderRadius: roundness, elevation }, style] }, rest),
                React.createElement(TouchableWithoutFeedback, { delayPressIn: 0, disabled: !(onPress || onLongPress), onLongPress: onLongPress, onPress: onPress, onPressIn: onPress ? this.handlePressIn : undefined, onPressOut: onPress ? this.handlePressOut : undefined, testID: testID, accessible: accessible },
                    React.createElement(View, { style: styles.innerContainer }, React.Children.map(children, (child, index) => React.isValidElement(child)
                        ? React.cloneElement(child, {
                            index,
                            total,
                            siblings,
                        })
                        : child)))));
        }
    }
    // @component ./CardContent.tsx
    Card.Content = CardContent;
    // @component ./CardActions.tsx
    Card.Actions = CardActions;
    // @component ./CardCover.tsx
    Card.Cover = CardCover;
    // @component ./CardTitle.tsx
    Card.Title = CardTitle;
    Card.defaultProps = {
        elevation: 1,
    };
    return Card;
})();
const styles = StyleSheet.create({
    innerContainer: {
        flexGrow: 1,
        flexShrink: 1,
    },
});
export default withTheme(Card);
