import React, { useState } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

// font stuff and loading
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// navigation & authentication imports
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//screen imports
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LobbyScreen from './screens/LobbyScreen';
import LogActivityScreen from './screens/LogActivityScreen';
import PreviousLogsScreen from './screens/PreviousLogsScreen';
import AnnouncementsScreen from './screens/AnnouncementsScreen';
import CreditsScreen from './screens/CreditsScreen';
import GuidesScreen from './screens/GuidesScreen';

// naviagation constans
const Stack = createStackNavigator();




function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  async function getData(){
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {
        setIsSignedIn(value)
      }
    } catch(e) {
      console.log(e)
    }
  }
  getData()
  return (
    isSignedIn ? (
      <NavigationContainer>
          <StatusBar backgroundColor="#ffe6d9"/>
      <Stack.Navigator>
        <Stack.Screen name="LobbyScreen" component={LobbyScreen} options={{header: () => null}}/>
        <Stack.Screen name="LogActivityScreen" component={LogActivityScreen} options={{header: () => null}}/>
        <Stack.Screen name="PreviousLogsScreen" component={PreviousLogsScreen} options={{header: () => null}}/>
        <Stack.Screen name="AnnouncementsScreen" component={AnnouncementsScreen} options={{header: () => null}}/>
        <Stack.Screen name="GuidesScreen" component={GuidesScreen} options={{header: () => null}}/>
        <Stack.Screen name="CreditsScreen" component={CreditsScreen} options={{header: () => null}}/>
      </Stack.Navigator>
      </NavigationContainer>
    ) : (
      <NavigationContainer>
      <StatusBar backgroundColor="#ffe6d9"/>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{header: () => null}}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{header: () => null}}/>
      </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

export default props => {
  let [fontsLoaded] = useFonts({
    'chalkboard-se-bold': require('./assets/fonts/chalkboard-se-bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <App/>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
