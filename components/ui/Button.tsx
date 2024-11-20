import { Theme } from "@/constants/Theme";

import tw from "twrnc";
import React from "react";
import { SafeAreaView, View, ViewStyle, TextStyle, Text, Pressable, StyleSheet } from "react-native";

interface ButtonProps {
  viewStyles?: ViewStyle;
  textStyles?: TextStyle;
  text: string;
  onPress: () => void;
}

export default function Button({ text, onPress, viewStyles, textStyles }: ButtonProps) {
  return (
    <Pressable
      style={[styles.btn, viewStyles]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </Pressable> 
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
  },
  text: {
    fontSize: 24,
    fontFamily: Theme.fonts.semibold,
    textAlign: "center",
    color: Theme.background.white,
  },
});
