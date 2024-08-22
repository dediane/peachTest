import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Hexagon from "../hexagon";
import { ProgressChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

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

  const chartConfig = {
    backgroundGradientFrom: "rgba(255, 255, 255, 0)",
    backgroundGradientTo: "rgba(255, 255, 255, 0)",
    color: (opacity = 1) => `rgba(240, 92, 107, ${opacity})`,
    strokeWidth: 4,
  };


  return (
    <View style={styles.card}>
      {number && <View>
          <Hexagon strokeColor={borderColor} />
          <Text style={styles.hexagonText}>{number}</Text>
      </View>}
      {icon && 
      <View style={styles.circle}>
        <ProgressChart
          data={stat}
          width={85}
          height={85}
          strokeWidth={4}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={true}
          style={styles.progressChart}
        />

      <Image style={styles.icon} source={icon}></Image>
      </View>
      }
      <View>

      <Text style={styles.title}>{title}</Text>
      {description && description.map((desc, index) => (
        <Text key={index} style={styles.description}>{`\u2022 ${desc}`}</Text>
      ))}
      </View>
      <Image source={illustration} style={styles.image} />
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
    padding: 16,
    alignItems: "center",
    height: 135,
    display: "flex",
    flexDirection: "row",
    gap: 16,
    position: "relative",
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
    color: "#03314B",
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    color: "#03314B",
  },
  hexagonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D2D2D',
    position: 'absolute',
    alignSelf: 'center',
    top: 28,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 10,
    bottom: 0,
    position: "absolute",
    right: 0,
  },
  icon: {
    width: 30,
    height: 30,
  },
  circle: {
    backgroundColor: "#FFFFFF",
    width: 85,
    height: 85,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ring: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#F05C6B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  progressChart: {
    position: "absolute",
    borderRadius: 50,
    top: 0,
    left: 0,
  },
});
