import React from 'react';
import {} from  'react-native'
import MainTabNavigator from './MainTabNavigator'
import LoginStack from './LoginStack'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return(
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="LoginStack"
            component={LoginStack}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={MainTabNavigator}
          />
        </Stack.Navigator>
  );
}

export default MainStackNavigator;