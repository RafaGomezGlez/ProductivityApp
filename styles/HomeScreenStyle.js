import React from 'react'
import {StyleSheet, View, Dimensions} from 'react-native'
import Constants from 'expo-constants'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const heightAppScreen = heightScreen * 1.20
const heightTop = heightScreen * 0.725
const widthCards = Math.round((widthScreen - (widthScreen * .08)) / 2)

const scale = 375;

const scaling = (fontSize) => {
  const ratio = fontSize / scale;
  const newSize = Math.round(ratio * width);
  return newSize;
}

const styles = StyleSheet.create({
  screenStyle:{
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1389CE",
    height: heightAppScreen,
    flexDirection: "column",
  },
  topScreenStyle:{
    height: heightTop,
  },
  bottomScreenStyle:{
    backgroundColor: "white",
    height: heightScreen * .53,
    flex: 1,
    width: widthScreen,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  title:{
    fontSize: 33,
    fontWeight: "600",
  },
  name:{
    fontSize: 33,
    fontWeight: "bold",
  },
  iconStyle:{
    alignItems: 'flex-end',
    marginRight: "5%",
    marginTop: "3%"
  },
  progressChartStyle:{
    marginTop: heightScreen * .02
  },
  textTitleSection:{
    marginLeft: "6%"
  },
  textGoalsSection:{
    flexDirection: "row",
    marginTop: "4%",
    justifyContent: "space-around"
  },
  textYourGoals: {
    fontSize: 25,
    fontWeight: "bold",
  },
  frameYourGoals: {
    flexDirection: "column",
    justifyContent: "center",
  },
  circle: {
    borderRadius: Math.round(Dimensions.get('window').width+Dimensions.get('window').height) / 2,
    justifyContent: "center",
    alignItems: "center",
    width: widthScreen * .13,
    height: widthScreen * .13,
    backgroundColor: "#FFC82C",
  },
  cards: {
    flexDirection: "row",
    width: widthScreen * .93,
    alignItems: "center",
  },
  sectionCards: {
    flex: 1,
    marginTop: "6%",
    alignItems: "center",
  },
})

export {styles, widthCards, heightScreen, widthScreen}
