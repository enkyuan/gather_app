import tw from "twrnc";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplitButton() {
  const router = useRouter();

  return (
    <View style={tw`flex-row justify-center gap-4 py-28`}>
      <Pressable
        style={tw`bg-gray-300 py-6 w-40 h-20 rounded-full`}
        onPress={() => router.navigate("/routes/auth/SignUp")}
      >
        <Text style={styles.text}>Sign Up</Text>
      </Pressable>
      <Pressable
        style={tw`bg-blue-300 py-6 w-48 h-20 rounded-full`}
        onPress={() => router.navigate("/routes/auth/Login")}
      >
        <Text style={styles.text}>Log In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    color: "white",
  },
});
