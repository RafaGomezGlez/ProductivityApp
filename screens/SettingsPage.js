import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import Setting from '../components/Setting'
import {styles} from '../styles/SettingsStyles'
import {icons} from '../data/iconsData'


export default class SettingsPage extends React.PureComponent{


  render() {
    return(
      <SafeAreaView style = {styles.container} >
        <ScrollView> 

          <StatusBar backgroundColor="white" barStyle={'dark-content'}/>

          <View style = {[styles.title,styles.centerAlignment]}>
            <Text style =  {styles.textTitle}> Configuración </Text>  
          </View>
          
          {icons.map(icon => (
            <Setting info = {icon} />
          ))}


        </ScrollView>
      </SafeAreaView>
    );
  }
}


