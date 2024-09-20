import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from 'react';
import { Slot } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
    const colorScheme = useColorScheme();
    
    let [fontsLoaded] = useFonts({
      Poppins_500Medium,
      Poppins_600SemiBold,
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
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Slot />
          </ThemeProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    );
  }