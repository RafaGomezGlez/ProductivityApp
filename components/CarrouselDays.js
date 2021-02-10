import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableNativeFeedback,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  FlatList
} from 'react-native';
import {styles} from '../styles/StatisticsStyles'

const screenWidth = Dimensions.get('window').width;




export default class CarrouselDays extends React.Component{

  render() {
    return(
          <View
            style={[
              styles.carrouselOptions,
              { justifyContent: 'space-around', alignItems: 'center' },
            ]}>
            {this.props.goal.days.map((day, index) => (
              <TouchableOpacity onPress={() => this.props.changeDate(day)}>
                <View
                  style={[
                    styles.carrouselDays,
                    {
                      borderColor: day.color,
                      backgroundColor:
                        day.day + day.date === this.props.dateChoosen
                          ? '#70C5F3'
                          : 'white',
                      height:
                        day.day + day.date === this.props.dateChoosen
                          ? screenWidth * 0.165
                          : screenWidth * 0.13,
                      width:
                        day.day + day.date === this.props.dateChoosen
                          ? screenWidth * 0.165
                          : screenWidth * 0.13,
                    },
                  ]}>	
                  <Text
                    style={[
                      styles.carrouselDayText,
                      {
                        color:
                          day.day + day.date === this.props.dateChoosen
                            ? 'white'
                            : 'black',
                      },
                    ]}>
                    {day.day}
                  </Text>
                  <Text
                    style={[
                      styles.carrouselDayText2,
                      {
                        color:
                          day.day + day.date === this.props.dateChoosen
                            ? 'white'
                            : 'black',
                      },
                    ]}>
                    {day.date}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
      </View>
    )
  }
}

