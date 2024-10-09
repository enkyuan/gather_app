// TODO: events dashboard (lineup), i.e., app icon, dark/light mode, etc.

import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";

export default function Dash() {
  return (
    <>
      <View>
        <Text style={styles.title}>
        </Text>
      </View>
    </>
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

