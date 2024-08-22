import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ReminderCard = () => {
  return (
    <View style={styles.card}>
      <Image 
        source={require('../../assets/pillbox.png')} // Replace with your actual image path
        style={styles.icon} 
      />
      <Text style={styles.text}>
        Peach vous rappellera demain de procéder à l'entretien de votre Respiventix
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#F0EEFE', // Light purple background
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 3,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D2D2D',
    flex: 1,
    lineHeight: 24, // Adjusted for readability
  },
});

export default ReminderCard;