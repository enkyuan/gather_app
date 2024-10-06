// TODO: add onboarding component(s)
// FIXME: issue with rendering component for OnboardingProcess

import tw from "twrnc";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { OnboardingForms } from "@/components/onboarding/OnboardingForms"; 

export default function Orientation() {
    return (
      <SafeAreaView>
        <View>
            <OnboardingProcess />
        </View>
      </SafeAreaView>
    );
}
