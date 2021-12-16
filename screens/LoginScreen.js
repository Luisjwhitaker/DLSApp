import React, {useState} from 'react';
import { StyleSheet, StatusBar, Text, View, Button, Image, Alert, TextInput, TouchableOpacity} from 'react-native';

// navigation and auth imports
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function LoginScreen() {
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');
  const [token, setToken] = useState(null);
  const navigation = useNavigation();

  const storeData = async (value) => {
    try {
      if (value == undefined) {
        alert('Invalid Login: Please Try Again')
      } else {
        await AsyncStorage.setItem('token', String(value))
        navigation.navigate('Splash')
        console.log('Data successfully saved')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.logoView}>
          <Image
              style={styles.logoSize}
              source={require('../assets/dls-logo.png')}
          />
        </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputWide}
          placeholder=" Username *Case-sensitive"
          onChangeText={(val) => setUsername(val)}
          keyboardType="default"
          autoCapitalize='none'
        />
        <TextInput
          style={styles.inputWide}
          placeholder=" Password"
          onChangeText={(val) => setPassword(val)}
          keyboardType="default"
          secureTextEntry={true}
          autoCapitalize='none'
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={SubmitLogin}
          underlayColor='#fff'>
            <Text style={styles.baseText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => navigation.navigate('RegisterScreen')}
          underlayColor='#fff'>
            <Text style={styles.baseText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>

  );

// Function for LogIn button
  async function SubmitLogin(){
    try {
      await fetch('https://dlssite.herokuapp.com/api/login/', {
        method:'post',
        mode:'no-cors',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username: username,
          password : password,
        })
      }).then(response => response.json())
        .then(response => storeData(JSON.stringify(response['token'])))
        .catch(error => console.log(error))
    } catch (e) {
      console.log(e)
      Alert.alert('could not connect to website')
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
  inputView: {
    width: '85%',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  inputWide: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    fontFamily: "chalkboard-se-bold",
    borderRadius: 15 ,
  },
  buttonView: {
    marginBottom: 150,
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
