// TODOs: add merchant identifier & stripe key

import React, { useState, useEffect } from "react";
import tw from "twrnc";
// import { StripeProvider } from "@stripe/stripe-react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { fetchPublishableKey } from "@/helpers";
import Auth from "./routes/auth";
import Navigator from "@/components/navigation/Navigator";
import { StatusBar } from "react-native";

export default function App() {
  const [publishableKey, setPublishableKey] = useState("");

  useEffect(() => {
    async function init() {
      const key = await fetchPublishableKey();
      if (publishableKey) {
        setPublishableKey(key);
      }
    }
  }, []);

  return (
    <GestureHandlerRootView style={tw`flex-1 bg-white`}>
      <Navigator />
    </GestureHandlerRootView>
  );
}
