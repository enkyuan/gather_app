// TODO: add dark mode to app (can be changed in settings)

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "@/components/navigation/Navigator";
import { StripeProvider } from '@stripe/stripe-react-native';
import { Toaster } from 'sonner-native';

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
        <Toaster
            position="top-center"
            offset={100}
            duration={3000}
            swipeToDismissDirection="up"
            visibleToasts={2}
            closeButton
            autoWiggleOnUpdate="toast-change"
            theme="system"
            toastOptions={{
              actionButtonStyle: {
                paddingHorizontal: 20,
                paddingVertical: 32,
              },
            }}
            pauseWhenPageIsHidden
        />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
