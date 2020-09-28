import React from 'react';
import {View, Text} from 'react-native'
import ProgressChart from './ProgressCircle'
import {styles} from './Styles'



export default class HomePageComponent extends React.Component{
  render(){
    return (
      <View>
        <Text style = {styles.HomePageTitle}> HomePage </Text>
        <ProgressChart/>
      </View>
    );
  }
}
