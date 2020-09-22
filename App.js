import React,{ Component } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Button} from 'react-native';
import {styles} from "./styles"

class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      name : "",
      lastName : "",
    }
  }

  render (){
    return (
      <SafeAreaView style = {styles.container}>
        <Text style = {styles.title}> Productivity App</Text>

        <View>
          <Text style = {styles.inputTitle}> Nombre </Text>
          <TextInput style = {styles.input}/>
        </View>
        <View>
          <Text style = {styles.inputTitle}> Apellido </Text>
          <TextInput style = {styles.input}/>
        </View>

      </SafeAreaView>
    )
  }
}

export default App
