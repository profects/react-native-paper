function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme } from '../../core/theming';
import Caption from './../Typography/Caption';
import Title from './../Typography/Title';
const LEFT_SIZE = 40;
/**
 * A component to show a title, subtitle and an avatar inside a Card.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/card-title-1.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Card, IconButton } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card.Title
 *     title="Card Title"
 *     subtitle="Card Subtitle"
 *     left={(props) => <Avatar.Icon {...props} icon="folder" />}
 *     right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */

class CardTitle extends React.Component {
  render() {
    const {
      left,
      leftStyle,
      right,
      rightStyle,
      subtitle,
      subtitleStyle,
      subtitleNumberOfLines,
      style,
      title,
      titleStyle
    } = this.props;
    return /*#__PURE__*/React.createElement(View, {
      style: [styles.container, {
        minHeight: subtitle || left || right ? 72 : 50
      }, style]
    }, left ? /*#__PURE__*/React.createElement(View, {
      style: [styles.left, leftStyle]
    }, left({
      size: LEFT_SIZE
    })) : null, /*#__PURE__*/React.createElement(View, {
      style: [styles.titles]
    }, title ? /*#__PURE__*/React.createElement(Title, {
      style: [styles.title, {
        marginBottom: subtitle ? 0 : 2
      }, titleStyle],
      numberOfLines: 1
    }, title) : null, subtitle ? /*#__PURE__*/React.createElement(Caption, {
      style: [styles.subtitle, subtitleStyle],
      numberOfLines: subtitleNumberOfLines
    }, subtitle) : null), /*#__PURE__*/React.createElement(View, {
      style: rightStyle
    }, right ? right({
      size: 24
    }) : null));
  }

}

_defineProperty(CardTitle, "displayName", 'Card.Title');

_defineProperty(CardTitle, "defaultProps", {
  subtitleNumberOfLines: 1
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16
  },
  left: {
    justifyContent: 'center',
    marginRight: 16,
    height: LEFT_SIZE,
    width: LEFT_SIZE
  },
  titles: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    minHeight: 30
  },
  subtitle: {
    minHeight: 20,
    marginVertical: 0
  }
});
export default withTheme(CardTitle); // @component-docs ignore-next-line

export { CardTitle };
//# sourceMappingURL=CardTitle.js.map