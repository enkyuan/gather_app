// TODO: route login/signup screen to here & add 3rd-party auth options

import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useRouter } from "expo-router";
import { Envelope, CaretLeft } from "phosphor-react-native";

export default function Options() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`flex-row justify-center items-center my-8`}>
          <Text style={styles.title}>Continue with</Text>
        </View>
        <Pressable
          style={styles.pressable}
          onPress={() => router.navigate("/auth/Login")}
        >
          <Envelope size={32} color="black" style={styles.icon} />
          <Text style={styles.text}>Email</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Image
            source={require("../../assets/images/facebook-icon.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>Facebook</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Image
            source={require("../../assets/images/google-icon.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>Google</Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Image
            source={require("../../assets/images/apple-icon.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>Apple</Text>
        </Pressable>
        <Pressable
          style={tw`flex-row bg-blue-300 py-6 w-11/12 h-20 rounded-full my-20`}
          onPress={() => router.navigate("/auth")}
        >
          <CaretLeft size={32} color="white" style={styles.caretLeft} />
          <Text style={tw`text-white text-2xl font-semibold`}>Return</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
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
    height: 100,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
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
    marginHorizontal: 56,
  },
});
