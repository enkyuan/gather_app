import tw from "twrnc";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function SplitButton() {
    const router = useRouter();

    return (
    <View style={tw`flex-row justify-center pt-192`}>
        <TouchableOpacity style={tw`bg-gray-300 py-6 w-40 h-20 rounded-full`} onPress={() => router.navigate("/routes/auth/SignUp")}>
            <Text style={tw`text-white text-xl text-center font-semibold`}>Sign Up</Text>
        </TouchableOpacity>
        <View style={tw`w-2`} />
        <TouchableOpacity style={tw`bg-blue-300 py-6 w-60 h-20 rounded-full`} onPress={() => router.navigate("/routes/auth/Login")}>
            <Text style={tw`text-white text-xl text-center font-semibold`}>Log In</Text>
        </TouchableOpacity>
    </View>
    );
}