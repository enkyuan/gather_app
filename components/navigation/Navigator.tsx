import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Events from "@/app/routes/events";
import OnboardingScreens from "../onboarding/index";

export default function Navigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreens">
        <Stack.Screen
          name="Events"
          options={{ headerShown: false }}
          component={Events}
        />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingScreens"
          options={{ headerShown: false }}
          component={OnboardingScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
