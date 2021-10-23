import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity} from 'react-native';

// navigation imports
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation} from "@react-navigation/native";

export default function RegisterScreen() {
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');
  const [password2, setPassword2] = useState('password2');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Welcome, Scholars!</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
            style={styles.inputWide}
            placeholder=" Username *Case-sensitive"
            onChangeText={(val) => setUsername(val)}
            keyboardType="default"
        />
        <TextInput
            style={styles.inputWide}
            placeholder=" Password"
            onChangeText={(val) => setPassword(val)}
            keyboardType="default"
            secureTextEntry={true}
        />
        <TextInput
            style={styles.inputWide}
            placeholder=" Verify Password"
            onChangeText={(val) => setPassword2(val)}
            keyboardType="default"
            secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={SubmittRegister}
          underlayColor='#fff'>
            <Text style={styles.baseText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => navigation.navigate('LoginScreen')}
          underlayColor='#fff'>
            <Text style={styles.baseText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>

  );

  async function SubmittRegister(){
    try {

      await fetch('http://192.168.100.11:100/api/register/', {
        method:'post',
        mode:'no-cors',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username: username,
          password : password,
          password2: password2,
        })
      }).then(response => response.json() )
        .then(data => console.log(data) )
        .catch(error => console.log(error));;

    } catch (e) {
      console.log(e);
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6d9',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

  },
  inputView: {
    width: '85%',
    alignItems: 'center',
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
    marginTop: 150,
    textAlign: 'center',
  },

});
