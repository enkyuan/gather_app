import tw from "twrnc";
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import AuthProvider from "@/providers/auth.provider";

export default function Events() {
  const router = useRouter();
  const authProvider = AuthProvider();

  return (
    <SafeAreaView>
      <View style={tw`items-center`}>
        <Text style={tw`text-2xl text-center font-bold pb-184`}>Events</Text>
        <View style={tw`flex-row items-center`}>
          <TouchableOpacity
            style={tw`bg-red-500 w-100 h-20 rounded-full pt-6`}
            onPress={() => authProvider.handleSignOut()}
          >
            <Text style={tw`text-white text-2xl text-center font-semibold`}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
