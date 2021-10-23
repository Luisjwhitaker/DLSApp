import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

// navigation imports
import { NavigationContainer, useNavigation} from "@react-navigation/native";

export default PreviousLogsScreen = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const getLogs = async () => {
    try {
      const response = await fetch('http://192.168.100.11:100/api/task-list/');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getLogs();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text key={item.id.toString()} style={styles.logText}>
                ------------------------------------{"\n"}
                User : {item.username},{"\n"}
                Adventure slp: {item.adventure_slp},{"\n"}
                Arena slp: {item.arena_slp},{"\n"}
                Quest slp: {item.quest_slp},{"\n"}
                Date : {item.date_submitted.slice(0, 10)}
              </Text>
            </View>
          )}
        />
        <Text></Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6d9',
    alignItems: 'center',
    width: '100%',
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#ffe6d9',
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 5,
  },
  logText: {
    width: '100%',
    fontFamily: "chalkboard-se-bold",
    fontSize: 20,
  },
  buttonView: {
    marginBottom: 150,
    width: '80%',
    borderRadius: 20 ,
  },
  buttonTouchable: {
    marginBottom: 20,
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

});
