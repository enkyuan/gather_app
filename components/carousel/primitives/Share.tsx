import Theme from '@/constants/Theme';

import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import { Export } from 'phosphor-react-native';

const Share = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Export size={20} weight="bold" color={Theme.background} />
    </TouchableOpacity>
  );
};

export default Share;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212227',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    borderRadius: 12,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
});

