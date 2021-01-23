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
    marginBottom: "18%",
    height: heightScreen * .7,
  },
  textTitle: {
    fontSize: 28,
    letterSpacing: .05,
    fontWeight: '600',
  },
  input: {
    height: heightScreen * .05,
    width: widthScreen * .87,
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
    paddingHorizontal: 6,
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
    fontSize: 16,
  },
  cuantificacionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: "8%",
    marginTop: '1.8%',
    marginBottom: '1.%',
  },
  habitsIconsView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: "8%",
    marginTop: '1.8%',
    marginBottom: '1.8%',
  },
  iconStyle: {
    alignItems: 'center',
    marginRight: "8%",
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
  buttonViewStyle: {
    marginRight: "8%",
    marginTop: "29%", //******
    height: '10%'
  },
})

export default styles
