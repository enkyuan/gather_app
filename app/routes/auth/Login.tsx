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
import AuthProvider from "@/providers/auth.provider";
import { Image } from "react-native";

export default function Login() {
  const authProvider = AuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <SafeAreaView>
      <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`flex-row justify-center items-center gap-4 py-20`}>
          <Image source={require("@/assets/images/wordmark.jpg")} />
          <Text style={styles.title}>Welcome back</Text>
        </View>
        <TextInput
          style={tw`border-2
          rounded-xl
          w-92
          h-16
          pl-4
          mb-4
          text-xl
          `}
          maxLength={28}
          placeholder="Username or Email"
          value={email || username}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={tw`border-2
          rounded-xl
          w-92
          h-16
          pl-4
          mb-4
          text-xl
          align-middle`}
          maxLength={12}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={tw`text-xl mb-74 font-semibold`}>
          New?
          <Link href={"/routes/auth/SignUp"} style={tw`text-blue-500`}>
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
          onPress={() => authProvider.handleSignIn(email, password)}
        >
          <Text style={styles.text}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
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
});
