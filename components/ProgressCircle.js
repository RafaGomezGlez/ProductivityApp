import React from 'react';
import {ProgressChart} from "react-native-chart-kit";
import {Dimensions, Animated, Text} from "react-native";
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
      barPercentage: 75,
      fill: "hola",
      width: 35
    }
  }

  render(){
    return (
      <AnimatedCircularProgress
        size={screenWidth-50}
        width={this.state.width}
        fill={this.state.barPercentage}
        tintColor="#0dceda"
        backgroundColor="#212121">
          {
            (fill) => (
            <AnimatedCircularProgress
              size={screenWidth-150}
              width={this.state.width}
              fill={80}
              tintColor="#6ef3d6"
              backgroundColor="#757575">
              {
                (fill) => (
                  <AnimatedCircularProgress
                    size={screenWidth-250}
                    width={this.state.width}
                    fill = {50}
                    tintColor={"#c6fce5"}
                    backgroundColor="#BDBDBD"
                    />
                )
              }
            </AnimatedCircularProgress>
            )
          }
      </AnimatedCircularProgress>
    )
  }
}
