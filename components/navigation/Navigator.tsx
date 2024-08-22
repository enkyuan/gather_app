import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreens from "../onboarding/index";
import Events from "@/app/routes/events/Events";

export default function Navigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="OnboardingScreens">
        <Stack.Screen
          name="Events"
          options={{ headerShown: false }}
          component={Events}
        />
        <Stack.Screen
          name="OnboardingScreens"
          options={{ headerShown: false }}
          component={OnboardingScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
