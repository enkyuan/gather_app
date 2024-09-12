import React from "react";
import tw from "twrnc";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigator from "@/components/navigation/Navigator";
import { StripeProvider } from '@stripe/stripe-react-native';


export default function App() {
  return (
    <GestureHandlerRootView style={tw`flex-1 bg-white`}>
      <StripeProvider 
        publishableKey={process.env.EXPO_PUBLIC_STRIPE_PK}
        merchantIdentifier={process.env.EXPO_PUBLIC_MERCHANT_ID}
      >
        <Navigator />
      </StripeProvider>
    </GestureHandlerRootView>
  );
}
