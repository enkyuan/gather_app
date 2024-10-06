// TODO: image placeholder for loading issues, etc.
// FIXME: migrate to expo-image for better performance

import tw from "twrnc";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import { Image } from "expo-image";
import SplitButton from "@/components/navigation/SplitButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Auth() {
  return (
    <View style={tw`items-center py-12`}>
      <View style={tw`flex-row gap-2 items-center py-24`}>
        <Image source={require("@/assets/images/wordmark.png")} />
        <Text style={styles.title}>Gather</Text>
      </View>
      <Image source={require("@/assets/images/onboarding/iconspill.png")} />
      <View style={tw`py-36`}>
        <SplitButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontFamily: "Poppins_500Medium",
    fontWeight: "bold",
    textAlign: "center",
  },
});
