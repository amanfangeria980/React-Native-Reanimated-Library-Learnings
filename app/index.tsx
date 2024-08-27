import { View, Text, Button } from "react-native";
import React from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { router } from "expo-router";

const index = () => {
    const width = useSharedValue(100);
    const handlePress = () => {
        width.value = withSpring(width.value + 100);
    };
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Text onPress={() => router.push("Animation1")}>Animation 1</Text>
            <Text onPress={() => router.push("Animation2")}>Animation 2</Text>
        </View>
    );
};

export default index;
