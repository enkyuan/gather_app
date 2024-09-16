// TODO: add 3rd-party auth options

import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useRouter } from "expo-router";
import { Envelope, CaretLeft } from "phosphor-react-native";
import GoogleAuthProvider from "@/providers/auth/google.provider";
import useStore from "../../hooks/useStore";
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

const Options = (selection: string) => {
  const router = useRouter();
  const setIsSignUp = useStore((state) => state.setIsSignUp);
  const isSignUp = useStore((state) => state.isSignUp);

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
          <Pressable
            onPress={() => {
                router.navigate("/auth")
                setIsSignUp(!isSignUp);

                console.log("isSignUp", isSignUp);
              }
            } 
          >
            <CaretLeft size={32} color="black" style={styles.caretLeft} />
          </Pressable>            
          <Text style={styles.title}>Let's get started</Text>
      </View>
      <View style={tw`flex flex-col justify-center items-center`}>
        <Pressable
          style={styles.pressable}
          onPress={() => router.navigate("/auth/SignUp")}
        >
          <Envelope size={32} color="black" style={styles.icon} />
          <Text style={styles.text}>Email</Text>
        </Pressable>
        <GoogleAuthProvider /> 
        <Text style={tw`text-xl font-semibold`}>
          Already have an account?{" "}
          <Text
            style={tw`text-blue-500`}
            onPress={() => router.navigate("/auth/LoginOptions")}>
            Log in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
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
    marginHorizontal: 38,
  },
});

export default Options;
