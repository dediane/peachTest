import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Hexagon from "../hexagon";

interface StatCardProps {
  percentage?: string;
  number?: string;
  icon: string;
  description: string;
  borderColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  percentage,
  number,
  icon,
  description,
  borderColor,
}) => {
  return (
    <View style={styles.card}>
      <View>
        <Hexagon strokeColor={borderColor} />
        <Text style={styles.hexagonText}>{percentage || number}</Text>
      </View>
      <Text style={styles.description}>
        <Text style={styles.icon}>{icon}</Text> {description}
      </Text>
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
  },
  card: {
    backgroundColor: "#F0F4F7",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    height: 170,
    width: "49%",
  },
  hexagonText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#03314B",
    position: "absolute",
    alignSelf: "center",
    top: 28
  },
  description: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
    color: "#03314B",
  },
  icon: {
    fontSize: 18,
  },
});

export default StatCard;
