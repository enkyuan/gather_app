// TODO: replace textinput with dropdown selection (or nothing at all, leave as view)
// TODO: ensure that the university reflected in view is dynamic & fetches from user information
// FIXME: header route needs to be changed to /(authenticated)/(modals)/account
// FIXME: migrate authenticated routes into a group and put in business logic
// FIXME: migrate ionicons to their respective phosphor icons (modify styling if necessary)

import HeaderColors from '@/constants/HeaderColors';
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
        <Link href={'/(protected)/account/[uid]'} asChild>
          <Pressable
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: HeaderColors.gray,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>SG</Text>
          </Pressable>
        </Link>
        <View style={styles.location}>
          <MapPin style={styles.pinIcon} size={24} weight="fill" />
          <TextInput style={styles.input} placeholder="UT-Dallas" placeholderTextColor={HeaderColors.dark} />
        </View>
        <Link href={'/(protected)/account/notifications/'} asChild>
          <Pressable style={styles.circle}>
            <BellSimple size={24} weight="fill" />
          </Pressable>
        </Link>
        <View style={styles.circle}>
          <CalendarDots size={24} weight="fill" />
        </View>
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
    backgroundColor: HeaderColors.gray,
  },
  location: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: HeaderColors.lightGray,
    borderRadius: 24,
  },
  pinIcon: {
    padding: 12,
  },
  input: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 0,
    backgroundColor: HeaderColors.lightGray,
    color: HeaderColors.dark,
    borderRadius: 24,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 24,
    backgroundColor: HeaderColors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Header;
