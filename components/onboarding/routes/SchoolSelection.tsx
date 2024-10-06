// TODO: implement component to retrieve school user attends
// TODO: write name to pocketbase under 'institution' field
// TODO: add school parameter to zustand store & write to pb

import tw from "twrnc";
import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SelectList } from "react-native-dropdown-select-list";
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

export default function SchoolSelection() {
  const [selectedSchool, setSelected] = useState("");
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const schools = [
    { key: "1", value: "UTDallas" },
    { key: "2", value: "UNT" },  
  ];

  return (
    <SafeAreaView>
        <View style={tw`items-center`}>
            <View style={tw`flex-col justify-between items-center gap-4 py-16`}>
                <Text style={styles.title}>
                    Select your school from the options below so we you never miss a beat.
                </Text>
                <Text style={styles.text}>
                    If your school is not listed, let us know via 
                    <Link href="mailto:gather.connect.mobile@gmail.com" style={tw`text-blue-500`}>
                    {" "}
                    email{" "}
                    </Link>
                </Text>
            </View> 
        <SelectList
          data={schools}
          search="false"
          save="value"
          placeholder="College/University"
          setSelected={() => setSelected(val)}
        />
        <Pressable
          style={tw`bg-blue-300
            w-92
            h-20
            justify-center
            items-center
            rounded-full`}
          onPress={() => router.navigate("/events")}
        >
            <Text style={styles.text}>Continue</Text>
        </Pressable>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold", 
  },
});
