import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { RenderItem } from './animated/RenderItem';
import { Pagination } from './animated/Pagination';
import data from "./data";

export default function OnboardingForms() {
  return (
    <View style={styles.container}>
        <Animated.FlatList 
           data={data} 
           renderItem={({ item, index }) => {
               return <RenderItem item={item} index={index} />;
           }}
           keyExtractor={(item) => item.id}
           scrollEventThrottle={16}
           horizontal={true}
           bounces={false}
           pagingEnabled={true}
           showsHorizontalScrollIndicator={false}
        />
        <View style={styles.bottomContainer}>
          <Pagination data={data} x={x} />
          <CustomButton
            flatListRef={flatListRef}
            flatListIndex={flatListIndex}
            dataLength={data.length}
            x={x}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingVertical: 30,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  }
})
