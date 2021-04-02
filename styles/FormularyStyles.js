import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const scale = 405;

const scaleFontSize = (fontSize) => {
  console.log(widthScreen)
  const ratio = fontSize / scale;
  const newSize = Math.round(ratio * widthScreen);
  return newSize;
}

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewStyle: {
    height: heightScreen * .7,
  },
  textTitle: {
    fontSize: 0.068 * widthScreen,
    letterSpacing: .05,
    fontWeight: '600',
  },
  topElements: {
    backgroundColor: "#8ad4ff",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: 'center'
  },
  bottomElements: {
    marginTop: heightScreen *.03,
    marginLeft: "5%",
  },
  input: {
    width: widthScreen * .8,
    justifyContent: 'center',
    marginTop: heightScreen * .03,
    marginBottom: '2%',
  },
  textInput: {
    fontSize: 0.08 * widthScreen,
    borderBottomWidth: 2,
    borderColor: "black"
  },
  rowChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: '1%',
    width: widthScreen * .8,
    marginTop: '1.8%',
    marginBottom: '1.8%',
  },
  chipStyle: {
    backgroundColor: '#DADADA',
    margin: 6,
  },
  activeChipStyle: {
    backgroundColor: '#1389CE',
    color: 'white',
  },
  inactiveChipStyle: {
    backgroundColor: 'white',
    color: 'black',
  },
  textChipStyle: {
    fontSize: 0.041 * widthScreen,
  },
  timesStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthScreen,
    marginBottom: heightScreen * .03,
    marginTop: heightScreen * .01
  },
  roundedTimes: {
    borderWidth: 1,
    borderRadius: 50,
    width: "30%",
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: "#8ad4ff",
    elevation: 5,
  },
  cuantificacionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: "8%",
    marginTop: '1.8%',
    marginBottom: '1.%',
  },
  cuantificacionViewStyle: {
    marginRight: "8%",
  },
  habitsIconsView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: "8%",
    marginTop: '1.8%',
    marginBottom: '1.8%',
    width: widthScreen * .87,
  },
  iconStyle: {
    alignItems: 'center',
    marginRight: "4%",
    marginLeft: "4%",
    width: "25%",
    backgroundColor: 'white',
  },
  textIconStyle: {
    fontSize: 0.0535 * widthScreen,
    fontWeight: '600',
    backgroundColor: 'transparent'
  },
  daysSectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '5%',
    marginRight: "8%",
    marginTop: '1.8%',
    marginBottom: '4%',
  },
  dayStyle: {
    width: widthScreen * .1,
    height: widthScreen * .1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  activeDay: {
    backgroundColor: '#1389CE',
  },
  inactiveDay: {
    backgroundColor: '#DADADA',
  },
  activeDayText: {
    color: 'white',
  },
  inactiveDayText: {
    color: 'black',
  },
  roundedButton: {
    backgroundColor: '#1389CE',
    marginBottom: '10%',
    marginTop: '10%',
    // marginLeft: "5%",
    borderRadius: 50,
    width: "50%",
    height: heightScreen * .08,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 7,
  },
  textRoundedButton: {
    color: 'white',
    fontSize: 0.054 * widthScreen,
    fontWeight: 'bold'
  },
})

export default styles
