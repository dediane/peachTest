import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Hexagon from "../hexagon";

interface GetBetterCardProps {
  title: string;
  illustration: any;
}

export const GetBetterCard: React.FC<GetBetterCardProps> = ({
  title,
  illustration,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.container}>
          <Hexagon strokeColor="#B1BFC7" />
          <Text style={styles.hexagonText}>83%</Text>
        </View>
        <View style={{width: 22, height: 22, backgroundColor: '#7276F7', marginVertical: 'auto', borderRadius: 50}}>
        <Text style={{textAlign: 'center', marginVertical: 'auto', color: 'white'}}>→</Text>
        </View>
        <View style={styles.container}>
          <Hexagon
            strokeColor="#7276F7"
            fillColor="#7276F7"
            style={styles.largeHexagon}
          />
          <Text style={styles.largeHexagonText}>100%</Text>
        </View>
      </View>
      <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <LittleCard
          text="Prises validées cette semaine"
          pourcentage="11/"
          max="14"
        />
        <LittleCard
          text="Objectif de prises validées à atteindre"
          pourcentage="14/"
          max="14"
        />
      </View>
      <Image source={illustration} style={styles.image} />
    </View>
  );
};

const LittleCard = ({
  text,
  pourcentage,
  max,
}: {
  text: string;
  pourcentage: string;
  max: string;
}) => {
  return (
    <View style={styles.littlecard}>
      <View
        style={{ display: "flex", flexDirection: "row", marginVertical: 10 }}
      >
        <Text style={styles.pourcentage}>{pourcentage}</Text>
        <Text style={styles.max}>{max}</Text>
      </View>
      <Text style={styles.description}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: 78,
    height: 86,
    marginHorizontal: 10,
  },
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
    marginHorizontal: "auto",
  },
  hexagonText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#03314B",
    position: "absolute",
    alignSelf: "center",
    top: 28,
  },
  littlecard: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    display: "flex",
    flexDirection: "column",
    width: "50%",
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
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
    top: 0,
    position: "absolute",
    right: 0,
    zIndex: -1,
  },
  largeHexagon: {
    transform: [{ scale: 1.2 }],
  },
  largeHexagonText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#FFFFFF", 
    position: "absolute",
    top: 28,
    marginLeft: 5,
  },
  section : {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,
    marginHorizontal: 'auto',
  },
});
