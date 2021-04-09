import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    height: heightScreen * .31,
    padding: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    fontSize: 30,
  },
})

export default styles
