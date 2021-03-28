import React from 'react';
import { Image, View, Text, Modal, TextInput, KeyboardAvoidingView, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import styles from '../styles/ModalViewTimeStyles'

class ModalViewTime extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: this.props.title,
      minutes: "",
      seconds: ""
    }
  }

  onChangeText(text, type) {
    if(!/^\d*$/.test(text)) return
    if(type === "seconds" && parseInt(text) > 59 ) return
    this.setState({
      [type]: text
    })
    if(type == "minutes" && text.length == 2){
      this.secondTextInput.focus()
    }
  }

  onPressOut(type){
    if(this.state[type].length == 1){
      this.setState({
        [type]: '0'+this.state[type]
      })
    }
  }

  pressOkButton(){
    let minutes = this.state.minutes
    if(minutes === "") minutes = "00"
    let seconds = this.state.seconds
    if(seconds === "") seconds = "00"
    this.props.changeCuantificationTime(minutes, seconds)
    this.props.changeModalTimeActive()
  }

  render() {
    return (
    <Modal transparent statusBarTranslucent={true} visible={true}>
     <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <View style={styles.header}>
          <View>
            <Ionicons name="close" size={35} color={'#1389CE'}/>
          </View>
          <Text style={styles.textHeader}>{this.state.title}</Text>
          <TouchableOpacity onPress={this.props.changeModalTimeActive}>
            <Ionicons name="close" size={35}/>
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <TextInput
          value={this.state.minutes}
          onChangeText={text =>  this.onChangeText(text, "minutes")}
          onEndEditing={() => this.onPressOut("minutes")}
          keyboardType="numeric"
          maxLength={2}
          placeholder="00"
          textAlign={"right"}
          placeholderTextColor="#CACACA"
          style={styles.textInput}
          />
          <Text style={styles.subindex}>m</Text>
          <Text style={styles.textInput}>: </Text>
          <TextInput
          value={this.state.seconds}
          onChangeText={text =>  this.onChangeText(text, "seconds")}
          onEndEditing={() => this.onPressOut("seconds")}
          keyboardType="number-pad"
          maxLength={2}
          placeholder="00"
          textAlign={"right"}
          placeholderTextColor="#CACACA"
          ref={(input) => { this.secondTextInput = input; }}
          style={styles.textInput}
          />
          <Text style={styles.subindex}>s</Text>
        </View>
        { this.state.minutes !== "" || parseInt(this.state.seconds) > 10?
        <TouchableOpacity style={styles.okButton} onPress={() => this.pressOkButton()}>
          <Text style={styles.okText}>OK!</Text>
        </TouchableOpacity> :
        null }
      </View>
     </View>
    </Modal>
    );
  }
}

export default ModalViewTime
