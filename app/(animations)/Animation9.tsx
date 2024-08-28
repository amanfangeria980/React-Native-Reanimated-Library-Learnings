// import { View, Text, TouchableOpacity } from "react-native";
// import React, { useMemo, useState } from "react";
// import "react-native-reanimated";
// import "react-native-gesture-handler";
// import { MotiView } from "moti";
// import { Easing } from "react-native-reanimated";
// const SwitchButton = ({ size, onPress, isActive }) => {
//     const trackSize = useMemo(() => {
//         return size * 1.5;
//     }, [size]);
//     const trackHeight = useMemo(() => {
//         return size * 0.4;
//     }, [size]);
//     const knobSize = useMemo(() => {
//         return size * 0.6;
//     }, [size]);
//     return (
//         <TouchableOpacity onPress={onPress}>
//             <View style={{ alignItems: "center", justifyContent: "center" }}>
//                 {/* track */}
//                 <MotiView
//                     from={{
//                         backgroundColor: isActive ? "orange" : "black",
//                     }}
//                     animate={{
//                         backgroundColor: isActive ? "orange" : "black",
//                     }}
//                     transition={{
//                         type: "timing",
//                         duration: 300,
//                         easing: Easing.inOut(Easing.ease),
//                     }}
//                     style={{
//                         position: "absolute",
//                         width: trackSize,
//                         height: trackHeight,
//                         borderRadius: trackHeight / 2,
//                         backgroundColor: "black",
//                     }}
//                 />

//                 {/* knob container */}
//                 <MotiView
//                     animate={{
//                         translateX: isActive ? trackSize / 4 : -trackSize / 4,
//                     }}
//                     transition={{
//                         type: "timing",
//                         duration: 300,
//                         easing: Easing.inOut(Easing.ease),
//                     }}
//                     style={{
//                         width: size,
//                         height: size,
//                         borderRadius: size / 2,
//                         backgroundColor: "#fff",
//                         alignItems: "center",
//                         justifyContent: "center",
//                     }}
//                 >
//                     {/* knob */}
//                     <MotiView
//                         style={{
//                             width: knobSize,
//                             height: knobSize,
//                             borderRadius: knobSize / 2,
//                             borderWidth: size * 0.1,
//                             borderColor: "black",
//                         }}
//                         animate={{
//                             width: isActive ? 0 : knobSize,
//                             borderColor: isActive ? "orange" : "black",
//                         }}
//                         transition={{
//                             type: "timing",
//                             duration: 300,
//                             easing: Easing.inOut(Easing.ease),
//                         }}
//                     />
//                 </MotiView>
//             </View>
//         </TouchableOpacity>
//     );
// };

// const Animation9 = () => {
//     const [isActive, setIsActive] = useState(false);
//     return (
//         <View
//             style={{
//                 flex: 1,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 backgroundColor: "#f3f3f4",
//             }}
//         >
//             <SwitchButton
//                 size={100}
//                 onPress={() => setIsActive(!isActive)}
//                 isActive={isActive}
//             />
//         </View>
//     );
// };

// export default Animation9;

import React from "react";
import { View, TouchableOpacity } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from "react-native-reanimated";

const SwitchButton = ({ size }) => {
    const isActive = useSharedValue(0);

    const trackSize = size * 1.5;
    const trackHeight = size * 0.4;
    const knobSize = size * 0.6;

    const trackAnimatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: withTiming(isActive.value ? "orange" : "black", {
                duration: 300,
                easing: Easing.inOut(Easing.ease),
            }),
        };
    });

    const knobAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withTiming(
                        isActive.value ? trackSize / 4 : -trackSize / 4,
                        {
                            duration: 300,
                            easing: Easing.inOut(Easing.ease),
                        }
                    ),
                },
            ],
        };
    });

    const knobInnerStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(isActive.value ? 0 : knobSize, {
                duration: 300,
                easing: Easing.inOut(Easing.ease),
            }),
            borderColor: withTiming(isActive.value ? "orange" : "black", {
                duration: 300,
                easing: Easing.inOut(Easing.ease),
            }),
        };
    });

    const handlePress = () => {
        isActive.value = isActive.value === 0 ? 1 : 0;
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                {/* track */}
                <Animated.View
                    style={[
                        {
                            position: "absolute",
                            width: trackSize,
                            height: trackHeight,
                            borderRadius: trackHeight / 2,
                            backgroundColor: "black",
                        },
                        trackAnimatedStyle,
                    ]}
                />

                {/* knob container */}
                <Animated.View
                    style={[
                        {
                            width: size,
                            height: size,
                            borderRadius: size / 2,
                            backgroundColor: "#fff",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                        knobAnimatedStyle,
                    ]}
                >
                    {/* knob */}
                    <Animated.View
                        style={[
                            {
                                height: knobSize,
                                borderRadius: knobSize / 2,
                                borderWidth: size * 0.1,
                            },
                            knobInnerStyle,
                        ]}
                    />
                </Animated.View>
            </View>
        </TouchableOpacity>
    );
};

const Animation9 = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f3f3f4",
            }}
        >
            <SwitchButton size={100} />
        </View>
    );
};

export default Animation9;
