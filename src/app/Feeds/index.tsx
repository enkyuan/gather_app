import React from 'react'
import { Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native'

import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

import { NotFoundScreen } from '@/app/+not-found'

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <SafeAreaView>
        <ThemedText type="title">Home Screen</ThemedText>
        <Pressable onPress={() => NotFoundScreen}>
          <ThemedText type="link">Go to not found screen!</ThemedText>
        </Pressable>
      </SafeAreaView>
    </>
  );
}
