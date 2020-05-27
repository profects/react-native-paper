import * as React from 'react';
import { AsyncStorage, I18nManager, Platform, YellowBox } from 'react-native';
import { Updates } from 'expo';
import { useKeepAwake } from 'expo-keep-awake';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider, DarkTheme, DefaultTheme, } from 'react-native-paper';
import App from './RootNavigator';
import DrawerItems from './DrawerItems';
import { SafeAreaProvider } from 'react-native-safe-area-context';
YellowBox.ignoreWarnings(['Require cycle:']);
const PERSISTENCE_KEY = 'NAVIGATION_STATE';
const PREFERENCES_KEY = 'APP_PREFERENCES';
const PreferencesContext = React.createContext(null);
const DrawerContent = () => {
    return (React.createElement(PreferencesContext.Consumer, null, preferences => (React.createElement(DrawerItems, { toggleTheme: preferences.toggleTheme, toggleRTL: preferences.toggleRtl, isRTL: preferences.rtl, isDarkTheme: preferences.theme === DarkTheme }))));
};
const Drawer = createDrawerNavigator();
export default function PaperExample() {
    useKeepAwake();
    const [isReady, setIsReady] = React.useState(false);
    const [initialState, setInitialState] = React.useState();
    const [theme, setTheme] = React.useState(DefaultTheme);
    const [rtl, setRtl] = React.useState(I18nManager.isRTL);
    React.useEffect(() => {
        const restoreState = async () => {
            try {
                const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
                const state = JSON.parse(savedStateString || '');
                setInitialState(state);
            }
            catch (e) {
                // ignore error
            }
            finally {
                setIsReady(true);
            }
        };
        if (!isReady) {
            restoreState();
        }
    }, [isReady]);
    React.useEffect(() => {
        const restorePrefs = async () => {
            try {
                const prefString = await AsyncStorage.getItem(PREFERENCES_KEY);
                const preferences = JSON.parse(prefString || '');
                if (preferences) {
                    // eslint-disable-next-line react/no-did-mount-set-state
                    setTheme(preferences.theme === 'dark' ? DarkTheme : DefaultTheme);
                    if (typeof preferences.rtl === 'boolean') {
                        setRtl(preferences.rtl);
                    }
                }
            }
            catch (e) {
                // ignore error
            }
        };
        restorePrefs();
    }, []);
    React.useEffect(() => {
        const savePrefs = async () => {
            try {
                await AsyncStorage.setItem(PREFERENCES_KEY, JSON.stringify({
                    theme: theme === DarkTheme ? 'dark' : 'light',
                    rtl,
                }));
            }
            catch (e) {
                // ignore error
            }
            if (I18nManager.isRTL !== rtl) {
                I18nManager.forceRTL(rtl);
                Updates.reloadFromCache();
            }
        };
        savePrefs();
    }, [rtl, theme]);
    const preferences = React.useMemo(() => ({
        toggleTheme: () => setTheme(theme => (theme === DefaultTheme ? DarkTheme : DefaultTheme)),
        toggleRtl: () => setRtl(rtl => !rtl),
        rtl,
        theme,
    }), [rtl, theme]);
    if (!isReady) {
        return null;
    }
    return (React.createElement(PaperProvider, { theme: theme },
        React.createElement(SafeAreaProvider, null,
            React.createElement(PreferencesContext.Provider, { value: preferences },
                React.createElement(React.Fragment, null,
                    React.createElement(NavigationContainer, { initialState: initialState, onStateChange: state => AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state)) }, Platform.OS === 'web' ? (React.createElement(App, null)) : (React.createElement(Drawer.Navigator, { drawerContent: () => React.createElement(DrawerContent, null) },
                        React.createElement(Drawer.Screen, { name: "Home", component: App })))))))));
}
