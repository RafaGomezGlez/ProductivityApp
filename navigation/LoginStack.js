import React from 'react';
import {} from  'react-native'
import LoginScreen from '../screens/LoginPage'
import SignUpScreen from '../screens/SignUpPage'
import { createStackNavigator } from '@react-navigation/stack';

const LoginStack = createStackNavigator();

function LoginStackNavigator() {
  return(
        <LoginStack.Navigator headerMode="screen">
          <LoginStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <LoginStack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{
              headerShown:true,
              title: "Register",
              headerTitle: 'Create a new account'
            }}
          />
        </LoginStack.Navigator>
  );
}

export default LoginStackNavigator;