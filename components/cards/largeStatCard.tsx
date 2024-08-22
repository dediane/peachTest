import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface largeStatCardProps {
  number?: string;
  icon?: any;
  title?: string;
  description?: string[];
  illustration?: any;
  stat?: any;
  borderColor?: string;
}

export const LargeStatCard: React.FC<largeStatCardProps> = ({
  number,
  icon,
  title,
  description,
  illustration,
  stat,
  borderColor,
}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.hexagon, { borderColor }]}>
        <View style={[styles.hexagonInner, { borderColor }]}>
          <Text style={styles.hexagonText}>{number}</Text>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Image source={illustration} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F0F4F7",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    height: 135,
    display: "flex",
    flexDirection: "row",
    gap: 16,
    position: "relative",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
    color: "#03314B",
  },
  description: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2D2D2D",
    textAlign: "center",
  },
  hexagon: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 8,
  },
  hexagonInner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hexagonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D2D2D',
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 10,
    bottom: 0,
    position: "absolute",
    right: 0,
  }
});
