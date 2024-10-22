// TODO: replace textinput with dropdown selection (or nothing at all, leave as view)
// TODO: ensure that the university reflected in view is dynamic & fetches from user information
// FIXME: migrate authenticated routes into a group and put in business logic

import React, { useEffect } from 'react';
import Theme from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import { User, MapPin, BellSimple , CalendarDots, Ticket } from "phosphor-react-native";
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';

import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

const Header = () => {
  const { top, bottom } = useSafeAreaInsets();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
      return null;
  } 

  return (
    <BlurView intensity={40} tint={'extraLight'} style={{ paddingBottom: bottom }}>
      <View
        style={[
          styles.container,
          {
            height: 60,
            gap: 10,
            paddingHorizontal: 20,
          },
        ]}>
        <Link href={'/(protected)/settings/'} asChild>
          <Pressable
            style={styles.circle}>
            <User size={24} weight="fill" color={Theme.dark} />
          </Pressable>
        </Link>
        <View style={styles.location}>
          <MapPin style={styles.pinIcon} size={24} color={Theme.primary} weight="fill" />
          <Text style={styles.text}>
            UT Dallas
          </Text>
        </View>
        <Link href={'/(protected)/(modals)/inbox/'} asChild>
          <Pressable style={styles.circle}>
            <BellSimple size={24} weight="fill" color={Theme.dark} />
          </Pressable>
        </Link>
        <Link href={'/(protected)/(modals)/dash/'} asChild>
          <Pressable style={styles.circle}>
            <Ticket size={24} weight="fill" color={Theme.dark} />
          </Pressable>
        </Link>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: Theme.lightGray,
    borderRadius: 24,
  },
  text: {
    color: Theme.dark,
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    paddingHorizontal: 4
  },
  pinIcon: {
    paddingVertical: 4,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 24,
    backgroundColor: Theme.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Header;
