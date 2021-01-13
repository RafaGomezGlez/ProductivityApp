import React from 'react';
import {View, Text, Button, TextInput} from 'react-native'
import styles from '../styles/FormularyStyles'

class FormularyPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      task: '',
    }
  }

  changeTask = task => {
    this.setState({task})
  }

  addTask = () => {
    this.props.route.params.addTask(this.state.task)
    this.props.navigation.goBack()
  }

  render(){
    return (
      <View style={{alignItems: "center", backgroundColor: "#FFFF", flex: 1}}>
          <Text> Formulary Beta </Text>
        <View style = {styles.input}>
          <View style = {styles.textInput}>
            <TextInput
            onChangeText={this.changeTask}
            value={this.state.task}
            />
          </View>
          <Button title="Click me" onPress={this.addTask}/>
        </View>
      </View>
    );
  }
}

export default FormularyPage
