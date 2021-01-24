import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'


import styles from '../styles/cardTaskStyle'

const AddCardTask = props => {
  return(
  <TouchableOpacity onPress={props.navigateFormulary}>
    <View style= {[styles.card, {backgroundColor: props.item.color, alignItems: "center"}]}
      >
      <Text style={[styles.text, {textAlign: 'center'}]}>{props.item.title}</Text>
      <AntDesign name="pluscircleo" size={55} />
    </View>
  </TouchableOpacity>
)}

export default AddCardTask
