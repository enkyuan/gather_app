// TODO: adjust styling of text input to match pressables on options page
// TODO: add checkbox for terms of service

import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import EmailAuthProvider from "@/providers/auth/email.provider";
import tw from "twrnc";

export default function SignUp() {
  const emailAuthProvider = EmailAuthProvider();

  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <View style={tw`flex flex-col justify-center items-center py-16`}>
      <View style={tw`flex-row justify-between items-center gap-4 py-16`}>
        <Text style={styles.title}>Create account</Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={alias}
        placeholderTextColor="gray"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setAlias(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        placeholderTextColor="gray"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
        textContentType="none"
        value={password}
        placeholderTextColor="gray"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        secureTextEntry={true}
        textContentType="none"
        value={passwordConfirm}
        placeholderTextColor="gray"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setPasswordConfirm(text)}
      />
      <Text style={tw`text-xl mb-34 font-semibold`}>
        Have an account?
        <Link href="/auth/Login" style={tw`text-blue-500`}>
          {" "}
          Login{" "}
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
          emailAuthProvider.handleSignUp(alias, email, password, passwordConfirm)
        }
      >
        <Text style={tw`text-white text-center text-2xl font-bold`}>
          Continue
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
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
    marginVertical: 8,
  }
});
