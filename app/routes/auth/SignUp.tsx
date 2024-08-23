import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { Link } from "expo-router";
import AuthProvider from "@/providers/auth.provider";
import tw from "twrnc";

export default function SignUp() {
  const authProvider = AuthProvider();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <SafeAreaView>
      <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`py-4`}>
          <Image source={require("@/assets/images/wordmark.jpg")} />
        </View>
        <Text
          style={tw`text-3xl
          font-semibold
          py-8`}
        >
          Create account
        </Text>
        <TextInput
          style={tw`border-2
          rounded-xl
          w-92
          h-16
          pl-4
          mb-4
          text-xl`}
          placeholder="Username"
          value={username}
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setUsername(text)}
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
          <Link href="/routes/auth/Login" style={tw`text-blue-500`}>
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
            authProvider.handleSignUp(email, password, passwordConfirm)
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
