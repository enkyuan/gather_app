import tw from "twrnc";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SplitButton from "@/components/SplitButton";

export default function Auth() {
  return (
    <View style={tw`flex-1 bg-white items-center`}>
      <View style={tw`flex-row gap-4 items-center py-20`}>
        <Image source={require("@/assets/images/wordmark.png")} />
        <Text style={styles.title}>Gather</Text>
      </View>
      <Image source={require("@/assets/images/iconspill.jpg")} />
      <SplitButton />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
});
