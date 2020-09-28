import React from 'react';
import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

const styles= StyleSheet.create({
  HomePageTitle:{
    paddingTop: Constants.statusBarHeight,
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 50,
    alignSelf: 'center',
  },
});

export {styles};
