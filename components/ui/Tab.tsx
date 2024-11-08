// FIXME: icon components should be mapped to either feather or phosphor

import { Theme } from '@/constants/Theme';

import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ViewStyle,
  TextStyle,
  Dimensions 
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const CARD_WIDTH = Math.min(Dimensions.get('screen').width * 0.4, 160);
const CARD_HEIGHT = Math.min(Dimensions.get('screen').height * 0.1, 60);

interface CardProps {
  label: string;
  icon: string;
  color: string;
  onPress: () => void;
}

export default function Tab({ title, icon, color, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.tab}>
        <FeatherIcon
          color="#000"
          name={icon}
          size={20}
        />
          <Text style={styles.tabLabel}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  tab: {
    gap: 8,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 9999,
    backgroundColor: '#fff',
    marginHorizontal: 8,
  },
  tabLabel: {
    fontSize: 16,
    fontFamily: Theme.fonts.semibold,
    textAlign: 'center',
    lineHeight: 20,
    color: '#121a26',
  }
});
