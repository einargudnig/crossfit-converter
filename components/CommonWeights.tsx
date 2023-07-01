import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';

import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

// symbol-female - symbol-male
function SexIcon(props: {
  name: React.ComponentProps<typeof SimpleLineIcons>['name'];
  children: string
}) {
  return <SimpleLineIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function CommonWeights() {

  const colorScheme = useColorScheme();
  return (
      <View style={styles.mainContainer}>
        <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        Common weights used in Crossfit
        </Text>
        <View style={styles.buttonContainer}>

        
          
        </View>
        
        
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
