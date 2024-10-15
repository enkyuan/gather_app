// FIXME: this page is fucking cursed

import tw from "twrnc";
import React, { useState } from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet } from "react-native";
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import data from '@/components/onboarding/data.ts';
import { SelectList } from 'react-native-custom-select';

export default function RoleSelection() { 
  const [selectedValue, setSelectedValue] = useState('');
  
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  const handleChange = value => {
    setSelectedValue(value);
  };

  return (
    <>
      <SafeAreaView>
        <Text style={styles.title}>
          What do you plan on using Gather for?
        </Text>
        <Text style={styles.text}>
          Select your role from the options below:
        </Text>
        <SelectList
          data={data}
          value={selectedValue}
          onChange={handleChange}
          placeholder="Select an option"
          borderColor="#444"
        />
      </SafeAreaView>
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
});




