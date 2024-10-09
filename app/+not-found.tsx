// TODO: alt screen for authenticated users to return to root page of navigator

import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import useAuth from '@/hooks/useAuth';

export default function NotFoundScreen() {
  const isAuthenticated = useAuth(state => state.isAuthenticated);
  const redirect = isAuthenticated ? "/(protected)/" : "/";
  
  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">404. Oops. Maybe you got lost?</ThemedText>
        <Link href={redirect} style={styles.link}>
          <ThemedText type="link">Take me home.</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
