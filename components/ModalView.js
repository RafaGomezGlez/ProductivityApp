import React from 'react'
import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native'
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons'
import { Divider} from 'react-native-paper';

import styles from '../styles/ModalViewStyle'

class ModalView extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      modalActive: true,
      title: this.props.title,
      numbs: [...new Array(100)].map((value, index) => index.toString()),
    }
  }

  componentDidMount = () => {
    this.setState({
      title: this.props.title,
    })
  }

  render(){
  return(
      <Modal transparent statusBarTranslucent={true} visible={this.state.modalActive} animationType="slide">
          <View style={styles.container}>
            <View style={styles.pickerContainer}>

              <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.changeModalActive()}>
                  <Ionicons name="close" size={35}/>
                </TouchableOpacity>
                <Text>{this.state.title}</Text>
                <View></View>
              </View>

              <View style={styles.flatListContainer}>
                <FlatList
                  data={this.state.numbs}
                  keyExtractor={item => item.id}
                  ItemSeparatorComponent={Divider}
                  renderItem={({item, index}) => (
                    <TouchableOpacity style={styles.flatListItem} key={item.id}>
                      <Text style={styles.flatListTitle}> {item} </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>

            </View>
          </View>
      </Modal>
    )
  }
}

export default ModalView
