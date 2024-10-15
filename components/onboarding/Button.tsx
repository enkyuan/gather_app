import Theme from '@/constants/Theme';

import React, { useRef } from 'react';
import { Animated, TouchableOpacity, useWindowDimensions, ScrollView, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { CaretRight } from "phosphor-react-native"; 
import { pages } from '@/components/onboarding/pages';

type Props = {
  index: number;
  scrollRef: RefObject<ScrollView>;
};

const Button = ({ index, scrollRef }: Props) => {
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(index * width)).current;
  
  nextScreen = () => {
    scrollRef.current?.scrollTo({x: scrollX._value + width, y: 0, animated: true}) 
  }

  return (
    <TouchableOpacity style={styles.btn} onPress={nextScreen}>
      <CaretRight size={32} color="white" />
    </TouchableOpacity>
  )
}

export default Button;

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
