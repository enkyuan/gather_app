import * as React from 'react'
import { Stack, useRouter } from 'expo-router'
import { Pressable } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import NotFoundScreen from '@/app/NotFound'
import HomeScreen from '@/app/Feeds/'
import LoginScreen from '@/app/Login/'
import LoginOptionsScreen from '@/app/Login/Options'
import NewPasswordScreen from '@/app/Login/NewPassword'
import OnboardingScreen from '@/app/Onboarding/'
import ResetPasswordScreen from '@/app/Login/ResetPassword'
import SignupScreen from '@/app/Signup/'

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <>
      <Stack.Navigator initialRouteName="LoginOptions">
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginOptions"
          component={LoginOptionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="NewPassword"
          component={NewPasswordScreen}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  )
}
