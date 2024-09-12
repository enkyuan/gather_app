// TODO: adjust styling of text input to match pressables on options page

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
    <SafeAreaView>
      <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`flex-row justify-between items-center gap-4 py-16`}>
          <Image source={require("@/assets/images/wordmark.png")} />
          <Text style={styles.title}>Create account</Text>
        </View>

        <TextInput
          style={tw`border-2
          rounded-xl
          w-92
          h-16
          pl-4
          mb-4
          text-xl`}
          placeholder="Username"
          value={alias}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setAlias(text)}
        />
        <TextInput
          style={tw`border-2
          rounded-xl
          w-92
          h-16
          pl-4
          mb-4
          text-xl`}
          placeholder="Email"
          value={email}
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
          text-xl`}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={tw`border-2
          rounded-xl
          w-92
          h-16
          pl-4
          mb-4
          text-xl`}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={passwordConfirm}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPasswordConfirm(text)}
        />
        <Text style={tw`text-xl mb-42 font-semibold`}>
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
});
