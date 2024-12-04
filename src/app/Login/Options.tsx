import React from 'react'
import { Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native'

import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

export default function LoginOptionsScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView>
        <ThemedText type="title">Login Options Screen</ThemedText>
        <Pressable onPress={() => router.navigate('/NotFound')}>
          <ThemedText type="link">Go to not found screen!</ThemedText>
        </Pressable>
      </SafeAreaView>
    </>
  );
}
