import tw from "twrnc";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import useStore from "../hooks/useStore";

export default function SplitButton() {
  const router = useRouter();
  const setIsSignUp = useStore(state => state.setIsSignUp);
  const isSignUp = useStore(state => state.isSignUp);

  return (
    <View style={tw`flex-row justify-center gap-4 py-28`}>
      <Pressable
        style={tw`bg-gray-300 py-6 w-40 h-20 rounded-full`}
        onPress={() => {
            router.navigate("/auth/SignUpOptions")
            setIsSignUp(!isSignUp);

            console.log("isSignUp", isSignUp);
          }
        }
      >
        <Text style={styles.text}>Sign Up</Text>
      </Pressable>
      <Pressable
        style={tw`bg-blue-300 py-6 w-48 h-20 rounded-full`}
        onPress={() => {
            router.navigate("/auth/LoginOptions")
          }
        }
      >
        <Text style={styles.text}>Login</Text>
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
