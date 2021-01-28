import React from 'react';
import {} from  'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import SettingsPage from '../screens/SettingsPage'

const SettingsStack = createStackNavigator();


function SettingsStackScreen(){
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name = "Settings"
        component = {SettingsPage}
        options = {{
          headerShown: false,
        }}
      />
    </SettingsStack.Navigator>
  )
}

export default SettingsStackScreen
