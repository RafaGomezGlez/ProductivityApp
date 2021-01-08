import React from 'react';
import {} from  'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import StatisticsScreen from '../screens/StatisticsPage'

const StatisticsStack = createStackNavigator();

function StatisticsStackScreen(){
  return (
    <StatisticsStack.Navigator headerMode="none">
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



export default StatisticsStackScreen
