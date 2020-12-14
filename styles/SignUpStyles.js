import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants'

const width = Dimensions.get('window').width;
const scale = 375;

const scaling = (fontSize) => {
  const ratio = fontSize / scale;
  const newSize = Math.round(ratio * width);
  return newSize;
}

//5% == 20

const styles = StyleSheet.create({
  bodyPart:{
    alignItems: "flex-start",
    marginLeft: "10%",
    marginTop: "5%",
  },
  bottomPart: {
    alignItems: "center",
    marginTop: "2.5%",
  },
  titleStyle:{
    fontSize: 20,
    //color: "white"
  },
  textInputStyle: {
    borderColor: "grey",
    borderWidth: 1,
    width: "92%",
    marginTop: "1%",
    marginBottom: "1%",
  },
  pickerStyle:{
    width: "92%",
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
  },
  rowStyle:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginLeft: "10%",
    marginRight: "15%",
  },
  pickerStyleNacimiento:{
    width: "37%",
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
  },
  rowStyleButtons:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginLeft: "25%",
    marginRight: "25%",
    marginTop:"13%",
  },
  pickerStyleComunidad:{
    width:"92%",
    height:50,
    borderColor: "grey",
    borderWidth: 1,
  },
  textProperties:{
    fontSize:15,
  },
  interesesStyle:{
    marginTop: "5%",
  },
  rowInteresStyle:{
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'stretch',
    width: "92%",
    marginBottom: "2%",
  },
  textIntereses:{
    textAlign: "center", //se puede usar left, right o justify
    width: "50%",
    fontSize: 18,
    fontWeight: "bold",
  },
})