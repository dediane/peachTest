import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StackedBarChart } from 'react-native-chart-kit';

const ChartComponent = () => {
  const data = {
    labels: ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7'],
    legend: ['prise validée', 'prise en retard', 'prise manquée'],
    data: [
      [100, 0, 0],
      [100, 0, 0],
      [100, 0, 0],
      [50, 50, 0],
      [100, 0, 0],
      [0, 50, 50],
      [0, 0, 100],
    ],
    barColors: ['#2CE080', '#FFAF87', '#FF445D'],

  };

  return (
    <View style={styles.container}>
        <StackedBarChart
            data={data}
            width={Dimensions.get('window').width - 40} // from react-native
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
            hideLegend={true}
            withHorizontalLabels={false}
            
        />
        <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#2CE080' }]} />
          <Text style={styles.legendText}>prise validée</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#FFAF87' }]} />
          <Text style={styles.legendText}>prise en retard</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#FF445D' }]} />
          <Text style={styles.legendText}>prise manquée</Text>
        </View>
      </View>
    </View>
  );
};

const chartConfig = {
  backgroundColor: '#FFFFFF',
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientTo: '#FFFFFF',
  decimalPlaces: 0,
  barRadius: 2,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
    paddingRight: 30
  },
  barPercentage: 0.3,
  fillShadowGradient: "#FFFFFF",
  showBarTops: false,
  showYAxisLabel: false,

  propsForBackgroundLines: {
    strokeDasharray: "",
    strokeWidth: 0,
  },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    borderColor: '#E6EAED',
    borderWidth: 2,
  },
  legendText: {
    fontSize: 10,
    fontWeight: 500,
    marginRight: 15
  },
  chart: {
    marginVertical: 2,
    borderRadius: 16,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 24,
    height: 8,
    borderRadius: 3,
    marginRight: 5,
  },
});

export default ChartComponent;
