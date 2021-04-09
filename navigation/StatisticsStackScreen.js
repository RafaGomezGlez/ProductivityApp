import React from 'react';
import {Dimensions} from  'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import StatisticsScreen from '../screens/StatisticsPage'

const StatisticsStack = createStackNavigator();
const screenWidth = Dimensions.get('window').width;

function StatisticsStackScreen(){
  return (
    <StatisticsStack.Navigator headerMode="none">
      <StatisticsStack.Screen
        name = "Statistics"
        component = {StatisticsScreen}
        options = {{
          headerShown: false,
          headerStyle:{
            backgroundColor: '#DADADA',
          }, 
          headerTitleStyle:{
            fontSize: screenWidth*0.09,
            color: '#5D4D4A',
          }
        }}
      />
    </StatisticsStack.Navigator>

  )
} 



export default StatisticsStackScreen
