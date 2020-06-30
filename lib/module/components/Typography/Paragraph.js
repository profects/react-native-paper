import * as React from 'react';
import { StyleSheet } from 'react-native';
import StyledText from './StyledText'; // @component-group Typography

/**
 * Typography component for showing a paragraph.
 *
 * <div class="screenshots">
 *   <img src="screenshots/paragraph.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Paragraph } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Paragraph>Paragraph</Paragraph>
 * );
 *
 * export default MyComponent;
 * ```
 */

const Paragraph = props => /*#__PURE__*/React.createElement(StyledText, Object.assign({}, props, {
  alpha: 0.87,
  family: "regular",
  style: [styles.text, props.style]
}));

export default Paragraph;
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 2,
    letterSpacing: 0.25
  }
});
//# sourceMappingURL=Paragraph.js.map(StyledText, _extends({}, props, {
  alpha: 0.87,
  family: "regular",
  style: [styles.text, props.style]
}));

export default Paragraph;
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 2,
    letterSpacing: 0.25
  }
});
//# sourceMappingURL=Paragraph.js.map