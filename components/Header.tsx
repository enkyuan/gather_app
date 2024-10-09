// TODO: replace textinput with dropdown selection (or nothing at all, leave as view)
// TODO: ensure that the university reflected in view is dynamic & fetches from user information
// FIXME: migrate authenticated routes into a group and put in business logic

import Theme from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import { MapPin, BellSimple , CalendarDots } from "phosphor-react-native";
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';

const Header = () => {
  const { top } = useSafeAreaInsets();

  return (
    <BlurView intensity={80} tint={'extraLight'} style={{ paddingTop: top }}>
      <View
        style={[
          styles.container,
          {
            height: 60,
            gap: 10,
            paddingHorizontal: 20,
            backgroundColor: 'transparent',
          },
        ]}>
        <Link href={'/(protected)/account/lol'} asChild>
          <Pressable
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: Theme.gray,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>SG</Text>
          </Pressable>
        </Link>
        <View style={styles.location}>
          <MapPin style={styles.pinIcon} size={24} weight="fill" />
          <TextInput style={styles.input} placeholder="UT-Dallas" placeholderTextColor={Theme.dark} />
        </View>
        <Link href={'/(protected)/events/messages/'} asChild>
          <Pressable style={styles.circle}>
            <BellSimple size={24} weight="fill" />
          </Pressable>
        </Link>
        <Link href={'/(protected)/events/lineup/'} asChild>
          <Pressable style={styles.circle}>
            <CalendarDots size={24} weight="fill" />
          </Pressable>
        </Link>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 12,
    backgroundColor: Theme.gray,
  },
  location: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.lightGray,
    borderRadius: 24,
  },
  pinIcon: {
    padding: 12,
    margin: 8
  },
  input: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: Theme.lightGray,
    color: Theme.dark,
    borderRadius: 24,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 24,
    backgroundColor: Theme.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Header;
