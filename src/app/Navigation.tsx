import * as React from 'react'
import { Stack, useRouter } from 'expo-router'
import { Pressable } from 'react-native'

import { NotFoundScreen } from '@/app/+not-found'
import { HomeScreen } from '@/app/Feeds/'


export default function Navigation() {
  const router = useRouter()

  return (
    <>
      <Stack.Screen
        name="NotFound"
        getComponent={() => NotFoundScreen}
      />
      <Stack.Screen
        name="Home"
        getComponent={() => HomeScreen}
      />
      <Stack.Screen
        name="Login"
        getComponent={() => LoginScreen}
      />
      <Stack.Screen
        name="LoginOptions"
        getComponent={() => LoginOptionsScreen}
      />
      <Stack.Screen 
        name="NewPassword"
        getComponent={() => NewPasswordScreen}
      />
      <Stack.Screen
        name="Onboarding"
        getComponent={() => OnboardingScreen}
      />
      <Stack.Screen
        name="ResetPassword"
        getComponent={() => ResetPasswordScreen}
      />
      <Stack.Screen
        name="Signup"
        getComponent={() => SignupScreen}
      />
    </>
  )
}
