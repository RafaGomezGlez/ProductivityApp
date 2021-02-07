import React from 'react'
import {View, Text, Modal} from 'react-native'
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons'

import styles from '../styles/ModalViewStyle'

function ModalView(props){
  return(
    <Modal transparent={true} visible={false} animationType="slide">
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <View style={styles.header}>
              <Ionicons name="close" size={35} />
              <Text>Age</Text>
              <View></View>
            </View>
            <Text>1</Text>
          </View>
        </View>
    </Modal>
  )
}

export default ModalView
