import React from 'react';
import {} from  'react-native'
import LoginScreen from '../screens/LoginPage'
import SignUpScreen from '../screens/SignUpPage'
import { createStackNavigator } from '@react-navigation/stack';

const LoginStack = createStackNavigator();

function LoginStackNavigator() {
  return(
        <LoginStack.Navigator headerMode="none">
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
          />
        </LoginStack.Navigator>
  );
}

export default LoginStackNavigator;