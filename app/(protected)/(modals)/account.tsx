// TODO: user account page

import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View, StyleSheet, Pressable } from "react-native";
import tw from "twrnc";
import Theme from '@/constants/Theme';

import EmailAuthProvider from '@/providers/auth/email.provider';
import { ArrowUpRight } from "phosphor-react-native";

export default function Account() {
  const emailAuthProvider = EmailAuthProvider();

  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.pressable} onPress={() => emailAuthProvider.handleSignOut()}>
          <Text style={styles.signOut}>
            Sign out
          </Text>
          <ArrowUpRight size={24} color={Theme.red} style={styles.arrowRight}/>
        </Pressable>
      </View>
    </>
);
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  signOut: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "start",
    color: Theme.red,
  },
  arrowRight: {
    paddingHorizontal: '68%' 
  },
  pressable: {
    backgroundColor: Theme.lightGray,
    flexDirection: 'row',
    borderRadius: 12,
    width: '80%',
    justifyContent: 'between',
    alignItems: 'start',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 24
  }
});
