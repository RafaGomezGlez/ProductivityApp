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
    fontSize: 0.061 * widthScreen,
    letterSpacing: .01,
  },
  yourDaysGrouping:{
    marginLeft: widthScreen * .04
  },
  yourDaysText: {
    fontSize: 0.073 * widthScreen,
    letterSpacing: .01,
  },
  tabsGrouping: {
    marginLeft: widthScreen * .04,
    flexDirection: 'row',
  },
  leftTab: {
    height: heightScreen * .055,
    width: widthScreen * .45,
    borderWidth: 2,
    borderRightWidth: 1,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightTab: {
    width: widthScreen * .45,
    borderWidth: 2,
    borderLeftWidth: 1,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oneTab: {
    width: widthScreen * .9,
    height: heightScreen * .055,
    borderWidth: 2,
    marginLeft: widthScreen * .04,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
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
