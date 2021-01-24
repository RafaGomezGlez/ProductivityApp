import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import Setting from '../components/Setting'
import {styles} from '../styles/SettingsStyles'
import {icons} from '../data/iconsData'
import FocusAwareStatusBar from '../components/FocusAwareStatusBar'


export default class SettingsPage extends React.PureComponent{


  render() {
    return(
      <SafeAreaView style = {styles.container} >
        <ScrollView> 
          <FocusAwareStatusBar  barStyle="dark-content" backgroundColor="#1389CE"/>
          <View style = {styles.title}>
            <Text style =  {styles.textTitle}> Ajustes</Text>  
          </View>
          
          {icons.map(icon => (
            <Setting info = {icon} />
          ))}

          <View style = {[styles.logOut, styles.centerAlignment]} > 
            <Text style = {styles.logOutText}> Cerrar sesión </Text>
          </View>


        </ScrollView>
      </SafeAreaView>
    );
  }
}

