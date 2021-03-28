import React from 'react'
import {View, Text} from 'react-native'

import {styles} from '../styles/HomeScreenStyle'

import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

//props.icon
//props.meta
//props.proporcion

export default TasksHomePage = props => (
    <View style={[styles.containerSquare, {borderColor: props.task.mainColor}]}>
      <View style={styles.logo}>
        <Ionicons name= {props.task.icon} size={65} color='black' />
      </View>
      <View style={styles.columnaMitad}>
        <Text style={styles.textMeta}> {props.task.meta} </Text>
        <Text style={styles.textCantidad}> {props.task.proporcion} </Text>
      </View>
    </View>
)
