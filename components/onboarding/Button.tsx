

import Theme from '@/constants/Theme';

import React, { useRef } from 'react';
import { Animated, TouchableOpacity, Pressable, useWindowDimensions, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { CaretRight } from "phosphor-react-native"; 
import { pages } from '@/components/onboarding/pages';

export default function Button() {

  return (
    <TouchableOpacity style={styles.btn}>
      <CaretRight size={32} color="white" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Theme.primary, 
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 9999,
    width: 60,
    height: 60,
  },
});
