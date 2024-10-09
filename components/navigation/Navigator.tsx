import Theme from '@/constants/Theme'

import { useFonts, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Pressable, ActivityIndicator } from 'react-native';

import { CaretLeft } from "phosphor-react-native";

const Navigator = () => {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack 
      screenOptions={{ 
        backgroundColor: Theme.background
    }}>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login_options"
        options={{           
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.background },
          headerLeft: () => (
            <Pressable onPress={router.back}>
              <CaretLeft size={32} color="black" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="signup_options"
        options={{ 
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Theme.background },
          headerLeft: () => (
            <Pressable onPress={router.back}>
              <CaretLeft size={32} color="black" />
            </Pressable>
          ), 
        }}
      />
      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        options={{ headerShown: false }}
      />
    </Stack>
  )
}

export default Navigator;


