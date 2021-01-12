import React from 'react';
import {View, Text, Button, ScrollView, StatusBar} from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import Carousel from 'react-native-snap-carousel';
import ProgressChart from '../components/ProgressCircle'
import TasksHomePage from '../components/TasksHomePage'
import CardTask from '../components/CardTask'

import {styles, widthCards, heightScreen} from '../styles/HomeScreenStyle'

export default class HomePage extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        activeIndex: 0,
        carouselItems: [
        {
            title:"Item 1",
            text: "Text 1",
            color: "#00A6FF",
        },
        {
            title:"Item 2",
            text: "Text 2",
            color: "#00A6FF",

        },
        {
            title:"Item 3",
            text: "Text 3",
            color: "#00A6FF",
        },
        {
            title:"Item 4",
            text: "Text 4",
            color: "#00A6FF",
        },
        {
            title:"Item 5",
            text: "Text 5",
            color: "#00A6FF",
        },
      ]
    }
  }

  _renderItem({item,index}){
      return ( <CardTask item={item} />)
  }

  render(){
    return (
      <ScrollView style={styles.screenStyle}>
      <StatusBar backgroundColor="white" barStyle={'dark-content'}/>
        <View style={styles.topScreenStyle}>
          <View style={styles.iconStyle}><AntDesign name="user" size={55}/></View>
          <View style={styles.textTitleSection}>
            <Text style={styles.title}>Good evening,</Text>
            <Text style={styles.name}>Bryan!</Text>
            <View style={styles.progressChartStyle}>
              <ProgressChart/>
            </View>
          </View>
        </View>
        <View style={styles.bottomScreenStyle}>
          <View style={styles.textGoalsSection}>
            <View style={styles.frameYourGoals}>
              <Text style={styles.textYourGoals}>Your goals</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.textYourGoals}> 0 </Text>
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
