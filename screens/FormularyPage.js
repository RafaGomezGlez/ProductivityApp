import React from 'react';
import {View, ScrollView, TouchableOpacity, Switch, Text, Button, TextInput} from 'react-native'
import { Chip } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import styles from '../styles/FormularyStyles'



class FormularyPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      task: '',
      switchEnabled: false,
      elemChips: [
        { key: 'Adventure', status: false },
        { key: 'Trying', status: false },
        { key: 'Family', status: false },
        { key: 'Fantasy', status: false },
        { key: 'Well-being', status: false },
      ],
      elemRepetition: [
        { key: 'day', status: false },
        { key: 'week', status: false },
        { key: 'month', status: false}
      ],
      days: [
        { key:'D', status: false },
        { key:'L', status: true },
        { key:'Ma', status: true },
        { key:'Mi', status: true },
        { key:'J', status: true },
        { key:'V', status: true },
        { key:'S', status: false }
      ],
    }
  }

  //For changing elemRepetition & elemChips
  changeObj = (obj, cat) => {
    this.setState({
      [obj]: this.state.[obj].map(elem => {
        if(elem.key !== cat) return { key: elem.key, status: false }
        return { key: elem.key, status: !elem.status }
      })
    })
  }

  changeTask = task => {
    this.setState({task})
  }

  changeSwitch = () => {
    this.setState({switchEnabled: !this.state.switchEnabled})
  }


  //for changing day selection
  selectDays = day => {
    this.setState({
      days: this.state.days.map(elem => {
        if(elem.key !== day) return { key: elem.key, status: elem.status }
        return { key: elem.key, status: !elem.status }
      })
    })
  }

  //func when you click the button
  addTask = () => {
    const task = {
      name: this.state.task,
      category: this.state.elemChips.find(elem => elem.status === true).key,
      repetition: this.state.elemRepetition.find(elem => elem.status === true).key,
    }
    if(task.repetition === 'day')
      task.days = this.state.days.flatMap(elem => elem.status === true ? [elem.key] : [])
    console.log(task)
    this.props.route.params.addTask(task)
    this.props.navigation.goBack()
  }

  render(){
    return (
      <View style={styles.screenStyle}>
        <ScrollView style={styles.scrollViewStyle} >
            <View>

              <View>
                <Text style={styles.textTitle}>Name</Text>
              </View>
              <View style = {styles.input}>
                  <TextInput
                  placeholder="Body Text"
                  onChangeText={this.changeTask}
                  value={this.state.task}
                  style = {styles.textInput}
                  />
              </View>

              <View>
                <Text style={styles.textTitle}>Categoría</Text>
              </View>
              <View style={styles.rowChips}>
                {this.state.elemChips.map(elemChip =>
                  <Chip
                  key = {elemChip.key}
                  style={[styles.chipStyle, elemChip.status ? styles.activeChipStyle : styles.inactiveChipStyle]}
                  onPress={() => this.changeObj('elemChips',elemChip.key)}>
                    <Text
                    style={[styles.textChipStyle, elemChip.status ? styles.activeChipStyle : styles.inactiveChipStyle]}>
                    {elemChip.key}
                    </Text>
                  </Chip>
                )}
              </View>

              <View style={styles.cuantificacionStyle}>
                <Text style={styles.textTitle}>Cuantificación</Text>
                <Switch
                onValueChange={this.changeSwitch}
                value={this.state.switchEnabled}
                />
              </View>

              {this.state.switchEnabled ?
                 <View style={{height: 250, backgroundColor: 'grey', marginRight: "8%"}}>
                </View>
                 : null
              }

              <View>
                <Text style={styles.textTitle}>Repetición del hábito</Text>
              </View>
              <View style={styles.habitsIconsView}>
                <TouchableOpacity style={styles.iconStyle} onPress={() => this.changeObj('elemRepetition', 'day')}>
                  <MaterialIcons name={'today'} size={75}
                  color={this.state.elemRepetition[0].status ? '#1389CE' : 'black'}/>
                  <Text style={styles.textIconStyle}>Día</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} onPress={() => this.changeObj('elemRepetition', 'week')}>
                  <MaterialCommunityIcons name={'calendar-week'} size={75}
                  color={this.state.elemRepetition[1].status ? '#1389CE' : 'black'}/>
                  <Text style={styles.textIconStyle}>Semana</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} onPress={() => this.changeObj('elemRepetition', 'month')}>
                  <MaterialCommunityIcons name={'calendar-month'} size={75}
                  color={this.state.elemRepetition[2].status ? '#1389CE' : 'black'}/>
                  <Text style={styles.textIconStyle}>Año</Text>
                </TouchableOpacity>
              </View>

              {this.state.elemRepetition[0].status ?
              <View style={styles.daysSectionStyle}>
                {this.state.days.map(day =>
                  <TouchableOpacity
                  key = {day.key}
                  style={[styles.dayStyle, day.status ? styles.activeDay : styles.inactiveDay]}
                  onPress={() => this.selectDays(day.key)}
                  >
                    <Text style={[styles.textIconStyle, day.status ? styles.activeDayText : styles.inactiveDayText]}>
                    {day.key}
                    </Text>
                  </TouchableOpacity>
                )}
              </View> : null
              }

            <View style={styles.buttonViewStyle}>
              <Button title="Create task" onPress={this.addTask}/>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}


export default FormularyPage
