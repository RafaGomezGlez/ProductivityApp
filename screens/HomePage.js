import React from 'react';
import {Alert, View, Text, Button, ScrollView, StatusBar} from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import Carousel from 'react-native-snap-carousel';
import ProgressChart from '../components/ProgressCircle'
import TasksHomePage from '../components/TasksHomePage'
import CardTask from '../components/CardTask'
import AddCardTask from '../components/AddCardTask'

import {styles, widthCards, heightScreen, widthScreen} from '../styles/HomeScreenStyle'

export default class HomePage extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        activeIndex: 0,
        name: "Bryan",
        carouselItems: [
        {
            type: "addTask",
            title:"Add Task",
            text: "",
            color: "#F28500",
        },
      ],
    }
  }

  addNewTask = (task) => {
    let newItem = {
      type: "task",
      title: task.name,
      category: task.category,
      repetition: task.repetition,
      days: task.days,
      text: task.category + " " + task.repetition + " " + task.days,
      color: "#00A6FF",
    }
    this.setState({
      carouselItems: [newItem, ...this.state.carouselItems]
    })
  }

  removeTask = (title) => {
    Alert.alert(
    "Delete", `Do you want to delete ${title}?`,
    [
      {
        text: "Yes",
        onPress: () => {
          this.setState({
            carouselItems: this.state.carouselItems.filter(carousel =>
              carousel.title !== title
            )
          })
          this.carousel.triggerRenderingHack()
          this.props.navigation.goBack()
        }
      },
      {
        text: "Cancel",
      }
      ],
    );
  }

  _navigateFormulary = () => {
    this.props.navigation.navigate('Formulary', {
      addTask: this.addNewTask,
    })
  }

  _navigateCardTask = (item) => {
    this.props.navigation.navigate('TaskPage', {
      removeTask: this.removeTask,
      item: item,
    })
  }

  _renderItem = ({item,index}) => {
      if(item.type === "addTask")
        return (
          <AddCardTask item={item}
          navigateFormulary={() => this._navigateFormulary()}
          />)
      return  (
        <CardTask item={item}
        navigateCardTask={() => this._navigateCardTask(item)}
        />)
  }

  render(){
    return (
      <ScrollView style={styles.screenStyle}>
      <StatusBar backgroundColor="#017AC1" barStyle={'dark-content'}/>
        <View style={styles.topScreenStyle}>
          <View style={styles.iconStyle}><AntDesign name="user" size={55}/></View>
          <View style={styles.textTitleSection}>
            <Text style={styles.title}>Good evening,</Text>
            <Text style={styles.name}>{`${this.state.name}!`}</Text>
            <View style={styles.progressChartStyle}>
              <ProgressChart/>
            </View>
          </View>
        </View>
        <View style={styles.bottomScreenStyle}>
          <View style={styles.textGoalsSection}>
            <View style={styles.frameYourGoals}>
              <Text style={styles.textYourGoals}>Your goals: </Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.textYourGoals}> {this.state.carouselItems.length - 1} </Text>
            </View>
          </View>
          <View style={styles.sectionCards}>
          <View style={styles.cards}>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              useScrollView = {true}
              data={this.state.carouselItems}
              sliderWidth={300}
              itemWidth={widthCards}
              renderItem={this._renderItem.bind(this)}
              addNewTask={this.addNewTask}
              onSnapToItem = { index => this.setState({activeIndex:index}) }
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              enableSnap={false}
              />
          </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
