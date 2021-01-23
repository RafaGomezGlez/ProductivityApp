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
        <Text> {this.props.route.params.item.category} </Text>
        <Text> {this.props.route.params.item.repetition} </Text>
        <View>
        {
          this.props.route.params.item.repetition === 'day' ?
          this.props.route.params.item.days.map(day =>
          <Text> {day} </Text>
        ) : null
        }
        </View>
      </View>
    )
  }
}
