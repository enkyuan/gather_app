// TODO: add 3rd-party auth options
// TODO: move left caret to left side of text

import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useRouter } from "expo-router";
import { Envelope, CaretLeft } from "phosphor-react-native";
import GoogleAuthProvider from "@/providers/auth/google.provider";
import FacebookAuthProvider from "@/providers/auth/facebook.provider";
import AppleAuthProvider from "@/providers/auth/apple.provider";

export default function Options() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.header}>
          <Pressable
            onPress={() => router.navigate("/auth")}
          >
            <CaretLeft size={32} color="black" style={styles.caretLeft} />
          </Pressable>            
          <Text style={styles.title}>Continue with</Text>
      </View>
      <View style={tw`flex flex-col justify-center items-center`}> 
        <Pressable
          style={styles.pressable}
          onPress={() => router.navigate("/auth/Login")}
        >
          <Envelope size={32} color="black" style={styles.icon} />
          <Text style={styles.text}>Email</Text>
        </Pressable>
        <GoogleAuthProvider />
        <FacebookAuthProvider />
        <AppleAuthProvider />
        <Text style={tw`text-lg font-semibold`}>
          Need an account?{" "}
          <Text
            style={tw`text-blue-500`}
            onPress={() => router.navigate("/auth/SignUpOptions")}>
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
    fontWeight: "bold",
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
