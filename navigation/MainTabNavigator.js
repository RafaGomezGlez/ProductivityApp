import React from 'react';
import {} from 'react-native'
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from './HomeStackScreen'
import SettingsStackScreen from './SettingsStackScreen'
import StatisticsStackScreen from './StatisticsStackScreen'

//Declaring the bottom tab navigator
const Tab = createBottomTabNavigator();

//Intended to be separated
function MainTabNavigator() {
  return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'Statistics') {
                iconName = focused ? 'stats-chart-sharp' : 'stats-chart-outline'
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            initialRouteName: "Home",
            activeTintColor: '#1979a9',
            inactiveTintColor: 'gray',
            labelStyle: {fontSize: 15},
            inactiveBackgroundColor: 'white',
            style: { height: 55 }

          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Statistics" component={StatisticsStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />

        </Tab.Navigator>
  );
}

export default MainTabNavigator
