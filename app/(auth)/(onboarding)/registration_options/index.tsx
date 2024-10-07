// TODO: add 3rd-party auth options

import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useRouter, Link } from "expo-router";
import { Envelope, CaretLeft } from "phosphor-react-native";
import GoogleAuthProvider from "@/providers/auth/google.provider";
import useSignUp from "@/hooks/useSignUp";

const Options = (selection: string) => {
  const router = useRouter();
  const setIsSignUp = useSignUp((state) => state.setIsSignUp);
  const isSignUp = useSignUp((state) => state.isSignUp);

  return (
    <View style={tw`py-28`}>
      <View style={styles.header}>
          <Pressable
            onPress={() => {
                router.dismissAll()
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
          onPress={() => router.navigate("/(auth)/register/")}
        >
          <Envelope size={32} color="black" style={styles.icon} />
          <Text style={styles.text}>Email</Text>
        </Pressable>
        <GoogleAuthProvider />
        <View style={tw`py-2`}>
          <Text style={tw`text-xl font-semibold`}>
            Already have an account?{" "}
            <Link
              href="/(auth)/(onboarding)/LoginOptions"
              style={tw`text-blue-500`}>              
              Log in
            </Link>
          </Text>
        </View>
        <Text style={tw``}>
          
        </Text>
      </View>
    </View>
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
    marginVertical: 40,
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
