import React from 'react';
import {} from  'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../screens/HomePage'
import FormularyPage from '../screens/FormularyPage'

const HomeStack = createStackNavigator();

//Declaration of each StackScreen whith their respectives names
function HomeStackScreen(){
  return(
    <HomeStack.Navigator >
      <HomeStack.Screen
        name = "Home"
        component={HomePage}
        options = {{
          headerShown: false,
          headerStyle:{
            backgroundColor: '#2D4D73',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },

        }}
      />
      <HomeStack.Screen
        name = "Formulary"
        component={FormularyPage}
        options = {{
          title: "Add task",
          headerStyle:{
            backgroundColor: '#2D4D73',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </HomeStack.Navigator>
  );
}


export default HomeStackScreen
