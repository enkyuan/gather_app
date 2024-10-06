// TODO: find a use for this file
// TODO: authenticated routes that redirects to protected routes (already mentioned elsewhere)

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Intro from "@/app/(auth)/(onboarding)/Intro";
import Timeline from "@/app/(protected)/";
import SignUp from "@/app/(auth)/SignUp";
import Auth from "@/app/(auth)/";
import Login from "@/app/(auth)/Login";

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Group screenOptions={{ 
        backgroundColor: '#fffff',
        headerShown: false
      }}>
      <Stack.Screen
        name="Auth"
        component={Auth}
      />
      <Stack.Screen
        name="SignIn"
        component={Login}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name="Intro"
        component={Intro}
      />
      <Stack.Screen
        name="Timeline"
        component={Timeline}
      />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Navigator;
