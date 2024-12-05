// TODO: add custom colors to tailwind configuration
// FIXME: convert svg logos to react components

import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageBackground, View, Image, Text } from 'react-native'
import { Link } from 'expo-router'

import { Button } from '@/components/ui/Button'
import { Colors } from '@/constants/Colors'
import { ThemedText } from '@/components/ThemedText'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

export default function LoginOptionsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const paddingTop = insets.top + 1.6 * insets.top;
  const paddingHorizontal = insets.left + insets.right + 1.6 * (insets.left + insets.right);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ paddingTop: paddingTop, paddingHorizontal: paddingHorizontal }} className="flex flex-row justify-center items-center">
        <ImageBackground 
          source={require('@/assets/images/iconsplash-light.png')} 
          style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
            <View className="mx-[8%]">
              <Image 
                source={require('@/assets/images/gather-logo.png')}
                className="flex w-24 h-24 my-[12%]" 
              />

              <Button 
                type="full" 
                text="Sign up" textStyle={{ color: 'white', textAlign: 'center' }} 
                className="bg-black rounded-full my-2 justify-center items-center" onPress={() => router.push('Login')} 
              />

              <Button 
                type="full" text="Continue with Google" textStyle={{ color: 'black', textAlign: 'center' }} 
                icon={<FontAwesome6 name="google" size={28} color="black" />} 
                className="bg-white pl-[10%] border-1 rounded-full my-2 items-center" onPress={() => router.push('Login')} 
              />

              <Button 
                type="full" text="Continue with Apple" textStyle={{ color: 'black', textAlign: 'center' }} 
                icon={<FontAwesome6 name="apple" size={36} color="black" />} 
                className="bg-white pl-[10%] border-1 rounded-full my-2 items-center" onPress={() => router.push('Login')} 
              />

              <Button 
                type="full" text="Continue with Facebook" textStyle={{ color: 'black', textAlign: 'center' }} 
                icon={<FontAwesome6 name="facebook" size={28} color="black" />} 
                className="bg-white pl-[10%] border-1 rounded-full my-2 items-center" onPress={() => router.push('Login')} 
              />
                
              <View className="text-nowrap my-4">
                <ThemedText type="medium">
                  Already have an account?{' '}
                    <Link href={"Login"} asChild>
                      <ThemedText type='link'>Log in</ThemedText>
                    </Link>
                </ThemedText>
              </View>

              <ThemedText 
                type="regular" 
                className="text-sm text-wrap text-gray-500 my-8">By signing up, you agree to our terms and privacy policy.
              </ThemedText>
            </View>
        </ImageBackground>
      </View>
    </>
  );
}
