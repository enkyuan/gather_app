// TODO: facebook & apple oauth

import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useRouter, Link, Stack } from "expo-router";
import { Envelope, CaretLeft } from "phosphor-react-native";
import GoogleAuthProvider from "@/providers/auth/google.provider";
import FacebookAuthProvider from "@/providers/auth/facebook.provider";
import AppleAuthProvider from "@/providers/auth/apple.provider";
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

export default function Options() {
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
        <View style={tw`py-32`}>
        <View style={styles.header}>
            <Pressable
                onPress={() => router.dismissAll()}
            >
                <CaretLeft size={32} color="black" style={styles.caretLeft} />
            </Pressable>            
            <Text style={styles.title}>Continue with</Text>
        </View>
        <View style={tw`flex flex-col justify-center items-center`}> 
            <Pressable
            style={styles.pressable}
            onPress={() => router.navigate("/(auth)/login/")}
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
                href="/(auth)/SignUpOptions">
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
    textAlign: "start",
    justifyContent: "center",
    color: "black",
  },
  header: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
    marginVertical: 20,
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
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  caretLeft: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 44,
  },
});
