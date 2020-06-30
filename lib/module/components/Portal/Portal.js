import * as React from 'react';
import PortalConsumer from './PortalConsumer';
import PortalHost, { PortalContext } from './PortalHost';
import { Provider as SettingsProvider, Consumer as SettingsConsumer } from '../../core/settings';
import { ThemeProvider, withTheme } from '../../core/theming';
/**
 * Portal allows to render a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <Portal>
 *         <Text>This is rendered at a different place</Text>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */

let Portal =
/** @class */
(() => {
  class Portal extends React.Component {
    render() {
      const {
        children,
        theme
      } = this.props;
      return /*#__PURE__*/React.createElement(SettingsConsumer, null, settings => /*#__PURE__*/React.createElement(PortalContext.Consumer, null, manager => /*#__PURE__*/React.createElement(PortalConsumer, {
        manager: manager
      }, /*#__PURE__*/React.createElement(SettingsProvider, {
        value: settings
      }, /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, children)))));
    }

  } // @component ./PortalHost.tsx


  Portal.Host = PortalHost;
  return Portal;
})();

export default withTheme(Portal);
//# sourceMappingURL=Portal.js.map PortalHost);

export default withTheme(Portal);
//# sourceMappingURL=Portal.js.map