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

import pb from '@root/pocketbase.config'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);



      if (pb.authStore.isValid) {

      }



  //check to see if the user is still authenticated
  useEffect(() => {

  }, []);

  return (
    <>
      <Stack.Navigator 
        initialRouteName="LoginOptions"
        screenOptions={{ headerShown: false }}>
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
        />
        <Stack.Screen
          name="LoginOptions"
          component={LoginOptionsScreen}
        />
        <Stack.Screen 
          name="NewPassword"
          component={NewPasswordScreen}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />
      </Stack.Navigator>
    </>
  )
}
