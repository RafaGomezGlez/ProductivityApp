import React from 'react';
import {Dimensions} from  'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import SettingsPage from '../screens/SettingsPage'

const SettingsStack = createStackNavigator();
const screenWidth = Dimensions.get('window').width;
 
function SettingsStackScreen(){
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name = "Settings"
        component = {SettingsPage}
        options = {{
          headerShown: true,
          headerStyle:{
            backgroundColor: '#DADADA',
          }, 
          headerTitleStyle:{
            fontSize: screenWidth*0.09,
            color: '#5D4D4A',
          }
        }}
      />
    </SettingsStack.Navigator>
  )
}

export default SettingsStackScreen



