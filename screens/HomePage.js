import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native'
import ProgressChart from '../components/ProgressCircle'
import TasksHomePage from '../components/TasksHomePage'
import {styles} from '../styles/HomeScreenStyle'


export default class HomePage extends React.Component{
  render(){
    return (
      <ScrollView style = {{marginBottom: 50}}>
        <Text style = {styles.HomePageTitle}> Bienvenido </Text>
        <View style = {styles.HomePageTitle}>
          <ProgressChart/>
        </View>
        <View style = {{margin: 50}}>
          <Button
            title = "Press me"
            onPress = {() => this.props.navigation.navigate('Formulary')}
          />
        </View>
        <View style={styles.containerTareas}>
          {tasks.map(task => (
              <TasksHomePage
                key = {task.key}
                task = {task}
              />
          ))}
        </View>
      </ScrollView>
    );
  }
}


//The prims and tasks are only for testing
 //prim is the default object and later you make deep copies w\
 //Object.assign and insert them into an array

const prim = {
  icon: "musical-notes",
  meta: "tocar piano",
  proporcion: "12/100",
  color: "#6ef3d6",
  key: 1,
}

const prim2 = Object.assign({}, prim)
prim2["key"] = 2
prim2["color"] = "#c6fce5"

const prim3 = Object.assign({}, prim)
prim3["key"] = 3
prim3["color"] ="#0dceda"

const prim4 = Object.assign({}, prim)
prim4["key"] = 4
prim4["color"] ="#0dceda"

const tasks = [prim, prim2, prim3]
