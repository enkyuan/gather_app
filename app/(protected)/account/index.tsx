// TODO: user account page

import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";

export default function Account({ route }) {
  const { bottom } = useSafeAreaInsets();

  return (
      <SafeAreaView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
