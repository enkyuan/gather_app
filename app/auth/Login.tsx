// TODO: adjust styling of text input to match pressables on options page
// TODO: add checkbox for terms of service
// TODO: use setUsername hook for alt auth method

import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import tw from "twrnc";
import { Link } from "expo-router";
import EmailAuthProvider from "@/providers/auth/email.provider";

export default function Login() {
  const emailAuthProvider = EmailAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <SafeAreaView>
      <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`flex-row justify-center items-center gap-4 py-14`}>
          <Text style={styles.title}>Welcome back</Text>
        </View>
        <TextInput
          style={styles.textInput}
          maxLength={28}
          placeholder="Username or Email"
          value={email || username}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          maxLength={12}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={tw`text-xl mb-80 font-semibold`}>
          New?
          <Link href={"/auth/SignUp"} style={tw`text-blue-500`}>
            {" "}
            Register{" "}
          </Link>
        </Text>
        <Pressable
          style={tw`bg-blue-300
            w-92
            h-20
            justify-center
            items-center
            rounded-full`}
          onPress={() => emailAuthProvider.handleSignIn(email, password)}
        >
          <Text style={styles.text}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
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
