function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Animated, SafeAreaView, StyleSheet } from 'react-native';
import Button from './Button';
import Surface from './Surface';
import Text from './Typography/Text';
import { withTheme } from '../core/theming';
const DURATION_SHORT = 4000;
const DURATION_MEDIUM = 7000;
const DURATION_LONG = 10000;
/**
 * Snackbars provide brief feedback about an operation through a message at the bottom of the screen.
 * Snackbar by default use onSurface color from theme
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/snackbar.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { Button, Snackbar } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     visible: false,
 *   };
 *
 *   _onToggleSnackBar = () => this.setState(state => ({ visible: !state.visible }));
 *
 *   _onDismissSnackBar = () => this.setState({ visible: false });
 *
 *   render() {
 *     const { visible } = this.state;
 *
 *     return (
 *       <View style={styles.container}>
 *         <Button
 *           onPress={this._onToggleSnackBar}
 *         >
 *           {visible ? 'Hide' : 'Show'}
 *         </Button>
 *         <Snackbar
 *           visible={visible}
 *           onDismiss={this._onDismissSnackBar}
 *           action={{
 *             label: 'Undo',
 *             onPress: () => {
 *               // Do something
 *             },
 *           }}
 *         >
 *           Hey there! I'm a Snackbar.
 *         </Snackbar>
 *       </View>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     justifyContent: 'space-between',
 *   },
 * });
 * ```
 */

let Snackbar =
/** @class */
(() => {
  class Snackbar extends React.Component {
    constructor() {
      super(...arguments);
      this.state = {
        opacity: new Animated.Value(0.0),
        hidden: !this.props.visible
      };

      this.toggle = () => {
        if (this.props.visible) {
          this.show();
        } else {
          this.hide();
        }
      };

      this.show = () => {
        if (this.hideTimeout) {
          clearTimeout(this.hideTimeout);
        }

        this.setState({
          hidden: false
        });
        const {
          scale
        } = this.props.theme.animation;
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 200 * scale,
          useNativeDriver: true
        }).start(({
          finished
        }) => {
          if (finished) {
            const {
              duration
            } = this.props;
            const isInfinity = duration === Number.POSITIVE_INFINITY || duration === Number.NEGATIVE_INFINITY;

            if (finished && !isInfinity) {
              this.hideTimeout = setTimeout(this.props.onDismiss, duration);
            }
          }
        });
      };

      this.hide = () => {
        if (this.hideTimeout) {
          clearTimeout(this.hideTimeout);
        }

        const {
          scale
        } = this.props.theme.animation;
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 100 * scale,
          useNativeDriver: true
        }).start(({
          finished
        }) => {
          if (finished) {
            this.setState({
              hidden: true
            });
          }
        });
      };
    }

    componentDidMount() {
      if (this.props.visible) {
        this.show();
      }
    }

    componentDidUpdate(prevProps) {
      if (prevProps.visible !== this.props.visible) {
        this.toggle();
      }
    }

    componentWillUnmount() {
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
      }
    }

    render() {
      const _this$props = this.props,
            {
        children,
        visible,
        action,
        onDismiss,
        theme,
        style,
        wrapperStyle,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        duration
      } = _this$props,
            rest = _objectWithoutProperties(_this$props, ["children", "visible", "action", "onDismiss", "theme", "style", "wrapperStyle", "duration"]);

      const {
        colors,
        roundness
      } = theme;

      if (this.state.hidden) {
        return null;
      }

      return /*#__PURE__*/React.createElement(SafeAreaView, {
        pointerEvents: "box-none",
        style: [styles.wrapper, wrapperStyle]
      }, /*#__PURE__*/React.createElement(Surface, Object.assign({
        pointerEvents: "box-none",
        accessibilityLiveRegion: "polite",
        style: [styles.container, {
          borderRadius: roundness,
          opacity: this.state.opacity,
          transform: [{
            scale: visible ? this.state.opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0.9, 1]
            }) : 1
          }]
        }, {
          backgroundColor: colors.onSurface
        }, style]
      }, rest), /*#__PURE__*/React.createElement(Text, {
        style: [styles.content, {
          marginRight: action ? 0 : 16,
          color: colors.surface
        }]
      }, children), action ? /*#__PURE__*/React.createElement(Button, {
        accessibilityLabel: action.accessibilityLabel,
        onPress: () => {
          action.onPress();
          onDismiss();
        },
        style: styles.button,
        color: colors.accent,
        compact: true,
        mode: "text"
      }, action.label) : null));
    }

  }
  /**
   * Show the Snackbar for a short duration.
   */


  Snackbar.DURATION_SHORT = DURATION_SHORT;
  /**
   * Show the Snackbar for a medium duration.
   */

  Snackbar.DURATION_MEDIUM = DURATION_MEDIUM;
  /**
   * Show the Snackbar for a long duration.
   */

  Snackbar.DURATION_LONG = DURATION_LONG;
  Snackbar.defaultProps = {
    duration: DURATION_MEDIUM
  };
  return Snackbar;
})();

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  container: {
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    borderRadius: 4
  },
  content: {
    marginLeft: 16,
    marginVertical: 14,
    flexWrap: 'wrap',
    flex: 1
  },
  button: {
    marginHorizontal: 8,
    marginVertical: 6
  }
});
export default withTheme(Snackbar);
//# sourceMappingURL=Snackbar.js.mapRL=Snackbar.js.map