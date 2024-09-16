import tw from "twrnc";
import React from "react";
import { View, Image, SafeAreaView } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useRouter } from "expo-router";

export default function Intro() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Onboarding
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                source={require("../../assets/images/onboarding/hangout.png")}
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
                source={require("../../assets/images/onboarding/balloon.png")}
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
                source={require("../../assets/images/onboarding/dancers.png")}
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
                source={require("../../assets/images/onboarding/people.png")}
              />
            ),
            title: "either way, you're bound to have some fun. Enjoy!",
            subtitle: "",
            titleStyles: tw`text-2xl font-semibold text-center`,
          },
        ]}
        onDone={() => router.navigate("/events/")}
        onSkip={() => router.navigate("/events/")}
        bottomBarHighlight={false}
      />
    </SafeAreaView>
  );
}
