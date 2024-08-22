import React from "react";
import { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Pressable } from "react-native";
import tw from "twrnc";
import { Link } from "expo-router";
import AuthProvider from "@/providers/auth.provider";

export default function Login() {
  const authProvider = AuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <View style={tw`flex flex-col justify-center items-center`}>
        <Text
          style={tw`text-4xl
          font-bold
          pt-20
          pb-40`}
        >
          Sign In
        </Text>
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
          placeholder="Email"
          value={email}
          placeholderTextColor="gray"
          autoCapitalize="none"
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
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={tw`text-xl mb-76 font-semibold`}>
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
          <Text style={tw`text-white text-center text-2xl font-bold`}>
            Continue
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
