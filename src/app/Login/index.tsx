import React from 'react'
import { Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native'

import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { useNavigate } from '@/hooks/useNavigate'

import { NotFoundScreen } from '@/app/NotFound'
import { SignupScreen } from '@/app/Signup/'

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <SafeAreaView>
        <ThemedText type="title">Login Screen</ThemedText>
        <Pressable onPress={() => useNavigate('Signup')}>
          <ThemedText type="link">Go to signup screen!</ThemedText>
        </Pressable>
      </SafeAreaView>
    </>
  );
}
