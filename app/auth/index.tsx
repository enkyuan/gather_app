// TODO: image placeholder for loading issues, etc.
// FIXME: migrate to expo-image for better performance

import tw from "twrnc";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import { Image } from "expo-image";
import SplitButton from "@/components/SplitButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Auth() {
  return (
    <SafeAreaView>
      <View style={tw`items-center bg-white`}>
        <View style={tw`flex-row gap-2 items-center py-22`}>
          <Image source={require("@/assets/images/wordmark.png")} />
          <Text style={styles.title}>Gather</Text>
        </View>
        <Image source={require("@/assets/images/iconspill.jpg")} />
        <View style={tw`py-26`}>
          <SplitButton />
        </View>
      </View>
    </SafeAreaView>
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
