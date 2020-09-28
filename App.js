import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProgressChart from './ProgressCircle'
import Constants from 'expo-constants'
import HomePageComponent from './HomePage'

function HomeScreen(){
  return (
    <View>
    <HomePageComponent/>
    </View>
  );
}



function StatisticsScreen(){
  return (
    <View style = {{margin: 20, flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text> Statics </Text>
    </View>
  );
}

function SettingsScreen(){
  return(
    <View style = {{margin: 20, flex:1, justifyContent: 'center',
    alignItems: 'center'}}>
      <Text> Settings </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
