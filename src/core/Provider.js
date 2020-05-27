import * as React from 'react';
import { ThemeProvider } from './theming';
import { Provider as SettingsProvider } from './settings';
import MaterialCommunityIcon from '../components/MaterialCommunityIcon';
import PortalHost from '../components/Portal/PortalHost';
export default class Provider extends React.Component {
    render() {
        return (React.createElement(PortalHost, null,
            React.createElement(SettingsProvider, { value: this.props.settings || { icon: MaterialCommunityIcon } },
                React.createElement(ThemeProvider, { theme: this.props.theme }, this.props.children))));
    }
}
