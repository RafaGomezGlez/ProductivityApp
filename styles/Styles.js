import React from 'react';
import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

const styles= StyleSheet.create({
  HomePageTitle:{
    paddingTop: Constants.statusBarHeight+20,
    fontSize:40,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export {styles};