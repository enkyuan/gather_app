// TODO: notification preferences page, i.e., app icon, dark/light mode, etc.

import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";

export default function Notifications() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Messages</Text>
      </View>
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
