import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

import styles from '../styles/cardTaskStyle'

const CardTask = props => {
  return(

  <TouchableOpacity onPress={props.navigateCardTask}>
    <View style= {[styles.card, {backgroundColor: props.item.mainColor}]}
      >
      <Text style={styles.text}>{props.item.title}</Text>
      <Text>{props.item.text}</Text>
    </View>
  </TouchableOpacity>
)}

export default CardTask
