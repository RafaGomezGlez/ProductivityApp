import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewStyle: {
    marginTop: "5%",
    marginLeft: "5%",
    height: heightScreen * .7,
  },
  textTitle: {
    fontSize: 28,
    letterSpacing: .05,
    fontWeight: '600',
  },
  input: {
    height: heightScreen * .05,
    width: widthScreen * .70,
    justifyContent: 'center',
    marginTop: '2%',
    marginBottom: '2%',
  },
  textInput: {
    fontSize: 27,
    borderBottomWidth: 2,
    borderColor: "black"
  },
  rowChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: '1%',
    marginRight: "8%",
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
    backgroundColor: '#DADADA',
    color: 'black',
  },
  textChipStyle: {
    fontSize: 17,
  },
  timesStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: "8%",
  },
  roundedTimes: {
    borderWidth: 1,
    borderRadius: 50,

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
    fontSize: 22,
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
    marginTop: '5%',
    // marginLeft: "5%",
    marginRight: "8%",
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
    fontSize: 22,
    fontWeight: 'bold'
  },
})

export default styles
