import * as React from 'react';
import color from 'color';
import { black } from '../../styles/colors';
import IconButton from '../IconButton';
/**
 * A component used to display an action item in the appbar.
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-action-android.png" />
 *       <figcaption>Android</figcaption>
 *   </figure>
 * </div>
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-action-ios.png" />
 *       <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 * import { Platform } from 'react-native';
 *
 * const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *         <Appbar.Action icon="magnify" onPress={() => {}} />
 *         <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
let AppbarAction = /** @class */ (() => {
    class AppbarAction extends React.Component {
        render() {
            const { color: iconColor = color(black)
                .alpha(0.54)
                .rgb()
                .string(), icon, disabled, onPress, accessibilityLabel, ...rest } = this.props;
            return (React.createElement(IconButton, Object.assign({ onPress: onPress, color: iconColor, icon: icon, disabled: disabled, accessibilityLabel: accessibilityLabel, animated: true }, rest)));
        }
    }
    AppbarAction.displayName = 'Appbar.Action';
    AppbarAction.defaultProps = {
        size: 24,
    };
    return AppbarAction;
})();
export default AppbarAction;
