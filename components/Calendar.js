import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import styles from '../styles/CalendarStyle';

const DAYSWEEK = 7;
const NUMBEROFWEEKS = 6;


// const daysGoal = {
//   2020: {
//     11: {
//       5: 'completed',
//       8: 'half',
//       14: 'omitted'
//     }
//   },
//   2021: {
//     0: {
//       5: 'completed',
//       8: 'half',
//       14: 'omitted'
//     },
//     1: {
//       5: 'completed',
//       8: 'half',
//       14: 'omitted'
//     },
//     2: {
//       5: 'completed',
//       8: 'half',
//       14: 'omitted'
//     },
//     3: {
//       5: 'completed',
//       12: 'half',
//       13: 'half',
//       14: 'omitted'
//     },
//     4: {
//       3: 'completed',
//       5: 'today',
//       7: 'next'
//     }
//   }
// }

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      daysGoal: this.props.daysToDo,
      days: ["D", "L", "Ma", "Mi", "J", "V", "S"],
      conversions: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      myYear: new Date().getFullYear(),
      myMonth: new Date().getMonth(),
      daysOfTheMonth: this.createWeeks(new Date().getMonth(), new Date().getFullYear())
    }
  }

  createWeeks = (month, year) => {
    let firstDay = new Date(year, month, 1).getDay()
    let lastDay = new Date(year, month+1, 0).getDate()
    let day = 1
    let daysOfTheMonth = []

    for(let i=0; i<NUMBEROFWEEKS; i++){
    let tmp = []
      for(let j = 0; j<DAYSWEEK; j++){
        if((i == 0 && j < firstDay) || day > lastDay) tmp.push(0)
        else{
          tmp.push(day)
          day++
        }
      }
      daysOfTheMonth.push(tmp)
    }
    return daysOfTheMonth
  }

  decreaseMonth = () => {
    let newMonth = this.state.myMonth - 1
    let newYear = this.state.myYear
    if (newMonth < 0){
      newMonth = 11
      newYear--
    }
    this.setState({
      myMonth: newMonth,
      myYear: newYear,
      daysOfTheMonth: this.createWeeks(newMonth, newYear)
     })
  }

  increaseMonth = () => {
    let newMonth = this.state.myMonth + 1
    let newYear = this.state.myYear
    if (newMonth > 11){
      newMonth = 0
      newYear++
    }
    this.setState({
      myMonth: newMonth,
      myYear: newYear,
      daysOfTheMonth: this.createWeeks(newMonth, newYear)
    })
  }

  chooseStyle = (day) => {
    const month = this.state.myMonth
    const year = this.state.myYear
    if(typeof this.state.daysGoal[year] !== 'undefined' && typeof this.state.daysGoal[year][month] !== 'undefined' && typeof this.state.daysGoal[year][month][day] !== 'undefined') {
      switch(this.state.daysGoal[year][month][day]){
        case 'completed': return styles.boxCompleted
        case 'half': return styles.boxHalf
        case 'omitted': return styles.boxOmitted
        case 'today': return styles.boxToday
        case 'next': return styles.boxNext
      }
    }
    return null
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.months}>
          <Text>   {this.state.conversions[this.state.myMonth]} - {this.state.myYear}  </Text>
        </View>
        <View style={styles.months}>
          <TouchableOpacity style={styles.changeMonth} onPress={() => this.decreaseMonth()}><Text>{'<'}</Text></TouchableOpacity>
          <Text>     </Text>
           <TouchableOpacity style={styles.changeMonth} onPress={() => this.increaseMonth()}><Text>{'>'}</Text></TouchableOpacity>
        </View>
        <Text></Text>
        <View style={styles.header}>
          {this.state.days.map(elem => (
            <View style={styles.headerBox}>
              <Text>{elem}</Text>
            </View>
          ))}
        </View>
        <View style={styles.calendarElemSection}>
        {this.state.daysOfTheMonth.map(week => (
          <View key={week.id} style={styles.calendarWeek}>
            {week.map(day => (
              day !== 0 ?
              <View key={day.id} style={[styles.box, this.chooseStyle(day)]}>
                <Text> {day} </Text>
              </View>
              :
              <View key={day.id} style={styles.box}><Text>    </Text></View>
            ))}
          </View>
        ))}
        </View>
      </View>
    );
  }
}
