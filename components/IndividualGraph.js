import React from 'react';
import {ProgressChart} from "react-native-chart-kit";
import {Dimensions, Animated, Text, StyleSheet} from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const screenWidth = Dimensions.get("window").width;

const values = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.5, 0.6, 0.8],
};

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,

  backgroundGradientFrom: "grey",
  backgroundGradientTo: "grey",
  color: (opacity = 1) => `rgba(94, 163, 242, ${opacity})`,
  strokeWidth: 3  , // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export default class Chart extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      barPercentage: this.props.goal.percentage,
      fill: "hola",
      width: this.props.width*0.14,
      size: this.props.width,
      color: this.props.color,
      fontSize: this.props.width*0.26
    }
  }

  render(){
    return (
      <AnimatedCircularProgress
        size={this.state.size}
        width={this.state.width}
        fill={this.props.goal.percentage}
        tintColor={this.props.color}
        backgroundColor="#DADADA">
        { () => (
          <Text style={{fontSize:this.state.fontSize,color:this.props.color}}>{this.props.goal.percentage}%</Text>
        )}
      </AnimatedCircularProgress>
    )
  }
}


