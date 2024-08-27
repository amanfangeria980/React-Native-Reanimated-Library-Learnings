import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";

const Animation5 = () => {
    const pressed = useSharedValue(false);
    const offset = useSharedValue(0);
    const tap = Gesture.Pan()
        .onBegin(() => {
            pressed.value = true;
        })
        .onChange((event) => {
            offset.value = event.translationX;
        })
        .onFinalize(() => {
            offset.value = withSpring(0);
            pressed.value = false;
        });

    const animStyle = useAnimatedStyle(() => ({
        backgroundColor: pressed.value ? "#FFE04B" : "#B58DF1",
        transform: [
            { scale: withTiming(pressed.value ? 1.2 : 1) },
            { translateX: offset.value },
        ],
    }));
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <GestureDetector gesture={tap}>
                    <Animated.View style={[styles.circle, animStyle]} />
                </GestureDetector>
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    circle: {
        height: 120,
        width: 120,
        borderRadius: 500,
    },
});
export default Animation5;
