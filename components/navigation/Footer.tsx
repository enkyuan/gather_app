// TODO: replace textinput with dropdown selection (or nothing at all, leave as view)
// TODO: ensure that the university reflected in view is dynamic & fetches from user information
// TODO: add routes for code verification, archived posts, and new event
// FIXME: migrate authenticated routes into a group and put in business logic

import { Theme } from '@/constants/Theme';

import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { User, Plus, BellSimple, CardsThree, Ticket, Scan } from "phosphor-react-native";
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from "expo-blur";
import { Link } from 'expo-router';
import tw from 'twrnc';

export default function Footer() {
  return (
    <BlurView 
      style={[styles.blur], { paddingBottom: "4%" }}
      intensity={10}>
      <View style={styles.container}>         
        <View style={styles.btnArray}>
          <Link href={'/(protected)/settings/'} asChild>
            <Pressable>
              <User size={24} weight="bold" color={Theme.background.white} />
            </Pressable>
          </Link>
          <Link href={'/(protected)/(modals)/archive/'} asChild>
            <Pressable>
              <CardsThree size={24} weight="bold"  color={Theme.background.white} />
            </Pressable>
          </Link>
          <Link href={'/(protected)/(modals)/dash/'} asChild>
            <Pressable>
              <Ticket size={24} weight="bold" color={Theme.background.white} />
            </Pressable>
          </Link>
        </View>
        <View style={tw`flex-row gap-4`}>
        <Link href={'/(protected)/(modals)/verify/'} asChild>
          <Pressable style={styles.circle}>
            <Scan size={24} weight="bold" color={Theme.background.white} />
          </Pressable>
        </Link>
        <Link href={'/(protected)/(modals)/new_event/'} asChild>
          <Pressable style={styles.circle}>
            <Plus size={24} weight="bold" color={Theme.background.white} />
          </Pressable>
        </Link>
        </View>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  blur: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  container: {
    gap: 60,
    height: 96,
    backgroundColor: Theme.background.light,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: "4%",
  },
  btnArray: {
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.primary.blue,
    borderRadius: 9999,
  },
  text: {
    color: Theme.secondary.dark,
    fontSize: 16,
    fontFamily: Theme.fonts.semibold,
    paddingHorizontal: 4
  },
  image: {
    width: 24,
    height: 24,
  },
  circle: {
    width: 68,
    height: 68,
    borderRadius: 9999,
    backgroundColor: Theme.primary.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

