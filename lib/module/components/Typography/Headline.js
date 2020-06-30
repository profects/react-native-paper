import * as React from 'react';
import { StyleSheet } from 'react-native';
import StyledText from './StyledText'; // @component-group Typography

/**
 * Typography component for showing a headline.
 *
 * <div class="screenshots">
 *   <img src="screenshots/headline.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Headline } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Headline>Headline</Headline>
 * );
 *
 * export default MyComponent;
 * ```
 */

const Headline = props => /*#__PURE__*/React.createElement(StyledText, Object.assign({}, props, {
  alpha: 0.87,
  family: "regular",
  style: [styles.text, props.style]
}));

export default Headline;
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 2,
    letterSpacing: 0
  }
});
//# sourceMappingURL=Headline.js.mapement(StyledText, _extends({}, props, {
  alpha: 0.87,
  family: "regular",
  style: [styles.text, props.style]
}));

export default Headline;
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 2,
    letterSpacing: 0
  }
});
//# sourceMappingURL=Headline.js.map