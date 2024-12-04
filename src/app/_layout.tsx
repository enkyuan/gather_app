/**
 * This file is the root layout and entry point of the application. It is responsible for setting up the initial environment and loading the necessary assets before rendering the application.
 *
 * For automatic app theme, add the following:
 * <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> {...} </ThemeProvider>
 *
 */

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../../global.css';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from '@/app/Navigation'; 
import { Toaster } from 'sonner-native';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Fonts } from '@/constants/Fonts';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Regular: Fonts.regular, 
    Medium: Fonts.medium,
    SemiBold: Fonts.semibold,
    Bold: Fonts.bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <Navigation />
        <Toaster />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
