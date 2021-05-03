import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  header: {
    width: "85%",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  months: {
    flexDirection: 'row',
  },
  calendarElemSection: {
    width: "85%",
    height: heightScreen * .8,
  },
  calendarWeek: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerBox: {
    height: 20,
    width: 35,
    marginBottom: 10,
    alignItems: "center",
  },
  box: {
    height: 45,
    width: 35,
    alignItems: "center",
  },
  boxCompleted: {
    borderBottomWidth: 2,
    borderBottomColor: "green",
  },
  boxHalf: {
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
  },
  boxOmitted: {
    borderBottomWidth: 2,
    borderBottomColor: "red",
  },
  boxToday: {
    borderWidth: 2,
    borderColor: "#1389CE",
  },
  boxNext: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
  },
  changeMonth: {
    width: 40,
    height: 40,
    backgroundColor: "#DADADA"
  }
});

export default styles
