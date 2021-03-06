function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { StyleSheet, Animated, TouchableWithoutFeedback, View } from 'react-native';
import CardContent from './CardContent';
import CardActions from './CardActions'; // eslint-disable-next-line @typescript-eslint/no-unused-vars

import CardCover from './CardCover'; // eslint-disable-next-line @typescript-eslint/no-unused-vars

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
class Card extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      // @ts-ignore
      elevation: new Animated.Value(this.props.elevation)
    });

    _defineProperty(this, "handlePressIn", () => {
      const {
        scale
      } = this.props.theme.animation;
      Animated.timing(this.state.elevation, {
        toValue: 8,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    });

    _defineProperty(this, "handlePressOut", () => {
      const {
        scale
      } = this.props.theme.animation;
      Animated.timing(this.state.elevation, {
        // @ts-ignore
        toValue: this.props.elevation,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    });
  }

  render() {
    const _this$props = this.props,
          {
      children,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      elevation: cardElevation,
      onLongPress,
      onPress,
      style,
      theme,
      testID,
      accessible
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["children", "elevation", "onLongPress", "onPress", "style", "theme", "testID", "accessible"]);

    const {
      elevation
    } = this.state;
    const {
      roundness
    } = theme;
    const total = React.Children.count(children);
    const siblings = React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) && child.type ? child.type.displayName : null);
    return /*#__PURE__*/React.createElement(Surface // @ts-ignore
    , _extends({
      style: [{
        borderRadius: roundness,
        elevation
      }, style]
    }, rest), /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
      delayPressIn: 0,
      disabled: !(onPress || onLongPress),
      onLongPress: onLongPress,
      onPress: onPress,
      onPressIn: onPress ? this.handlePressIn : undefined,
      onPressOut: onPress ? this.handlePressOut : undefined,
      testID: testID,
      accessible: accessible
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.innerContainer
    }, React.Children.map(children, (child, index) => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
      index,
      total,
      siblings
    }) : child))));
  }

}

_defineProperty(Card, "Content", CardContent);

_defineProperty(Card, "Actions", CardActions);

_defineProperty(Card, "Cover", CardCover);

_defineProperty(Card, "Title", CardTitle);

_defineProperty(Card, "defaultProps", {
  elevation: 1
});

const styles = StyleSheet.create({
  innerContainer: {
    flexGrow: 1,
    flexShrink: 1
  }
});
export default withTheme(Card);
//# sourceMappingURL=Card.js.map