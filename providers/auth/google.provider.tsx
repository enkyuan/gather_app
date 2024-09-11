import { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import * as WebBrowser from 'expo-web-browser';
import { useRouter } from 'expo-router';
import tw from 'twrnc';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleAuthProvider() {
  const router = useRouter();

  const config = {
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
  }

  const [request, response, promptAsync] = Google.useAuthRequest(config); 

  const handleToken = () => {
      if (response?.type === "success") {
        const { authentication } = response;
        const token = authentication?.accessToken;
        console.log("access token", token);
        router.navigate("/events");
      }
  }

  useEffect(() => {
     handleToken();    
  }, [response]);

  return (
   <View style={tw`flex-row justify-center items-center`}> 
      <Pressable style={styles.pressable} onPress={() => promptAsync()}>
          <FontAwesome6 name="google" size={32} color="black" style={styles.icon} />
          <Text style={styles.text}>Google</Text>
      </Pressable> 
    </View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "white",
    marginVertical: 8,
    width: "92%",
    height: 100,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    flexDirection: "row",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 32,
  }
});
