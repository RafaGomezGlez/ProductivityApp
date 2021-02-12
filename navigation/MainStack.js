import React from 'react';
import {View, Text} from  'react-native'
import MainTabNavigator from './MainTabNavigator'
import LoginStack from './LoginStack'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'

const Stack = createStackNavigator();


function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

class MainStackNavigator extends React.Component {

  render(){
    return(
          <Stack.Navigator headerMode="none">
            {this.props.user.uid===null ? (
                // We haven't finished checking for the token yet
              <Stack.Screen name="Splash" component={SplashScreen} />
              
            ) : this.props.user.uid===undefined || this.props.user.uid === 'null' ? (
                // No token found, user isn't signed in
              <Stack.Screen
                name="LoginScreen"
                component={LoginStack}
                options={{
                  headerShown: false,
                }}
              />
            ) : (
              // User is signed in
              <Stack.Screen
                name="Home"
                component={MainTabNavigator}
              />
            )}
          </Stack.Navigator>
    );
  }

}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
)(MainStackNavigator)