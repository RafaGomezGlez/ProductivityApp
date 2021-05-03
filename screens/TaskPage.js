import React from 'react'
import {View, ScrollView, Text, TouchableOpacity} from 'react-native'
import { Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'

import FocusAwareStatusBar from '../components/FocusAwareStatusBar'
import Calendar from '../components/Calendar'

import styles from '../styles/taskScreenStyles'

export default class TaskPage extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      tabWeek: true,
      tabCalendar: false,
      daysToDo: this.props.route.params.item.daysToDo,
      cuantification: this.props.route.params.item.cuantification,
      repetition: this.props.route.params.item.repetition,
      mainColor: this.props.route.params.item.mainColor,
      darkerColor: this.props.route.params.item.darkerColor,
      brighterColor: this.props.route.params.item.brighterColor,
    }
  }


  render(){
    return(
      <ScrollView style={styles.taskScreenStyles}>
        <FocusAwareStatusBar  barStyle="dark-content" backgroundColor={this.state.darkerColor}/>
        <View style={[styles.topSquare, {backgroundColor: this.state.brighterColor}]}>
        </View>
        <View style={styles.circle}>
          <FontAwesome5 name='running' size={90}/>
        </View>
        <View style={styles.continue}>
          {this.state.cuantification === "time" ?
          <TouchableOpacity>
            <MaterialCommunityIcons name='timer-outline' size={75}/>
          </TouchableOpacity> : null }
          <TouchableOpacity onPress={() => this.props.route.params.continueTask(this.props.route.params.title)}>
            <Text style={styles.textContinue}> Continue </Text>
          </TouchableOpacity>
        </View>

        {this.state.repetition === "day" ? 
         <View style={styles.tabsGrouping}>
         <TouchableOpacity
         style={[styles.leftTab, {borderColor: this.state.mainColor}, this.state.tabWeek ? {backgroundColor: this.state.mainColor} : styles.tabInactive]}
         onPress={() => this.setState({tabWeek: true, tabCalendar: false})}>
           <Text style={this.state.tabWeek ? styles.textTabActive : styles.textTabInactive}> Semana </Text>
         </TouchableOpacity>
         <TouchableOpacity
         style={[styles.rightTab, {borderColor: this.state.mainColor}, this.state.tabCalendar ? {backgroundColor: this.state.mainColor} : styles.tabInactive]}
         onPress={() => this.setState({tabWeek: false, tabCalendar: true})}>
           <Text style={this.state.tabCalendar ? styles.textTabActive : styles.textTabInactive}> Calendario </Text>
         </TouchableOpacity>
       </View>
       : 
       <View style={[styles.oneTab, {borderColor: this.state.mainColor}, {backgroundColor: this.state.mainColor}]}>
         <Text style={styles.textTabActive}>{this.state.repetition === "week" ? "Semana" : "Mes"}</Text>
       </View>
       }
      

        {this.state.tabCalendar ? <Calendar daysToDo={this.state.daysToDo}/> : null}


      </ScrollView>
    )
  }
}
