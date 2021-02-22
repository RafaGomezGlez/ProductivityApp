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
      numbs: [...new Array(99)].map((value, index) => (index+1).toString()),
    }
  }

  renderItem = ({item, index}) => (
      <TouchableOpacity style={styles.flatListItem} key={item.id} onPress={() => this.pickElement(item)}>
        <Text style={styles.flatListTitle}> {item} </Text>
      </TouchableOpacity>
    )


  componentDidMount = () => {
    this.setState({
      title: this.props.title,
      elementToChange: this.props.elementToChange
    })
  }

  pickElement = (item) => {
    this.props.changeElem(item, this.state.elementToChange)
    this.props.changeModalActive()
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
                <Text style={styles.titleStyle}>{this.state.title}</Text>
                <View>
                  <Ionicons name="close" size={35} color={'#1389CE'}/>
                </View>
              </View>

              <View style={styles.flatListContainer}>
                <FlatList
                  data={this.state.numbs}
                  keyExtractor={item => item.id}
                  ItemSeparatorComponent={Divider}
                  renderItem={this.renderItem}
                  initialNumToRender={5}
                  maxToRenderPerBatch={5}
                />
              </View>

            </View>
          </View>
      </Modal>
    )
  }
}

export default ModalView
