import React, { useState } from "react";
import { StyleSheet, TextInput, Button } from "react-native";
import { Text, View } from '../components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // convert icon

export default function Converter(): JSX.Element {
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleConversion = () => {
    if (unit === 'lbs') {
      const kgValue = parseFloat(inputValue) / 2.2046;
      setConvertedValue(kgValue.toFixed(1));
    } else {
      const lbsValue = parseFloat(inputValue) * 2.2046;
      setConvertedValue(lbsValue.toFixed(1));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weight Conversion</Text>
      
      <View style={styles.button}>
        <FontAwesome.Button name='exchange' backgroundColor='white' onPress={() => setUnit(unit === 'lbs' ? 'kg' : 'lbs')}>
          <Text style={styles.conversionButton}>{unit === 'lbs' ? 'LBS -> KG' : 'KG -> LBS'}</Text>
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
          <Text>
            Converted Value: {convertedValue} {unit === 'lbs' ? 'KG' : 'LBS'}
          </Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
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
    alignItems: 'center'  
  },
  conversionButton: {
    color: 'black',
  },
  convertedValue: {
    marginTop: 20,
  }

})