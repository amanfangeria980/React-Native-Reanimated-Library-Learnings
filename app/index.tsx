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
        <View style={{ flex: 1, alignItems: "center", gap: 10 }}>
            <Text onPress={() => router.push("Animation1")}>Animation 1</Text>
            <Text onPress={() => router.push("Animation2")}>Animation 2</Text>
            <Text onPress={() => router.push("Animation3")}>Animation 3</Text>
            <Text onPress={() => router.push("Animation4")}>Animation 4</Text>
            <Text onPress={() => router.push("Animation5")}>Animation 5</Text>
            <Text onPress={() => router.push("Animation6")}>Animation 6</Text>
            <Text onPress={() => router.push("Animation7")}>Animation 7</Text>
            <Text onPress={() => router.push("Animation8")}>
                Animation 8 - Custom Loader
            </Text>
            <Text onPress={() => router.push("Animation9")}>
                Animation 9 - Custom Switch
            </Text>
        </View>
    );
};

export default index;
