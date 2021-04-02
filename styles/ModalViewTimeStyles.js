import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: "absolute",
    height: heightScreen,
    width: widthScreen
  },
  pickerContainer: {
    height: heightScreen * .30,
    width: '89%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    height: "25%",
    width: "100%",
    backgroundColor: "#1389CE",
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  textHeader: {
    color: "white",
    fontSize: 0.054 * widthScreen,
  },
  inputs: {
    marginTop: "7%",
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 0.14 * widthScreen,
    alignSelf: "flex-end",
  },
  subindex: {
    alignSelf: "flex-end",
    color: "#616161",
    fontSize: 0.044 * widthScreen,
  },
  okButton: {
    marginTop: "4%"
  },
  okText: {
    fontSize: 0.054 * widthScreen,
    color: "#1389CE"
  }
});

//#C8272F
export default styles
