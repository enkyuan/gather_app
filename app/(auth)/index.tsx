// TODO: image placeholder for loading issues, etc.
// FIXME: migrate to expo-image for better performance
// FIXME: replace png assets with jpeg counterparts

import { Theme } from "@/constants/Theme";

import tw from "twrnc";
import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/components/ui/Button";
import useSignUp from "@/hooks/useSignUp";

export default function Auth() {
  const router = useRouter();
  const setIsSignUp = useSignUp(state => state.setIsSignUp);
  const isSignUp = useSignUp(state => state.isSignUp); 

  return (
    <>
      <SafeAreaView style={tw`flex-1`}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Image source={require("@/assets/icons/main/icon.png")} style={styles.icon} />
            <Text style={styles.title}>Gather</Text>
          </View>
          <Image source={require("@/assets/images/onboarding/iconspill.png")} style={styles.image} />
          <View style={styles.footer}>
            <Button
              text="Sign Up"
              viewStyles={styles.signup}
              textStyles={styles.text}
              onPress={() => { 
                router.push("/signup_options/")
                setIsSignUp(!isSignUp);
              }}
            />
            <Button
              text="Login"
              viewStyles={styles.login}
              textStyles={styles.text}
              onPress={() => router.push("/login_options/")}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: "8%",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "12%",
    gap: 2,
  },
  title: {
    fontSize: 32,
    fontFamily: Theme.fonts.medium,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    lineHeight: 44,
    color: "white",
  },
  icon: {
    width: 48,
    height: 48,
  },
  image: {
    marginVertical: "16%",  
  },
  signup: {
    backgroundColor: Theme.secondary.lightGray,
    width: "52%",
    height: "46%",
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  login: {
    backgroundColor: Theme.primary.blue,
    width: "40%",
    height: "46%",
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: "row",
    marginVertical: "16%",
    gap: 8
  }
});
