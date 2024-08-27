import { View, Button } from "react-native";
import React from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const Animation1 = () => {
    const width = useSharedValue(100);
    const handlePress = () => {
        width.value = withSpring(width.value + 100);
    };
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Animated.View
                style={{
                    width,
                    height: 100,
                    backgroundColor: "violet",
                }}
            />
            <Button onPress={handlePress} title="Click me" />
        </View>
    );
};

export default Animation1;
