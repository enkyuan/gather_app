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

import { primary } from './data/primary';
import { secondary } from './data/secondary';

const CARD_WIDTH = Math.min(Dimensions.get('screen').width * 0.75, 400);

export default function CardView() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
      <View style={styles.container}>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>This Week</Text>

            <TouchableOpacity
              onPress={() => {
                router.navigate('/(protected)/events/this_week');
              }}>
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {primary.map(({ icon, label, company, jobType, years }, index) => (
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
                        size={24} />
                    </View>

                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{label}</Text>

                      <Text style={styles.cardSubtitle}>{company}</Text>
                    </View>
                  </View>

                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{jobType}</Text>

                    <Text style={styles.cardFooterText}>{years}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Parties</Text>

            <TouchableOpacity
              onPress={() => {
                router.navigate('/(protected)/events/parties');
              }}>
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {secondary.map(({ icon, label, company, jobType, years }, index) => (
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
                        size={24} />
                    </View>

                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{label}</Text>

                      <Text style={styles.cardSubtitle}>{company}</Text>
                    </View>
                  </View>

                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{jobType}</Text>

                    <Text style={styles.cardFooterText}>{years}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Night Life</Text>

            <TouchableOpacity
              onPress={() => {
                router.navigate('/(protected)/events/nightlife');
              }}>
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {primary.map(({ icon, label, company, jobType, years }, index) => (
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
                        size={24} />
                    </View>

                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{label}</Text>

                      <Text style={styles.cardSubtitle}>{company}</Text>
                    </View>
                  </View>

                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{jobType}</Text>

                    <Text style={styles.cardFooterText}>{years}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Socials</Text>

            <TouchableOpacity
              onPress={() => {
                router.navigate('/(protected)/events/socials'); 
              }}>
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {secondary.map(({ icon, label, company, jobType, years }, index) => (
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
                        size={24} />
                    </View>

                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{label}</Text>

                      <Text style={styles.cardSubtitle}>{company}</Text>
                    </View>
                  </View>

                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{jobType}</Text>

                    <Text style={styles.cardFooterText}>{years}</Text>
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
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  list: {
    marginBottom: 24,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  listTitle: {
    fontSize: 20,
    fontFamily: Theme.fonts.semibold,
    lineHeight: 24,
    color: '#121a26',
  },
  listAction: {
    fontSize: 16,
    fontFamily: Theme.fonts.medium,
    lineHeight: 20,
    color: '#778599',
  },
  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  card: {
    width: CARD_WIDTH,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
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
    width: 44,
    height: 44,
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
