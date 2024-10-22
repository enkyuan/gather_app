// TODO: facebook & apple oauth

import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, Link, Stack } from "expo-router";
import { Envelope, CaretLeft } from "phosphor-react-native";
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import Theme from '@/constants/Theme'
import tw from "twrnc";

import GoogleAuthProvider from "@/providers/auth/google.provider";
import FacebookAuthProvider from "@/providers/auth/facebook.provider";
import AppleAuthProvider from "@/providers/auth/apple.provider";

export default function LoginOptions() {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={tw`py-8`}>
        <View style={tw`my-8`}>
          <Text style={styles.title}>Continue with</Text>
        </View>
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
  title: {
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    justifyContent: "center",
    color: "black",
  },
  text: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    color: "black",
  },
  pressable: {
    backgroundColor: "white",
    marginVertical: 8,
    width: "92%",
    height: 88,
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
