// TODO: user feedback page

import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";

export default function Feedback() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Feedback</Text>
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