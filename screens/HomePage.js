import React from 'react';
import {View, Text} from 'react-native'
import ProgressChart from '../components/ProgressCircle'
import {styles} from '../styles/styles'



export default class HomePageComponent extends React.Component{
  render(){
    return (
      <View>
        <Text style = {styles.HomePageTitle}> Bienvenido </Text>
        <View style = {styles.HomePageTitle}>
          <ProgressChart/>
        </View>
      </View>
    );
  }
}