import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProgressChart from './Ptr'
import Constants from 'expo-constants'


class HomePageComponent extends React.Component{
  render(){
    return (
      <View>
        <Text style = {styles.HomePageTitle}> Home Page </Text>
        <ProgressChart/>
      </View>

    );
  }
}

const styles= StyleSheet.create({
  HomePageTitle:{
    paddingTop: Constants.statusBarHeight,
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 50,
    alignSelf: 'center',
  },
})


function HomeScreen(){
  return (
    <HomePageComponent/>
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
      <Tab.Screen name="Home" style={styles.IconFont} component={HomeScreen} />
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
