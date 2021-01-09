import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import RateUs from '../components/RateUs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {styles} from '../styles/SettingsStyles'

export default class Setting extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  overlay = () => {
    this.setState({active:true})
  }

  isRateVisible = () => {
    this.setState({active:false})
  }

  render() {
    return(
      <View>

        <View style = {[styles.optionContainer,styles.centerAlignment]}>
          <View style = {styles.option} > 
            <Icon 
              name = {this.props.info.icon} 
              color = "black" 
              size = {40} 
            />

            <Text 
              style= {styles.textOption}
            > {this.props.info.text} 
            </Text>
            
            <Icon2 
              name = "chevron-right" 
              color = "black" 
              size = {30} 
            />    
          </View>
        </View>
        
        <View style = {styles.separator}/>
      </View>
    );
  }
}

