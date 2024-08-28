import { View, Text } from "react-native";
import React from "react";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { MotiView } from "moti";
const LoadingIndicator = ({ size }: { size: number }) => {
    return (
        <MotiView
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: size / 10,
                borderColor: "white",
                shadowColor: "white",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1,
                shadowRadius: 10,
            }}
            from={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: 0,
                shadowOpacity: 0.5,
            }}
            animate={{
                width: size + 20,
                height: size + 20,
                borderRadius: (size + 20) / 2,
                borderWidth: size / 10,
                shadowOpacity: 1,
            }}
            transition={{
                type: "timing",
                duration: 1000,
                loop: true,
            }}
        />
    );
};

const Animation8 = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#010100",
            }}
        >
            <LoadingIndicator size={100} />
        </View>
    );
};

export default Animation8;
