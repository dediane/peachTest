import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const GetBetterCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>

            <Text style={styles.title}>Pour s’améliorer</Text>
            </View>
            <View style={{ display: "flex", flexDirection: 'row', gap: 10}}>
                <LittleCard text="Prises validées cette semaine" pourcentage="11/" max="14" />
                <LittleCard text="Objectif de prises validées à atteindre" pourcentage="14/" max='14'/>
            </View>
        </View>
    );
};

const LittleCard = ({ text, pourcentage, max }: { text: string , pourcentage :string, max :string}) => {
    return (
        <View style={styles.littlecard}>
            <View style={{ display: "flex", flexDirection: 'row', marginVertical: 10}}>
            <Text style={styles.pourcentage}>{pourcentage}</Text>
            <Text style={styles.max}>{max}</Text>
            </View>
            <Text style={styles.description}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#F1F6F4",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: "700",
        color: "#03314B",
        marginHorizontal: 'auto',
    },
    littlecard : {
        backgroundColor: "#FFFFFF",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        display: "flex",
        flexDirection: "column",
        width: '50%',
    },
    pourcentage: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: "700",
        color: "#03314B",
    },
    max: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: "700",
        color: "#8BA0AC",
    },
    description: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "500",
        color: "#8BA0AC",
    },
});