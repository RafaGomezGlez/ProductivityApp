import React from 'react'
import {View, ScrollView, Text, TouchableOpacity} from 'react-native'
import { Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'

import FocusAwareStatusBar from '../components/FocusAwareStatusBar'
import Graph from '../components/IndividualGraph';


import styles from '../styles/taskScreenStyles'

export default class TaskPage extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      tabWeek: true,
      tabCalendar: false,
      mainColor: this.props.route.params.mainColor,
      darkerColor: this.props.route.params.darkerColor,
      brighterColor: this.props.route.params.brighterColor,
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
          <TouchableOpacity>
            <MaterialCommunityIcons name='timer-outline' size={75}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textContinue}> Continue </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.yourDaysGrouping}>
          <Text style={styles.yourDaysText}> Tus días </Text>
        </View>
        <View style={styles.tabsGrouping}>
          <TouchableOpacity
          style={[styles.leftTab, {borderColor: this.state.mainColor}, this.state.tabWeek ? {backgroundColor: this.state.mainColor} : styles.tabInactive]}
          onPress={() => this.setState({tabWeek: true, tabCalendar: false})}>
            <Text style={this.state.tabWeek ? styles.textTabActive : styles.textTabInactive}> Esta semana </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={[styles.rightTab, {borderColor: this.state.mainColor}, this.state.tabCalendar ? {backgroundColor: this.state.mainColor} : styles.tabInactive]}
          onPress={() => this.setState({tabWeek: false, tabCalendar: true})}>
            <Text style={this.state.tabCalendar ? styles.textTabActive : styles.textTabInactive}> Calendario </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.yourdaysSquare, {borderColor: this.state.mainColor}]}>
        </View>

        <View style={styles.graphGrouping}>
          <Graph goal={{percentage: 50}} width={300 * 0.55} color="green" />
        </View>


      </ScrollView>
    )
  }
}
