import React from 'react';
import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import Constants from 'expo-constants'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor:"#DADADA"
  },
  centerAlignment: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  title: {
    fontSize: width * 0.09, 
    color: '#5D4D4A',
    fontWeight: 'bold',
  },
  optionContainer: {
    flex: 1,
    marginTop: 10,
    width: width,
    height: height*0.11,
    backgroundColor: '#DADADA',
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
    backgroundColor: "#0dceda",
    borderRadius: 30,
    padding: 12,
    elevation: 4
  },
  logOutText: {
    fontSize: width*.07,
  }
})