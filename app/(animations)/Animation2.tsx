import { View, Text, Button } from "react-native";
import React from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

const Animation2 = () => {
    const translateX = useSharedValue<number>(0);

    const handlePress = () => {
        translateX.value += 50;
    };

    const animStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value * 2) }],
    }));
    return (
        <>
            <Animated.View
                style={[
                    animStyles,
                    {
                        width: 100,
                        height: 100,
                        backgroundColor: "violet",
                    },
                ]}
            />
            <View>
                <Button onPress={handlePress} title="Click me" />
            </View>
        </>
    );
};

export default Animation2;
