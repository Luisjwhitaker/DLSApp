import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

// navigation imports
import { NavigationContainer, useNavigation} from "@react-navigation/native";

export default SLPPriceScreen = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const getLogs = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=PHP');
      const json = await response.json();
      setData(json);
      console.log(json)
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
          renderItem={({ item }) => (
            <View>
              <Text style={styles.logText}>
                {item.object.php}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => navigation.navigate('RegisterScreen')}
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
