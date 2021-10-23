import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity} from 'react-native';

// navigation imports
import { NavigationContainer, useNavigation} from "@react-navigation/native";

export default LogActivityScreen = () => {

  const [adventureSlp, setAdventureSlp] = useState('');
  const [arenaSlp, setArenaSlp] = useState('');
  const [questSlp, setQuestSlp] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Daily Log</Text>
        <Text style={styles.titleSubText}>Date today</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
            style={styles.inputWide}
            placeholder=" Adventure SLP"
            onChangeText={(val) => setAdventureSlp(val)}
            keyboardType="number-pad"
        />
        <TextInput
            style={styles.inputWide}
            placeholder=" Arena SLP"
            onChangeText={(val) => setArenaSlp(val)}
            keyboardType="number-pad"
        />
        <TextInput
            style={styles.inputWide}
            placeholder=" Quest SLP"
            onChangeText={(val) => setQuestSlp(val)}
            keyboardType="number-pad"
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={SubmitLog}
          underlayColor='#fff'>
            <Text style={styles.baseText}>Submit Log</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => navigation.navigate('LobbyScreen')}
          underlayColor='#fff'>
            <Text style={styles.baseText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>

  );

  async function SubmitLog(){
    try {

      await fetch('http://192.168.100.11:100/api/task-create/', {
        method:'post',
        mode:'no-cors',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          user: 1,
          adventure_slp : adventureSlp,
          arena_slp : arenaSlp,
          quest_slp : questSlp,
        })
      });

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
    marginTop: 50,
    textAlign: 'center',
  },
  titleSubText: {
    fontFamily: "chalkboard-se-bold",
    fontSize: 20,
    textAlign: 'center',
  },

});
