import React from 'react';
import {} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants'

import StatisticsStackScreen from './navigation/StatisticsStackScreen'
import HomeStackScreen from './navigation/HomeStackScreen'
import SettingsStackScreen from './navigation/SettingsStackScreen'
import MainTabNavigator from './navigation/MainTabNavigator'


//This is going to be like this in order to create a login screen
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
