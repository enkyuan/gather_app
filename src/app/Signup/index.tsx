import React from 'react'
import { Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native'

import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { useNavigate } from '@/hooks/useNavigate'

import { NotFoundScreen } from '@/app/NotFound'
import { LoginScreen } from '@/app/Login/'

export default function SignupScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Signup' }} />
      <SafeAreaView>
        <ThemedText type="title">Signup Screen</ThemedText>
        <Pressable onPress={() => useNavigate('Login')}>
          <ThemedText type="link">Go to login screen!</ThemedText>
        </Pressable>
      </SafeAreaView>
    </>
  );
}
