import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const Title = ({ text }: { text: string }) => {
    return (
        <>
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.title}>{text}</Text>
                <View style={styles.view} />
            </View>
        </>
    );
};

export const Subtitles = ({ text }: { text: string }) => {
    return <Text style={styles.subtitle}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 20,
    marginHorizontal: 'auto',
    fontWeight: '700',
    color: '#03314B',
  },
  view: {
    borderBottomColor: "#FEDE44",
    borderBottomWidth: 5,
    width: "25%",
    marginHorizontal: 'auto',
  },
  subtitle : {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    padding: 20,
    color: '#03314B',
  }
});
