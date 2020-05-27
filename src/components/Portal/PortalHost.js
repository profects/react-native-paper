import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import PortalManager from './PortalManager';
export const PortalContext = React.createContext(null);
/**
 * Portal host renders all of its children `Portal` elements.
 * For example, you can wrap a screen in `Portal.Host` to render items above the screen.
 * If you're using the `Provider` component, it already includes `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from 'react-native';
 * import { Portal } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <Portal.Host>
 *         <Text>Content of the app</Text>
 *       </Portal.Host>
 *     );
 *   }
 * }
 * ```
 *
 * Here any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.
 */
let PortalHost = /** @class */ (() => {
    class PortalHost extends React.Component {
        constructor() {
            super(...arguments);
            this.setManager = (manager) => {
                this.manager = manager;
            };
            this.mount = (children) => {
                const key = this.nextKey++;
                if (this.manager) {
                    this.manager.mount(key, children);
                }
                else {
                    this.queue.push({ type: 'mount', key, children });
                }
                return key;
            };
            this.update = (key, children) => {
                if (this.manager) {
                    this.manager.update(key, children);
                }
                else {
                    const op = { type: 'mount', key, children };
                    const index = this.queue.findIndex(o => o.type === 'mount' || (o.type === 'update' && o.key === key));
                    if (index > -1) {
                        // @ts-ignore
                        this.queue[index] = op;
                    }
                    else {
                        this.queue.push(op);
                    }
                }
            };
            this.unmount = (key) => {
                if (this.manager) {
                    this.manager.unmount(key);
                }
                else {
                    this.queue.push({ type: 'unmount', key });
                }
            };
            this.nextKey = 0;
            this.queue = [];
        }
        componentDidMount() {
            const manager = this.manager;
            const queue = this.queue;
            while (queue.length && manager) {
                const action = queue.pop();
                if (action) {
                    // eslint-disable-next-line default-case
                    switch (action.type) {
                        case 'mount':
                            manager.mount(action.key, action.children);
                            break;
                        case 'update':
                            manager.update(action.key, action.children);
                            break;
                        case 'unmount':
                            manager.unmount(action.key);
                            break;
                    }
                }
            }
        }
        render() {
            return (React.createElement(PortalContext.Provider, { value: {
                    mount: this.mount,
                    update: this.update,
                    unmount: this.unmount,
                } },
                React.createElement(View, { style: styles.container, collapsable: false, pointerEvents: "box-none" }, this.props.children),
                React.createElement(PortalManager, { ref: this.setManager })));
        }
    }
    PortalHost.displayName = 'Portal.Host';
    return PortalHost;
})();
export default PortalHost;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
