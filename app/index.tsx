// TODO: add dark mode to app (can be changed in settings)

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "@/components/navigation/Navigator";
import { StripeProvider } from '@stripe/stripe-react-native';
import tw from "twrnc";

import Auth from '@/app/(auth)/'

export default function App() {
  return (
      <Navigator />
  );
}
