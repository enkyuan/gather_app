// TODO: integrations page, i.e., apple & google calendar

import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";

export default function Integrations() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Integrations</Text>
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
