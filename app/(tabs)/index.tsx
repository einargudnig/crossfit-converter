import { StyleSheet, Pressable } from 'react-native';
import { Link } from "expo-router";
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>Choose common weights or convert</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.buttonContainer}>
        <Link href="/male-weights" asChild>
          <Pressable>
            {({ pressed }) => (
              <Text style={styles.button}>
                Male
              </Text>
            )}
          </Pressable>
        </Link>
        <Link href="/female-weight" asChild>
          <Pressable>
            {({ pressed }) => (
              <Text style={styles.button}>
                Female
              </Text>
            )}
          </Pressable>
        </Link>
        <Link href="/converter" asChild>
          <Pressable>
            {({ pressed }) => (
              <Text style={styles.button}>
                Converter
              </Text>
            )}
          </Pressable>
        </Link>
        </View>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    padding: 10,
    margin: 10,
    width: 250,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonContainer: {
    marginTop: 15,
    padding: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
