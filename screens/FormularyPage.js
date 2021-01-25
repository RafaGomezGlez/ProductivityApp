import React from 'react';

import { Alert, View, ScrollView, TouchableOpacity, Switch, Text, Button, TextInput } from 'react-native'
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
      elemCuantification: [
        { key: 'time', status: false },
        { key: 'repeat', status: false },
      ],
      elemRepetition: [
        { key: 'day', status: false },
        { key: 'week', status: false },
        { key: 'month', status: false},
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
    try{
      var name = this.state.task
      if(name.length === 0) throw "No pusiste un nombre"
      var category = this.state.elemChips.find(elem => elem.status === true)
      if(category === undefined) throw "No escogiste categoría"
      category = category.key
      var repetition = this.state.elemRepetition.find(elem => elem.status === true)
      if(repetition === undefined) throw "No escogiste cuanto vas a repetir tu hábito"
      repetition = repetition.key
      if(repetition === 'day'){
        var days =  this.state.days.flatMap(elem => elem.status === true ? [elem.key] : [])
        console.log(days)
        if(days.length === 0) throw "No escogiste ningun día"
      }
    } catch(err) {
      Alert.alert(
        "Error!",
        `${err}`
      )
      return
    }
    const task = {
      name: name,
      category: category,
      repetition: repetition,
    }
    if(task.repetition === 'day')
      task.days = days

    this.props.route.params.addTask(task)
    this.props.navigation.goBack()
  }

  render(){
    return (
      <View style={styles.screenStyle}>
        <ScrollView style={styles.scrollViewStyle} >
            <View>

              <View style = {styles.input}>
                  <TextInput
                  placeholder="Nombre de tu meta"
                  onChangeText={this.changeTask}
                  value={this.state.task}
                  style = {styles.textInput}
                  />
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
                <Text style={styles.textTitle}>Cuantificación: </Text>
                <Switch
                onValueChange={this.changeSwitch}
                value={this.state.switchEnabled}
                />
              </View>


              {this.state.switchEnabled ?
                <View style={styles.cuantificacionViewStyle}>
                 <Text> ¿Cómo vas a cuantificar? </Text>
                 <View style={styles.habitsIconsView}>
                  <TouchableOpacity style={styles.iconStyle} onPress={() => this.changeObj('elemCuantification', 'time')}>
                    <MaterialCommunityIcons
                    name={this.state.elemCuantification[0].status ? "clock-time-eight-outline" : "clock-time-eight"}
                    color={this.state.elemCuantification[0].status ? '#1389CE' : 'black'}
                    size={65}
                    />
                    <Text> Tiempo </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconStyle} onPress={() => this.changeObj('elemCuantification', 'repeat')}>
                    <MaterialCommunityIcons
                    name={"repeat"}
                    size={65}
                    color={this.state.elemCuantification[1].status ? '#1389CE' : 'black'}/>
                    <Text> Veces </Text>
                  </TouchableOpacity>
                 </View>
                 {this.state.elemCuantification[0].status ?
                   <View>
                    <Text> Tiempo </Text>
                   </View>
                   : null}
                 {this.state.elemCuantification[1].status ?
                   <View>
                    <Text> Repeticion </Text>
                   </View>
                   : null}
                </View>
                 : null
              }

              <View>
                <Text style={styles.textTitle}>Repetición del hábito: </Text>
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
          </View>
        </ScrollView>
        <View style={styles.buttonViewStyle}>
          <Button title="Create task" onPress={this.addTask}/>
        </View>
      </View>
    );
  }
}

export default FormularyPage
