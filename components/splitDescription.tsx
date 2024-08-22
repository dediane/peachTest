import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const SplitDescription = ({ text, emoji}: { text: string, emoji :string }) => {
return (
    <View style={styles.wrapper}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.text}>{text}</Text>
    </View>
);}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
        marginVertical: 16,
        
    },
    emoji: {
        fontSize: 17,
    },
    text: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "500",
        color: "#8BA0AC",
        marginRight: 20,
    },
});