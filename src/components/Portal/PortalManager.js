import * as React from 'react';
import { View, StyleSheet } from 'react-native';
/**
 * Portal host is the component which actually renders all Portals.
 */
export default class PortalManager extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            portals: [],
        };
        this.mount = (key, children) => {
            this.setState(state => ({
                portals: [...state.portals, { key, children }],
            }));
        };
        this.update = (key, children) => this.setState(state => ({
            portals: state.portals.map(item => {
                if (item.key === key) {
                    return { ...item, children };
                }
                return item;
            }),
        }));
        this.unmount = (key) => this.setState(state => ({
            portals: state.portals.filter(item => item.key !== key),
        }));
    }
    render() {
        return this.state.portals.map(({ key, children }) => (React.createElement(View, { key: key, collapsable: false /* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */, pointerEvents: "box-none", style: StyleSheet.absoluteFill }, children)));
    }
}
