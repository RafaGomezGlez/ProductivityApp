import React from 'react';
import {View, TouchableOpacity} from  'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../screens/HomePage'
import FormularyPage from '../screens/FormularyPage'
import TaskPage from '../screens/TaskPage'

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
        }}
      />
      <HomeStack.Screen
        name = "Formulary"
        component={FormularyPage}
        options = {{
          title: "Add task",
          headerStyle:{
            backgroundColor: '#1389CE',
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <HomeStack.Screen
        name = "TaskPage"
        component={TaskPage}
        options = { ({route, navigation}) => ({
          headerStyle:{
            backgroundColor: '#1389CE',
            height: 60,
          },
          headerRight: () => (
            <View>
              <TouchableOpacity style={{marginRight: 20}} onPress={() =>
                route.params.removeTask(route.params.nameTitle)
              }>
                <Ionicons name="trash-outline" size={45} />
              </TouchableOpacity>
            </View>
          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          title: route.params.nameTitle
        })}
      />
    </HomeStack.Navigator>
  );
}


export default HomeStackScreen
