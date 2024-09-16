import tw from "twrnc";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SplitButton from "@/components/SplitButton";
import { SafeAreaView } from "react-native-safe-area-context";
import {  useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function Auth() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-white items-center`}>
      <View style={tw`flex-row gap-2 items-center pt-4 pb-16`}>
        <Image source={require("@/assets/images/wordmark.png")} />
        <Text style={styles.title}>Gather</Text>
      </View>
      <Image source={require("@/assets/images/iconspill.jpg")} />
      <View style={tw`py-34`}>
        <SplitButton />
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
