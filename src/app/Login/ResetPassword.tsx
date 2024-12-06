import React from 'react'
import { View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'

import NotFoundScreen from '@/app/NotFound'

export default function ResetPasswordScreen() {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 1.6 * insets.top;

  const navigation = useNavigation();

  return (
    <>
      <View style={{ paddingTop: paddingTop }}>
        <ThemedText type="title">Reset Password Screen</ThemedText>
        <Pressable onPress={() => navigation.navigate('NotFound')}>
          <ThemedText type="link">Go to not found screen!</ThemedText>
        </Pressable>
      </View>
    </>
  );
}
