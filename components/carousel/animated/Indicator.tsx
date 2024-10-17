import { StyleSheet, View } from 'react-native';
import React from 'react';

type Props = {
  index: number;
  paginationIndex: number;
};

const Indicator = ({index, paginationIndex}: Props) => {
  return (
    <View style={paginationIndex === index ? styles.indicator : styles.indicatorOpacity} />
  );
};

export default Indicator;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: 'white',
    height: 8,
    width: 8,
    marginHorizontal: 2,
    borderRadius: 8,
  },
  indicatorOpacity: {
    backgroundColor: 'white',
    height: 7,
    width: 7,
    marginHorizontal: 2,
    borderRadius: 8,
    opacity: 0.5,
  },
});

