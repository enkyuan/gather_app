// TODO: component to retrieve user name
// TODO: write name val to pocketbase under 'alias' field
// TODO: add name parameter to zustand store & write to pb
// TODO: add button & pagination components at the bottom of view

import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import tw from "twrnc";

const EnterName = () => {
    const [name, setName] = useState("");

    return (
        <View style={tw`flex flex-col justify-center items-center py-16`}>
            <View style={tw`flex-col justify-between items-center gap-4 py-16`}>
                <Text style={styles.title}>Welcome! There are a few more steps before we can dive in.</Text>
                <Text style={styles.text}>
                Enter your full name below so we can get to know you better.
                </Text>
            </View>
            <TextInput
                style={styles.textInput}
                placeholder="Email"
                value={email}
                placeholderTextColor="gray"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => setName(text)}
            />
            <Text style={tw`text-xl mb-78 font-semibold`}>
                <Link href="/auth" style={tw`text-blue-500`}>
                {" "}
                Take me home{" "}
                </Link>
            </Text>
        </View>
    );
}

export default EnterName; 

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontFamily: "Poppins_600SemiBold",
        textAlign: "center",
        color: "black",
    },
    text: {
        fontSize: 20,
        fontFamily: "Poppins_500Medium",
        color: "black",
        textAlign: "start",
        paddingHorizontal: 16,
    },
    textInput: {
        fontSize: 20,
        borderRadius: 8,
        fontWeight: "semibold",
        backgroundColor: "#e5e7eb",
        color: "black",
        width: "94%",
        height: "10%",
        paddingLeft: "8%",
        marginVertical: 12,
    }
});
