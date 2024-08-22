import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Homepage } from './pages/main';

export default function App() {
  return (
    <SafeAreaView>
      <Homepage />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
