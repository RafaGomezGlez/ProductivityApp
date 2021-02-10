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
} from 'react-native';

import {styles} from '../styles/StatisticsStyles'
import {generalData} from '../data/Goals'
const screenWidth = Dimensions.get('window').width;




export default class CarrouselDays extends React.Component{
  render() {
    return(

          <ScrollView
            style={[styles.carrouselOptions, { backgroundColor: 'gray' }]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {generalData.map((label, index) => (
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor:
                      this.props.goalChoosen === label.title
                        ? '#DADADA'
                        : 'white',
                    paddingHorizontal: screenWidth * 0.05,
                    borderRightColor: 'gray',
                    borderRightWidth: 1,
                  }}
                  underlayColor="#ffffff"
                  activeOpacity={0.8}
                  onPress={() => this.props.changeGoal(label.title)}>
                  <Text
                    style={[
                      styles.carrouselText,
                      {
                        color:
                          this.props.goalChoosen === label.title
                            ? 'black'
                            : '#757575',
                      },
                    ]}>
                    {label.title}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
    )
  }
}