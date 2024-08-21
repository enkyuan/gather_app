import React from 'react'
import tw from "twrnc";
import Login from './routes/auth/Login';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Auth from './routes/auth';

export default function App() {
  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <Auth />
    </GestureHandlerRootView>
  )
}
