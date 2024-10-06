// TODO: user notification preferences

import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";

export default function Notifications() {
  return (
    <View>
      <Text style={styles.title}>Notifications</Text>
    </View>
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
