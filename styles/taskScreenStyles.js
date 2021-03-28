import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height


const styles = StyleSheet.create({
  taskScreenStyles:{
    backgroundColor: "white",
    height: heightScreen,
    flex: 1,
  },
  topSquare:{
    height: heightScreen * .20
  },
  circle:{
    borderRadius: 75,
    height: heightScreen * .18,
    width: heightScreen * .18,
    borderWidth: 2,
    backgroundColor: 'white',
    position: 'absolute',
    top: heightScreen * .05,
    left: (widthScreen / 2) - (150 / 2),
    justifyContent: 'center',
    alignItems: 'center'
  },
  continue:{
    flexDirection: 'row-reverse',
    marginLeft: widthScreen * .05,
    marginTop: heightScreen * .02,
    alignItems: 'center',
  },
  textContinue:{
    fontSize: 25,
    letterSpacing: .01,
  },
  yourDaysGrouping:{
    marginLeft: widthScreen * .04
  },
  yourDaysText: {
    fontSize: 30,
    letterSpacing: .01,
  },
  tabsGrouping: {
    marginLeft: widthScreen * .04,
    flexDirection: 'row',
  },
  leftTab: {
    height: heightScreen * .055,
    width: widthScreen * .25,
    borderWidth: 2,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightTab: {
    width: widthScreen * .25,
    borderWidth: 2,
    borderLeftWidth: 1,
    borderBottomWidth: 0,
    borderTopRightRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#1389CE'
  },
  tabActive: {
    backgroundColor: "#1389CE"
  },
  tabInactive: {
    backgroundColor: "#F2F2F2"
  },
  textTabActive: {
    color: "white"
  },
  textTabInactive: {
    color: "black"
  },
  graphGrouping: {
    alignItems: 'center',
    marginTop: heightScreen * .1,
  },
  yourdaysSquare: {
    marginLeft: widthScreen * .04,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopRightRadius: 7,
    borderWidth: 2,
    width: widthScreen * .89,
    height: heightScreen * .3,
    backgroundColor: "#F2F2F2"
  }
})

export default styles
