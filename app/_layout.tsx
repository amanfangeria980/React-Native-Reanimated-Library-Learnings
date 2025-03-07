import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="(animations)" />
        </Stack>
    );
};

export default _layout;
