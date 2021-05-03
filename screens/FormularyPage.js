import React from 'react';

import { Alert, View, ScrollView, TouchableOpacity, Switch, Text, Button, TextInput } from 'react-native'
import { Chip } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import FocusAwareStatusBar from '../components/FocusAwareStatusBar'
import ModalView from '../components/ModalView'
import ModalViewTime from '../components/ModalViewTime'

import calculateDays from '../components/calculateDays';

import styles from '../styles/FormularyStyles'

class FormularyPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      task: 'testing',
      switchEnabled: false,
      buttonDisabled: false,
      timesToDo: 25,
      repeat: 0,
      time: [0, 0],
      modalTitle: "",
      elementToChangeModal: "",
      modalActive: false,
      modalTimeActive: false,
      elemChips: [
        { key: 'Trabajo', mainColor: "#1365CF", brighterColor: "#9DB8DD", darkerColor: "#0154C1",  status: true },
        { key: 'Deportes', mainColor: "#BC0701", brighterColor: "#D18885", darkerColor: "#9D0601",  status: false },
        { key: 'Salud', mainColor: "#29BC01", brighterColor: "#72EC51", darkerColor: "#239D01",  status: false },
        { key: 'Cultura', mainColor: "#CE6213", brighterColor: "#FCB27E", darkerColor: "#C15101", status: false },
        { key: 'Finanzas', mainColor: "#01AED5", brighterColor: "#70E5FF", darkerColor: "#0096B8",  status: false },
        { key: 'Higiene', mainColor: "#CE1365", brighterColor: "#E080AA", darkerColor: "#C10154",  status: false },
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
        { key:'D', num: 0, status: false },
        { key:'L', num: 1, status: true },
        { key:'Ma', num: 2, status: true },
        { key:'Mi', num: 3, status: true },
        { key:'J', num: 4, status: true },
        { key:'V', num: 5, status: true },
        { key:'S', num: 6, status: false }
      ],
    }
  }

  //For changing elemCuantification
  changeObj = (obj, cat) => {
    this.setState({
      [obj]: this.state[obj].map(elem => {
        if(elem.key !== cat) return { key: elem.key, status: false }
        return { key: elem.key, status: !elem.status }
      })
    })
  }

  changeRepetitions = (obj, cat) => {
    this.setState({
      [obj]: this.state[obj].map(elem => {
        if(elem.key !== cat) return { key: elem.key, status: false }
        return { key: elem.key, status: true }
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

  changeTask = task => { this.setState({task}) }

  changeSwitch = () => { this.setState({switchEnabled: !this.state.switchEnabled})}

  //for changing day selection
  selectDays = day => {
    this.setState({
      days: this.state.days.map(elem => {
        if(elem.key !== day) return { key: elem.key, num: elem.num, status: elem.status }
        return { key: elem.key, num: elem.num, status: !elem.status }
      })
    })
  }

  changeModalActive = () => { this.setState({modalActive: !this.state.modalActive})}

  changeModalTimeActive = () => {this.setState({modalTimeActive: !this.state.modalTimeActive})}

  openModal = (title, elementToChange) => {
    if(((this.state.elemCuantification[0].status && this.state.elemCuantification[0].key == elementToChange)
      || (this.state.elemCuantification[1].status && this.state.elemCuantification[1].key == elementToChange)) ){
      this.setState({
        repeat: 0,
        time: 0,
        elemCuantification: this.state.elemCuantification.map(elem =>{
          return {key: elem.key, status: false}
        })
      })
      return
    }

    if(elementToChange == "time"){
      this.setState({
        modalTimeTitle: title,
        modalTimeActive: true
      })
      return
    }

    this.setState({
      modalTitle: title,
      elementToChangeModal: elementToChange,
      modalActive: true,
    })
  }

  changeElem = (newTime, element) => {
    this.setState({ [element]: newTime })
    if(element !== "timesToDo") this.changeRepetitions('elemCuantification', element)
  }

  changeCuantificationTime = (minutes, seconds) => { this.changeElem([minutes, seconds], "time") }

  //func when you click the button and add to the main page
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
      if(name.length < 3) throw "Los nombre deben tener minimo 3 letras"
      var label = this.state.elemChips.find(elem => elem.status === true)
      if(label === undefined) throw "No escogiste categoría"
      var category = label.key
      var mainColor = label.mainColor
      var brighterColor = label.brighterColor
      var darkerColor = label.darkerColor
      var times = this.state.timesToDo
      parseInt(times)
      if(times === 0) throw "No has escogido veces"
      var repetition = this.state.elemRepetition.find(elem => elem.status === true)
      if(repetition === undefined) throw "No escogiste cuanto vas a repetir tu hábito"
      repetition = repetition.key
      if(repetition === 'day'){
        var days =  this.state.days.filter(elem => elem.status === true)
        days = days.map(elem => elem.num)
        if(days.length === 0) throw "No escogiste ningun día"
        var daysToDo = calculateDays(days,times);
      }
      if(this.state.elemCuantification[0].status === true){
        var cuantification = "time"
        let minutes = this.state.time[0]
        parseInt(minutes)
        let seconds = this.state.time[1]
        parseInt(seconds)
        var quantityCuantification = [minutes, seconds]
      }
      if(this.state.elemCuantification[1].status === true){
        var cuantification = "repeat"
        var quantityCuantification = this.state.repeat
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
      times: times,
      category: category,
      mainColor: mainColor,
      brighterColor: brighterColor,
      darkerColor: darkerColor,
      repetition: repetition,
      completedTimes: 0,
    }
    if(task.repetition === 'day'){
      task.days = days
      task.daysToDo = daysToDo
    }
    if(this.state.elemCuantification[0].status === true || this.state.elemCuantification[1].status === true){
      task.cuantification = cuantification
      task.quantityCuantification = quantityCuantification
    }
    else {
      task.cuantification = "none"
    }
    //console.log(task.daysToDo)

    mounted = false
    this.props.route.params.addTask(task)
    this.props.navigation.goBack()
  }

  render(){
    return (
      <View style={styles.screenStyle}>
      {this.state.modalActive ?
        <ModalView
        changeModalActive={() => this.changeModalActive()}
        changeElem={(newElem, element) => this.changeElem(newElem, element)}
        title={this.state.modalTitle}
        elementToChange={this.state.elementToChangeModal}
        /> :
      null }
      {this.state.modalTimeActive ?
        <ModalViewTime
        changeModalTimeActive={() => this.changeModalTimeActive()}
        changeCuantificationTime={(minutes, seconds) => this.changeCuantificationTime(minutes, seconds)}
        title={this.state.modalTimeTitle}
        /> :
      null }
      <FocusAwareStatusBar  barStyle="dark-content" backgroundColor="#017AC1"/>
        <ScrollView style={styles.scrollViewStyle} >
            <View>

              <View style={styles.topElements}>
                  <View style = {styles.input}>
                      <TextInput
                      placeholder="Nombre de tu meta"
                      onChangeText={this.changeTask}
                      value={this.state.task}
                      style = {styles.textInput}
                      textAlign = "center"
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
                    onPress={() => this.openModal("Veces", "timesToDo")}>
                      <Text style={styles.textTitle}>
                          {this.state.timesToDo == 0 ?
                          <Text> Press </Text> :
                          <Text> {this.state.timesToDo} </Text>}
                      </Text>
                    </TouchableOpacity>
                  </View>
              </View>

              <View style={styles.bottomElements}>
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

                <View style={styles.cuantificacionStyle}>
                  <Text style={styles.textTitle}>Opcional: </Text>
                  <Switch
                  onValueChange={this.changeSwitch}
                  value={this.state.switchEnabled}
                  trackColor={{false: "#DADADA", true:"#8ad4ff"}}
                  thumbColor={this.state.switchEnabled ? "#1389CE" : "#7a7a7a"}
                  />
                </View>

                {this.state.switchEnabled ?
                  <View style={styles.cuantificacionViewStyle}>
                   <Text> ¿Cómo vas a cuantificar? </Text>
                   <View style={styles.habitsIconsView}>
                    <TouchableOpacity style={styles.iconStyle} onPress={() => this.openModal("Pick Time", "time")}>
                      <MaterialCommunityIcons
                      name={this.state.elemCuantification[0].status ? "clock-time-eight-outline" : "clock-time-eight"}
                      color={this.state.elemCuantification[0].status ? '#1389CE' : '#4B4B4B'}
                      size={65}
                      />
                      <Text> Tiempo </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconStyle} onPress={() => this.openModal("Repeticion", "repeat")}>
                      <MaterialCommunityIcons
                      name={"repeat"}
                      size={65}
                      color={this.state.elemCuantification[1].status ? '#1389CE' : '#4B4B4B'}/>
                      <Text> Repeticion </Text>
                    </TouchableOpacity>
                   </View>
                   {this.state.elemCuantification[0].status ?
                     <View>
                      <Text> Tiempo: {this.state.time[0]} : {this.state.time[1]}</Text>
                     </View>
                     : null}
                   {this.state.elemCuantification[1].status ?
                     <View>
                      <Text> Repeticion: {this.state.repeat} </Text>
                     </View>
                     : null}
                  </View>
                   : null
                }


              </View>

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
