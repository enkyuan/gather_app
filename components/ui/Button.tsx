import { Theme } from "@/constants/Theme";

import tw from "twrnc";
import React from "react";
import { SafeAreaView, View, ViewStyle, Text, Pressable, StyleSheet } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  margin: ViewStyle["margin"];
}

export default function Button({ text, onPress, margin }: ButtonProps) {
  return (
    <Pressable
      style={[styles.btn, { margin }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable> 
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Theme.primary.blue,
    width: "92%",
    height: "14%",
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
