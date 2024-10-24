// TODO: facebook & apple oauth
// FIXME: styling for auth buttons (height needs to be consistent)

import { Theme } from '@/constants/Theme';

import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, Link, Stack } from "expo-router";
import { Envelope, CaretLeft } from "phosphor-react-native";
import tw from "twrnc";

import GoogleAuthProvider from "@/providers/auth/google.provider";
import FacebookAuthProvider from "@/providers/auth/facebook.provider";
import AppleAuthProvider from "@/providers/auth/apple.provider";

export default function LoginOptions() {
  const router = useRouter();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Continue with</Text>
        <View style={tw`flex flex-col justify-center items-center`}> 
          <Pressable
            style={styles.pressable}
            onPress={() => router.navigate("/login")}
          >
            <Envelope size={32} color="black" style={styles.icon} />
            <Text style={styles.text}>Email</Text>
          </Pressable>
          <GoogleAuthProvider />
          <FacebookAuthProvider />
          <AppleAuthProvider />
          <View style={tw`py-2`}>
          <Text style={tw`text-xl font-semibold`}>
              Need an account?{" "}
              <Link
              style={tw`text-blue-500`}
              href="/signup_options/">
              Sign up
              </Link>
          </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingVertical: "12%",
  },  
  title: {
    fontSize: 24,
    fontFamily: Theme.fonts.medium,
    textAlign: "center",
    justifyContent: "center",
    marginVertical: "4%",
    lineHeight: 32,
    color: "black",
  },
  text: {
    fontSize: 24,
    fontFamily: Theme.fonts.semibold,
    color: "black",
  },
  pressable: {
    backgroundColor: Theme.background.white,
    marginVertical: 8,
    width: "92%",
    height: "18%",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
  }
});
