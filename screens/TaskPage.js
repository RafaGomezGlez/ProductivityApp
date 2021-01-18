import React from 'react'
import {View, Text} from 'react-native'

export default class TaskPage extends React.Component{


  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    return(
      <View style={{alignItems: "center", backgroundColor: "#FFFF", flex: 1}}>
        <Text> Task Page Beta</Text>
      </View>
    )
  }
}
