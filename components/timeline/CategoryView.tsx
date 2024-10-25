// FIXME: replace flatlist with flashlist
// FIXME: move items array to separate file
// FIXME: migrate color in card icon to mutedWhite in theme

import { Theme } from '@/constants/Theme';

import React from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';

import { categories } from './data/categories';

const CARD_WIDTH = Math.min(Dimensions.get('screen').width * 0.25, 200);

export default function CategoryView() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
      <View style={styles.container}>
        <View>
          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {categories.map(({ icon, category }, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FeatherIcon
                        color="#000"
                        name={icon}
                        size={32} />
                    </View>
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{category}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  card: {
    width: CARD_WIDTH,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 28,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    shadowColor: '#90a0ca',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff1f5',
  },
  cardBody: {
    paddingLeft: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: Theme.fonts.semibold,
    lineHeight: 18,
    color: '#121a26',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: '#778599',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  cardFooterText: {
    fontSize: 13,
    fontFamily: Theme.fonts.medium,
    lineHeight: 18,
    color: '#778599',
  },
});
