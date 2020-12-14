import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ProgressChart from './components/ProgressCircle'
import Constants from 'expo-constants'
import HomePageComponent from './screens/HomePage'

import { Ionicons, AntDesign } from '@expo/vector-icons'

//Declaring the bottom tab navigator
const Tab = createBottomTabNavigator();

//Declaring the 3 Stack navigators for each bottom tab
const HomeStack = createStackNavigator();
const StatisticsStack = createStackNavigator();
const SettingsStack = createStackNavigator();

//Declaration of each StackScreen whith their respectives names
function HomeStackScreen(){
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen
        name = "Home"
        component={HomeScreen}
        options = {{
          headerStyle:{
            backgroundColor: '#2D4D73'
          },
          headerTintColor: '#fff',
          headerTytleStyle: {
            fontWeight: 'bold'
          },

        }}
      />
      <HomeStack.Screen
        name = "Formulary"
        component={FormularyScreen}
        options = {{
          headerStyle:{
            backgroundColor: '#2D4D73'
          },
          headerTintColor: '#fff',
          headerTytleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
    </HomeStack.Navigator>
  );
}

function StatisticsStackScreen(){
  return (
    <StatisticsStack.Navigator>
      <StatisticsStack.Screen
        name = "Statistics"
        component = {StatisticsScreen}
        options = {{
          headerStyle:{
            backgroundColor: '#2D4D73'
          },
          headerTintColor: '#fff',
          headerTytleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
    </StatisticsStack.Navigator>

  )
}

function SettingsStackScreen(){
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name = "Settings"
        component = {SettingsScreen}
        options = {{
          headerStyle:{
            backgroundColor: '#2D4D73'
          },
          headerTintColor: '#fff',
          headerTytleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
    </SettingsStack.Navigator>
  )
}

//Components in our HomeScreen
function HomeScreen({navigation}){
  return (
    <View>
      <HomePageComponent/>
      <View style = {{margin: 50}}>
        <Button
          title = "Press me"
          onPress = {() => navigation.navigate('Formulary')}
        />
      </View>
    </View>
  );
}

//Components in our StatisticsScreen
function StatisticsScreen(){
  return (
    <View style = {{margin: 20, flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text> Statics </Text>
    </View>
  );
}

//Components in out SettingsScreen
function SettingsScreen(){
  return(
    <View style = {{margin: 20, flex:1, justifyContent: 'center',
    alignItems: 'center'}}>
      <Text> Settings </Text>
    </View>
  );
}

//StackComponent for the button in HomePage
function FormularyScreen(){
  return (
    <View style = {{margin: 20, flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text> Formulary Beta </Text>
    </View>
  );
}

//Intended to be separated
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ? 'ios-home' : 'ios-home'
                }
                size={size}
                color={color}
              />
            );
          }
          else if (route.name === 'Statistics'){
            return (
              <Ionicons
                name={focused ? 'barshchart' : 'graphql'}
                size={size}
                color={color}
              />
            )
          }
          else if (route.name === 'Settings') {
            return (
              <Ionicons
                name={focused ? 'ios-list-box' : 'ios-list'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options = {{

        }}
        />
      <Tab.Screen name="Statistics" component={StatisticsStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
}

//This is going to be like this in order to create a login screen
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}