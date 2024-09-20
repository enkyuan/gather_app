// TODO: add dark mode to app (can be changed in settings)

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "@/components/navigation/Navigator";
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <StripeProvider 
          publishableKey={process.env.EXPO_PUBLIC_STRIPE_PK}
          merchantIdentifier={process.env.EXPO_PUBLIC_MERCHANT_ID}
        > 
          <Navigator />
        </StripeProvider>    
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
