import React from "react";
import { Subtitles, Title } from "../components/title";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { constant } from "../constant/constant";
import HorizontalScroll from "../components/horizontalScroll";
import StatCard from "../components/cards/statcard";
import ReminderCard from "../components/cards/reminderCard";
import { LargeStatCard } from "../components/cards/largeStatCard";
import { SplitDescription } from "../components/splitDescription";
import ChartComponent from "../components/chart";
import Button from "../components/button";
import { GetBetterCard } from "../components/cards/getBetterCard";
import  Hexagon from "../components/hexagon";

const imageSources = [
  require("../assets/Success1.png"),
  require("../assets/Success2.png"),
  require("../assets/Success3.png"),
];

interface StatCardProps {
  percentage?: string;
  number?: string;
  icon: string;
  description: string;
  borderColor: string;
}
export const Homepage = () => {
  return (
    <ScrollView>
      <Title text={constant.Pagetitle} />
      <Subtitles text={constant.subtitle.success} />
      <HorizontalScroll images={imageSources} />
      <Subtitles text={constant.subtitle.overview} />
      <View style={{ marginHorizontal: 14 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <StatCard
            percentage="83%"
            icon="🙂"
            description="Votre observance"
            borderColor="#72DD89"
          />
          <StatCard
            number="10"
            icon="💊"
            description="Votre record de prises consécutives"
            borderColor="#F2BD4F"
          />
        </View>
        <LargeStatCard
          title="Nombre de prises manquées"
          borderColor="#F05C6B"
          illustration={require("../assets/Calendar.png")}
        />
      </View>
      <Subtitles text={constant.subtitle.thisweek} />
      <View style={{ marginHorizontal: 14 }}>
        <ChartComponent />
        <Text
          style={{
            fontSize: 16,
            lineHeight: 20,
            fontWeight: "500",
            color: "#8BA0AC",
            marginVertical: 16,
          }}
        >
          {constant.thisweek.text1}
        </Text>
        <SplitDescription text={constant.thisweek.text2} emoji="✴️" />
        <SplitDescription text={constant.thisweek.text3} emoji="✴️" />
      </View>
      <Subtitles text={constant.subtitle.next} />
      <View style={{ marginHorizontal: 14 }}>
        <GetBetterCard />
        <ReminderCard />
        <Button text="Passer au jour suivant" />
      </View>
      <Hexagon strokeColor="#72DD89"/>
      <Hexagon strokeColor="#F2BD4F"/>
      <Hexagon strokeColor="#F05C6B"/>
    </ScrollView>
  );
};
