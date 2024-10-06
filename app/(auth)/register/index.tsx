// TODO: adjust styling of text input to match pressables on options pag
// TODO: add checkbox for terms of service
// FIXME: remove alias field & move to onboarding process
// FIXME: replace TOS url with actual terms

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
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function SignUp() {
    const emailAuthProvider = EmailAuthProvider();
 
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
                textContentType="oneTimeCode"
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
                textContentType="oneTimeCode"
                value={passwordConfirm}
                placeholderTextColor="gray"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => setPasswordConfirm(text)}
            />
            <Text style={tw`text-xl mb-60 font-semibold`}>
                Have an account?
                <Link href="/(auth)/login/" style={tw`text-blue-500`}>
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
                emailAuthProvider.handleSignUp(email, password, passwordConfirm)
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
  },
  text: {
    fontSize: 14,
    fontWeight: "semibold",
    color: "black",
    textAlign: "center",
    paddingVertical: 2,
  }
});
