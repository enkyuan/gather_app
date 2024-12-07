// TODO: add custom colors to tailwind configuration
// FIXME: convert svg images to react components

import React from 'react'
import { Link } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ImageBackground, View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button } from '@/components/ui/Button'
import { Colors } from '@/constants/Colors'
import { ThemedText } from '@/components/ThemedText'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

export default function LoginOptionsScreen() {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 1.6 * insets.top;
  
  const navigation = useNavigation();

  return (
    <>
      <View style={{ paddingTop: paddingTop }} className="flex flex-row justify-center items-center">
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
                className="bg-black rounded-full my-2 justify-center items-center" 
                onPress={() => navigation.navigate('Signup')} 
              />

              <Button 
                type="full" text="Continue with Google" textStyle={{ color: 'black', textAlign: 'center' }} 
                icon={<FontAwesome6 name="google" size={28} color="black" />} 
                className="bg-white pl-[10%] border-1 rounded-full my-2 items-center" 
              />

              <Button 
                type="full" text="Continue with Apple" textStyle={{ color: 'black', textAlign: 'center' }} 
                icon={<FontAwesome6 name="apple" size={36} color="black" />} 
                className="bg-white pl-[10%] border-1 rounded-full my-2 items-center" 
              />

              <Button 
                type="full" text="Continue with Facebook" textStyle={{ color: 'black', textAlign: 'center' }} 
                icon={<FontAwesome6 name="facebook" size={28} color="black" />} 
                className="bg-white pl-[10%] border-1 rounded-full my-2 items-center" 
              />
                
              <View className="text-nowrap my-4">
                <ThemedText type="default">
                  Already have an account?{' '}
                    <Link screen="Login">
                      <ThemedText type='link'>Log in</ThemedText>
                    </Link>
                </ThemedText>
              </View>

              <ThemedText 
                type="default" 
                className="text-sm text-wrap text-gray-500 my-8">By signing up, you agree to our{' '} 
                <Link screen="Login">
                  <ThemedText type="link">terms{' '}</ThemedText>
                </Link> 
                and{' '}
                <Link screen="Login">
                  <ThemedText type="link">privacy policy{' '}</ThemedText>
                </Link>
              </ThemedText>
            </View>
        </ImageBackground>
      </View>
    </>
  );
}
