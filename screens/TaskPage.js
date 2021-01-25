import React from 'react'
import {View, Text} from 'react-native'

export default class TaskPage extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      item: this.props.route.params.item
    }
  }


  render(){
    return(
      <View style={{alignItems: "center", backgroundColor: "#FFFF", flex: 1}}>
        <Text> Task Page Beta</Text>
        <Text> {this.state.item.category} </Text>
        <Text> {this.state.item.repetition} </Text>
        <View>
        {
          this.state.item.repetition === 'day' ?
          this.state.item.days.map(day =>
          <Text> {day} </Text>
        ) : null
        }
        </View>
      </View>
    )
  }
}
