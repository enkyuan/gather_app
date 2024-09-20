// TODO: render events from pb on this route

import tw from "twrnc";
import React from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import EmailAuthProvider from "@/providers/auth/email.provider";

export default function Events() {
  const emailAuthProvider = EmailAuthProvider();

  return (
    <SafeAreaView>
      <View style={tw`items-center`}>
        <Text style={tw`text-2xl text-center font-bold pb-164`}>Events</Text>
        <View style={tw`flex-row items-center`}>
          <Pressable
            style={tw`bg-red-500 w-92 h-20 rounded-full pt-6`}
            onPress={() => emailAuthProvider.handleSignOut()}
          >
            <Text style={tw`text-white text-2xl text-center font-semibold`}>
              Sign Out
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
