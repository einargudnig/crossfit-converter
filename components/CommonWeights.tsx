import React from "react";
import { StyleSheet, useColorScheme, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import { Text, View } from "./Themed";
import WeightsTableM from "./WeightsTableM";
import WeightsTableW from "./WeightsTableW";

export default function CommonWeights() {

  const Stack = createNativeStackNavigator();

  const colorScheme = useColorScheme();
  return (
    <View>
      <View>
        <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        Common weights used in crossfit
        </Text>
        <Button
          title="Female Weight"
        />
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="Male Weight">
            <Stack.Screen
              name="male-weight"
              component={WeightsTableM}
              options={{
                title: "Male Weight"
              }}
            />
            <Stack.Screen
              name="female-weight"
              component={WeightsTableW}
              options={{
                title: 'Female Weight'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
