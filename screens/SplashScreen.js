import React, {useState} from 'react';
import { StyleSheet, StatusBar, Text, View, Button, Image, Alert, TextInput, TouchableOpacity} from 'react-native';

// navigation and auth imports
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function SplashScreen() {
  const navigation = useNavigation();
  const [isSignedIn, setIsSignedIn] = useState(null);
  return (
    <View style={styles.container}>
        <View style={styles.logoView}>
          <Image
              style={styles.logoSize}
              source={require('../assets/dls-logo.png')}
          />
        </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={getData}
          underlayColor='#fff'>
            <Text style={styles.baseText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
  async function getData(){
    try {
      console.log(isSignedIn)
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {
        setIsSignedIn(value)
        startApp()
      }
      else{
        startApp()
      }
    } catch(e) {
      console.log(e)
    }
    console.log(isSignedIn)
  }
  async function startApp(){
    try {
      if (isSignedIn!== null) {
        navigation.navigate('Root')
      }
      else{
        navigation.navigate('Auth')
      }
    } catch(e) {
      console.log(e)
    }
  }
}



// Stylesheets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6d9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  buttonView: {
    marginTop: 250,
    width: '80%',
    borderRadius: 20 ,
  },
  buttonTouchable: {
    marginBottom: 10,
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
  },
  titleText: {
    fontFamily: "chalkboard-se-bold",
    fontSize: 60,
    textAlign: 'center',
  },
  logoView: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  logoSize: {
    width: 250,
    height: 250,
  },

});
