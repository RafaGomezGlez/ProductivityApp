import React from 'react';

import { Alert, View, ScrollView, TouchableOpacity, Switch, Text, Button, TextInput } from 'react-native'
import { Chip } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import FocusAwareStatusBar from '../components/FocusAwareStatusBar'
import ModalView from '../components/ModalView'

import styles from '../styles/FormularyStyles'

class FormularyPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      task: '',
      switchEnabled: false,
      buttonDisabled: false,
      modalTitle: "",
      modalActive: false,
      elemChips: [
        { key: 'Trabajo', mainColor: "#1365CF",
        brighterColor: "#9DB8DD", darkerColor: "#0154C1",  status: false },
        { key: 'Deportes', mainColor: "#BC0701",
        brighterColor: "#D18885", darkerColor: "#9D0601",  status: false },
        { key: 'Salud', mainColor: "#29BC01",
        brighterColor: "#72EC51", darkerColor: "#239D01",  status: false },
        { key: 'Cultura', mainColor: "#CE6213",
        brighterColor: "#FCB27E", darkerColor: "#C15101", status: false },
        { key: 'Finanzas', mainColor: "#01AED5",
        brighterColor: "#70E5FF", darkerColor: "#0096B8",  status: false },
        { key: 'Higiene', mainColor: "#CE1365",
        brighterColor: "#E080AA", darkerColor: "#C10154",  status: false },
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

  //For changing elemCuantification & elemRepetition
  changeObj = (obj, cat) => {
    this.setState({
      [obj]: this.state.[obj].map(elem => {
        if(elem.key !== cat) return { key: elem.key, status: false }
        return { key: elem.key, status: !elem.status }
      })
    })
  }

  changeChips = (cat) => {
    this.setState({
      elemChips: this.state.elemChips.map(elem => {
        if(elem.key !== cat) return { key: elem.key, mainColor: elem.mainColor,
          brighterColor: elem.brighterColor, darkerColor: elem.darkerColor, status: false }
        return { key: elem.key, mainColor: elem.mainColor,
          brighterColor: elem.brighterColor, darkerColor: elem.darkerColor, status: !elem.status }
      })
    })
  }

  changeTask = task => {
    this.setState({task})
  }

  changeSwitch = () => {
    this.setState({switchEnabled: !this.state.switchEnabled})
  }

  changeModalActive = () => {
    this.setState({
      modalActive: !this.state.modalActive
    })
  }

  selectTimes = () => {
    this.setState({
      modalTitle: "veces",
      modalActive: true,
    })
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

  selectCuantification = () => {
    this.changeObj('elemCuantification', 'time')
  }

  //func when you click the button
  addTask = () => {
    this.setState({
      buttonDisabled: true,
    })
    let mounted = true

    setTimeout(()=>{
      if(mounted){this.setState({buttonDisabled: false})}}
      , 500)


    try{
      var name = this.state.task
      if(name.length === 0) throw "No pusiste un nombre"
      var label = this.state.elemChips.find(elem => elem.status === true)
      if(label === undefined) throw "No escogiste categoría"
      var category = label.key
      var mainColor = label.mainColor
      var brighterColor = label.brighterColor
      var darkerColor = label.darkerColor
      var repetition = this.state.elemRepetition.find(elem => elem.status === true)
      if(repetition === undefined) throw "No escogiste cuanto vas a repetir tu hábito"
      repetition = repetition.key
      if(repetition === 'day'){
        var days =  this.state.days.flatMap(elem => elem.status === true ? [elem.key] : [])
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
      mainColor: mainColor,
      brighterColor: brighterColor,
      darkerColor: darkerColor,
      repetition: repetition,
    }
    if(task.repetition === 'day')
      task.days = days

    //console.log(task)
    mounted = false
    this.props.route.params.addTask(task)
    this.props.navigation.goBack()
  }

  render(){
    return (
      <View style={styles.screenStyle}>
      {this.state.modalActive ?
        <ModalView changeModalActive={() => this.changeModalActive()} title={this.state.modalTitle}/> :
      null }
      <FocusAwareStatusBar  barStyle="dark-content" backgroundColor="#017AC1"/>
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
                  style={[styles.chipStyle, elemChip.status ? {backgroundColor: elemChip.mainColor} : styles.inactiveChipStyle]}
                  onPress={() => this.changeChips(elemChip.key)}>
                    <Text
                    style={[styles.textChipStyle, elemChip.status ? {backgroundColor: elemChip.mainColor, color: 'white'} : styles.inactiveChipStyle]}>
                    {elemChip.key}
                    </Text>
                  </Chip>
                )}
              </View>

              <View style={styles.timesStyle}>
                <TouchableOpacity
                style={styles.roundedTimes}
                activeOpacity={1}
                onPress={() => this.selectTimes()}>
                  <Text style={styles.textTitle}> Press </Text>
                </TouchableOpacity>
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
                  <TouchableOpacity style={styles.iconStyle} onPress={() => this.selectCuantification()}>
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
                    <Text> Tiempo: </Text>
                   </View>
                   : null}
                 {this.state.elemCuantification[1].status ?
                   <View>
                    <Text> Repeticion: </Text>
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
                  color={this.state.elemRepetition[0].status ? '#1389CE' : '#4B4B4B'}/>
                  <Text style={styles.textIconStyle}>Día</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} onPress={() => this.changeObj('elemRepetition', 'week')}>
                  <MaterialCommunityIcons name={'calendar-week'} size={75}
                  color={this.state.elemRepetition[1].status ? '#1389CE' : '#4B4B4B'}/>
                  <Text style={styles.textIconStyle}>Semana</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} onPress={() => this.changeObj('elemRepetition', 'month')}>
                  <MaterialCommunityIcons name={'calendar-month'} size={75}
                  color={this.state.elemRepetition[2].status ? '#1389CE' : '#4B4B4B'}/>
                  <Text style={styles.textIconStyle}>Mes</Text>
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

          <TouchableOpacity style={styles.roundedButton} onPress={this.addTask} disabled={this.state.buttonDisabled}>
            <Text style={styles.textRoundedButton}>Create Task</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}

export default FormularyPage
