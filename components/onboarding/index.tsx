// TODO: Fix onboarding swiper package issue

import tw from "twrnc";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingScreens() {
  return (
    <SafeAreaView>
      <View style={tw`flex-1 bg-white`}>
        <Onboarding
          pages={[
            {
              backgroundColor: "#fff",
              image: (
                <View>
                  <Text>Image</Text>
                </View>
              ),
              title: "Onboarding",
              subtitle: "Done with React Native Onboarding Swiper",
            },
            {
              backgroundColor: "#fff",
              image: (
                <View>
                  <Text>Image</Text>
                </View>
              ),
              title: "Onboarding",
              subtitle: "Done with React Native Onboarding Swiper",
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}
