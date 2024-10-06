// TODO: find a use for this file
// TODO: authenticated routes that redirects to protected routes (already mentioned elsewhere)
// FIXME: header must be shown for some of the screens in the app to handle stack pop
// FIXME: add custom back button to handle stack dismiss (pop route)

import React from "react";
import { useRouter } from "expo-router";
import { HeaderBackButton } from '@react-navigation/elements';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Auth from "@/app/(auth)/";
import SignUp from "@/app/(auth)/register/";
import Login from "@/app/(auth)/login/";
import Intro from "@/app/(auth)/(onboarding)/intro/";
import Timeline from "@/app/(protected)/";
import Account from "@/app/(protected)/account/[uid]";
import Messages from "@/app/(protected)/events/messages/"
import Lineup from "@/app/(protected)/events/lineup/"

const Navigator = () => {
  const router = useRouter();
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Group screenOptions={{ 
        backgroundColor: '#fffff',
        headerShown: false,
        gestureEnabled: false
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
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => {
                  router.dismiss()
                }}
              />
            ),
          }}
        />
        <Stack.Screen 
          name="Messages"
          component={Messages}
          options={{
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => {
                  router.dismiss()
                }}
              />
            ),
          }} 
        />
        <Stack.Screen 
          name="Events Dash"
          component={Lineup}
          options={{
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Navigator;
