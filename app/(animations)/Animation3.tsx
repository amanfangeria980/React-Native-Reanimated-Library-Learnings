import { View, Text, Button } from "react-native";
import React from "react";
import { Circle, Svg } from "react-native-svg";
import Animated, {
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const Animation3 = () => {
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const r = useSharedValue(10);
    const handlePress = () => {
        r.value += 10;
    };

    const animatedProps = useAnimatedProps(() => ({
        r: withTiming(r.value),
    }));

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Svg style={{ height: 400, width: 400 }}>
                <AnimatedCircle
                    cx="50%"
                    cy="50%"
                    fill="#b58df1"
                    animatedProps={animatedProps}
                />
            </Svg>
            <Button onPress={handlePress} title="Click me" />
        </View>
    );
};

export default Animation3;
