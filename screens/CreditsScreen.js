import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity} from 'react-native';

// navigation imports
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation} from "@react-navigation/native";

export default function CreditsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Credits:</Text>
      </View>
      <View style={styles.buttonAllign}>
      <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={() => navigation.navigate('LobbyScreen')}
        underlayColor='#fff'>
          <Text style={styles.baseText}>Back</Text>
      </TouchableOpacity>
      </View>
    </View>
  );

}
  // Stylesheets
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffe6d9',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    buttonAllign:{
    width: '80%',
    },
    buttonTouchable: {
      marginBottom: 30,
      width: '100%',
      borderRadius: 10 ,
      fontFamily: "chalkboard-se-bold",
      backgroundColor: '#f2f2f2',
      borderWidth: 2,
    },
    baseText: {
      fontFamily: "chalkboard-se-bold",
      fontSize: 30,
      textAlign: 'center',
      width: '100%',
    },
    titleText: {
      fontFamily: "chalkboard-se-bold",
      fontSize: 60,
      marginTop: 150,
      textAlign: 'center',
    },

  });
