// TODO: add image placeholder for loading issues, etc. 
// TODO: migrate to expo-image for better performance
// FIXME: migrate to react-native-flatboard for onboarding component (add data.ts file for this)

import tw from "twrnc";
import React from "react";
import { SafeAreaView, Image } from "react-native";
// import { Image } from 'expo-image';
import Onboarding from "react-native-onboarding-swiper";
import { useRouter } from "expo-router";

export default function Intro() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1`}>
      <Onboarding
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("@/assets/images/onboarding/hangout.png")}
              />
            ),
            title: "Gather is the place to be for all your events on campus",
            subtitle: "",
            titleStyles: tw`text-2xl font-semibold text-center`,
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("@/assets/images/onboarding/balloon.png")}
              />
            ),
            title: "Find what floats your boat...",
            subtitle: "",
            titleStyles: tw`text-2xl font-semibold text-center`,
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("@/assets/images/onboarding/dancers.png")}
              />
            ),
            title: "or fits your groove...",
            subtitle: "",
            titleStyles: tw`text-2xl font-semibold text-center`,
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("@/assets/images/onboarding/people.png")}
              />
            ),
            title: "either way, you're bound to have some fun. Enjoy!",
            subtitle: "",
            titleStyles: tw`text-2xl font-semibold text-center`,
          },
        ]}
        onDone={() => router.navigate("/(protected)/")}
        onSkip={() => router.navigate("/(protected)/")}
        bottomBarHighlight={false}
      />
    </SafeAreaView>
  );
}
