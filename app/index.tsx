// TODOs: Add merchant identifier & stripe key

import React from "react";
import tw from "twrnc";
import { StripeProvider } from "@stripe/stripe-react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Auth from "./routes/auth";

export default function App() {
  return (
    <StripeProvider merchantIdentifier=" " publishableKey="">
      <GestureHandlerRootView style={tw`flex-1`}>
        <Auth />
      </GestureHandlerRootView>
    </StripeProvider>
  );
}
