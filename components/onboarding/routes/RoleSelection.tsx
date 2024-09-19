// TODO: component to retrieve user role, i.e., 'coordinator', 'student', 'other'
// TODO: admin role to access user-specific dashboard
// TODO: other role to access overall dashboard for institute
// TODO: write name to pocketbase under 'role' field

import tw from "twrnc";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";

export default function RoleSelection() {
  return (
    <SafeAreaView>
      <View style={tw`items-center`}>
        <Text style={tw`text-2xl text-center font-bold pb-164`}>Role Selection</Text>
      </View>
    </SafeAreaView>
  );
}
