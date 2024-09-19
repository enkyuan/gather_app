// TODO: component to retrieve user name
// TODO: write name val to pocketbase under 'alias' field

import tw from "twrnc";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";

export default function EnterFullName() {
  return (
    <SafeAreaView>
      <View style={tw`items-center`}>
        <Text style={tw`text-2xl text-center font-bold pb-164`}>Name Selection</Text>
      </View>
    </SafeAreaView>
  );
}
