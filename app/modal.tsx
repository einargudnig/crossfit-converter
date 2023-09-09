import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function WeightModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weights</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text}>In the table you can see common weights used in workout</Text>
      <Text style={styles.text}>Note that the weights are rounded to easier numbers.</Text>
      <Text style={styles.text}>You can also convert the weight you have in your workout in this converter!</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Distance</Text>
      <Text style={styles.text}>You can convert the distance you have in your workout in this converter!</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    marginTop: 2,
    marginBottom: 2,
    padding: 2
  }
});
