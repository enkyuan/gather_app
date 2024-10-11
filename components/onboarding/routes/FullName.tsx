// TODO: add full name field to sign-up page

import tw from "twrnc";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

export default function FullName() {
  const [username, setUsername] = useState("");

  return (
    <>
      <View>
        <View style={tw`px-4 py-4`}>
          <Text style={styles.title}>Tell us a bit more about yourself: </Text>
        </View>
        <View style={tw`px-8 gap-8`}>
          <Text style={styles.text}>
            What would you like to go by?  
          </Text>
          <TextInput
            style={styles.textInput}
            maxLength={28}
            placeholder="Pick a Username"
            value={username}
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
      </View>
    </> 
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    justifyContent: "center",
    color: "black", 
  },
  text: {
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    justifyContent: "center",
    color: "black", 
  },
  textInput: {
    fontSize: 20,
    borderRadius: 8,
    fontWeight: "semibold",
    backgroundColor: "#e5e7eb",
    color: "black",
    width: 360,
    height: 60,
    paddingLeft: "8%",
    marginVertical: 8,
  }
});



