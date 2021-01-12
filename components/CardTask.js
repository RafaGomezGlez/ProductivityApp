import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

const CardTask = props => {
  return(
  <TouchableOpacity onPress={props.changeColor}>
    <View style={{
      backgroundColor: props.item.color,
      borderRadius: 10,
      height: 250,
      padding: 50,
      marginLeft: 5,
      marginRight: 5,
      }}
      >
      <Text style={{fontSize: 30}}>{props.item.title}</Text>
      <Text>{props.item.text}</Text>
    </View>
  </TouchableOpacity>
)}

export default CardTask
