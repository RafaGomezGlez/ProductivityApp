import React from 'react';
import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import Constants from 'expo-constants'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').width

export const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#e4e6eb'
  },
  centerAlignment: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  title: {
    width:width*0.90,
    height: height*0.08, 
    marginTop: StatusBar.currentHeight + 5,
    alignItems: 'center',
  },
  optionContainer: {
    flex: 1,
    marginTop: 10,
    width: width,
    height: height*0.2,
  },
  option: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  textOption: {
    fontSize: 20,
  },
  textTitle: {
    fontSize:30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    height: 2,
    width: "95%",
    backgroundColor: "#CED0CE",
    alignSelf: 'center'
  },

})