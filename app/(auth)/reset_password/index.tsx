import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import EmailAuthProvider from "@/providers/auth/email.provider";
import tw from "twrnc";

export default function SignUp() {
  const emailAuthProvider = EmailAuthProvider();

  const [email, setEmail] = useState("");

  return (
    <View style={tw`flex flex-col justify-center items-center py-16`}>
      <View style={tw`flex-col justify-between items-center gap-4 py-16`}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.text}>
          Enter your email and we'll send you a link to reset your password
        </Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        placeholderTextColor="gray"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={tw`text-xl mb-78 font-semibold`}>
        <Link href="/(auth)/" style={tw`text-blue-500`}>
          {" "}
          Take me home{" "}
        </Link>
      </Text>
      <Pressable
        style={tw`bg-blue-300
        w-92
        h-20
        justify-center
        items-center
        rounded-full`}
        onPress={() =>
          emailAuthProvider.forgotPassword(email)
        }
      >
        <Text style={tw`text-white text-center text-2xl font-bold`}>
          Reset password
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    color: "black",
  },
  text: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    color: "black",
    textAlign: "start",
    paddingHorizontal: 16,
  },
  textInput: {
    fontSize: 20,
    borderRadius: 8,
    fontWeight: "semibold",
    backgroundColor: "#e5e7eb",
    color: "black",
    width: "94%",
    height: "10%",
    paddingLeft: "8%",
    marginVertical: 12,
  }
});
