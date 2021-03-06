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
import SplashScreen from './screens/SplashScreen';
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
  return (
      <NavigationContainer>
      <StatusBar backgroundColor="#ffe6d9"/>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name='Splash' options={{ headerShown: false }} component={SplashScreen} />
          <Stack.Screen name='Auth' options={{ headerShown: false }} component={AuthStack} />
          <Stack.Screen name='Root' options={{ headerShown: false }} component={RootStack} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
// the stack that will be shown if the user is NOT logged in
const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{header: () => null}}/>
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{header: () => null}}/>
  </Stack.Navigator>
);
// the stack that will be shown if the user is logged in
const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="LobbyScreen" component={LobbyScreen} options={{header: () => null}}/>
    <Stack.Screen name="LogActivityScreen" component={LogActivityScreen} options={{header: () => null}}/>
    <Stack.Screen name="PreviousLogsScreen" component={PreviousLogsScreen} options={{header: () => null}}/>
    <Stack.Screen name="AnnouncementsScreen" component={AnnouncementsScreen} options={{header: () => null}}/>
    <Stack.Screen name="GuidesScreen" component={GuidesScreen} options={{header: () => null}}/>
    <Stack.Screen name="CreditsScreen" component={CreditsScreen} options={{header: () => null}}/>
  </Stack.Navigator>
);

// load font
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
