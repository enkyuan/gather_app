import Theme from '@/constants/Theme';

import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { PageIndicator } from 'react-native-page-indicator';
import tw from 'twrnc';
import { CaretRight } from "phosphor-react-native"; 


import Intro from '@/components/onboarding/routes/Intro';
import FullName from '@/components/onboarding/routes/FullName';
import RoleSelection from '@/components/onboarding/routes/RoleSelection';
import SchoolSelection from '@/components/onboarding/routes/SchoolSelection';
import Button from '@/components/onboarding/Button';

const pages = [<Intro />, <FullName />, <RoleSelection />, <SchoolSelection />];

const Onboarding = () => {
  const indicatorSize = 12;

  const { width, height } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const animatedCurrent = useRef(Animated.divide(scrollX, width)).current;

  const onPress = () => {}

  return (
    <View style={styles.root}>
      <Animated.ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: true,
        })}
      >
        {pages.map((page, index) => (
          <View key={index} style={[styles.page, { width, height }]}>
            {page} 
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <View style={styles.pageIndicator}>
          <PageIndicator size={indicatorSize} dashSize={indicatorSize * 2} count={pages.length} current={animatedCurrent} />  
        </View>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <CaretRight size={32} color="white" />
        </TouchableOpacity>  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageIndicator: {
    left: 4,
    right: 4,
    alignItems: 'start',
    justifyContent: 'center',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  btn: {
    backgroundColor: Theme.primary, 
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 9999,
    width: 60,
    height: 60,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 32,
    gap: 200
  }
});

export default Onboarding;
