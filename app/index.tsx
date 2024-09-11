// TODOs: add merchant identifier & stripe key

import React, { useState, useEffect } from "react";
import tw from "twrnc";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { fetchPublishableKey } from "@/helpers";
import Navigator from "@/components/navigation/Navigator";

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
