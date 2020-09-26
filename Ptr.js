import React from 'react';
import {ProgressChart} from "react-native-chart-kit";
import {Dimensions} from "react-native";

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["Swim", "Bike", "Run", "prueba"], // optional
  data: [0.5, 0.6, 0.8, 0.1],
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
  render(){
    return (
      <ProgressChart
        data={data}
        width={screenWidth}
        height={screenWidth}
        strokeWidth={20}
        radius={75}
        chartConfig={chartConfig}
        hideLegend={true}
      />
    )
  }
}
