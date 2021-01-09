import React from 'react';
import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import Constants from 'expo-constants'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

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
    marginTop: StatusBar.currentHeight,
  },
  optionContainer: {
    flex: 1,
    marginTop: 10,
    width: width,
    height: height*0.11,
  },
  option: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  textOption: {
    fontSize: width*.075,
  },
  textTitle: {
    fontSize:width*.13,
    fontWeight: 'bold',
  },
  separator: {
    height: 2,
    width: "95%",
    backgroundColor: "#CED0CE",
    alignSelf: 'center'
  },
  logOut: {
    marginTop: 10,
    backgroundColor: 'yellow',
    borderRadius: 30,
    padding: 12
  },
  logOutText: {
    fontSize: width*.07,
  }
})