import * as React from 'react';
import { StyleProp, Animated, View, ViewStyle } from 'react-native';
import CardContent from './CardContent';
import CardActions from './CardActions';
import { CardCover as _CardCover } from './CardCover';
import { CardTitle as _CardTitle } from './CardTitle';
import Surface from '../Surface';
declare type Props = React.ComponentProps<typeof Surface> & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean;
};
declare type State = {
    elevation: Animated.Value;
};
/**
 * A card is a sheet of material that serves as an entry point to more detailed information.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/card-1.png" />
 *   <img class="medium" src="screenshots/card-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
 *
 * const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
 *     <Card.Content>
 *       <Title>Card title</Title>
 *       <Paragraph>Card content</Paragraph>
 *     </Card.Content>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare class Card extends React.Component<Props, State> {
    static Content: typeof CardContent;
    static Actions: typeof CardActions;
    static Cover: (React.ComponentClass<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & typeof _CardCover) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & typeof _CardCover), {}>) | (React.FunctionComponent<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "source" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "loadingIndicatorSource" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "index" | "total"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & typeof _CardCover) | (React.FunctionComponent<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & typeof _CardCover), {}>);
    static Title: (React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & typeof _CardTitle) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & typeof _CardTitle), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "title" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "left" | "right" | "titleStyle" | "index" | "total" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & typeof _CardTitle) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & typeof _CardTitle), {}>);
    static defaultProps: {
        elevation: number;
    };
    state: {
        elevation: Animated.Value;
    };
    private handlePressIn;
    private handlePressOut;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, any> & typeof Card) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}> & typeof Card), {}>) | (React.FunctionComponent<Pick<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "elevation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, any> & typeof Card) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
} & {
    children?: React.ReactNode;
} & {
    /**
     * Resting elevation of the card which controls the drop shadow.
     */
    elevation?: number | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: (() => void) | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}> & typeof Card), {}>);
export default _default;
