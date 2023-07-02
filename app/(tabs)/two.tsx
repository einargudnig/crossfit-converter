import { useState } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import { Text, View } from '../../components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // convert icon

export default function TabTwoScreen() {
  const [unit, setUnit] = useState<'feet' | 'meters'>('feet');
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleConversion = () => {
    if (unit === 'feet') {
      const metersValue = parseFloat(inputValue) / 3.2808;
      setConvertedValue(metersValue.toFixed(2));
    } else {
      const feetValue = parseFloat(inputValue) * 3.2808;
      setConvertedValue(feetValue.toFixed(2));
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convert Distance</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.button}>
        <FontAwesome.Button name='exchange' backgroundColor='black' onPress={() => setUnit(unit === 'feet' ? 'meters' : 'feet')}>
          <Text style={styles.conversionButton}>{unit === 'feet' ? 'Foot -> Meter' : 'Meter -> Feet'}</Text>
        </FontAwesome.Button>
      </View>
      <TextInput
        placeholder="Enter weight"
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="numeric"
        style={styles.textInput}
      />
      <View style={styles.buttonContainer}>
        <Button title="Convert" color={'black'} onPress={handleConversion} />
      </View>
      {convertedValue !== '' && (
        <View style={styles.convertedValue}>
          <Text style={styles.convertedText}>
            Converted Value: {convertedValue} {unit === 'feet' ? 'Meters' : 'Foots'}
          </Text>
        </View>
      )}
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
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10
  },
  textInput: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: '70%',
    borderRadius: 6,
    color: 'white',
    fontSize: 18,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    backgroundColor: 'white',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'  ,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
  },
  conversionButton: {
    color: 'white',
  },
  convertedValue: {
    marginTop: 20,
  },
  convertedText: {
    fontSize: 24,
  }
});
