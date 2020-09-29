import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';

const width = Dimensions.get('window').width;
const scale = 375;

const scaleFont = (fontSize) => {
  const ratio = fontSize / scale;
  const newSize = Math.round(ratio * width);
  return newSize;
}

export default styles = StyleSheet.create({
  textTitle:{
    fontSize: scaleFont(50),
    fontWeight: "bold",
    marginBottom: "60%",
  },
  viewSpace: {
    paddingTop: Constants.statusBarHeight,
    marginTop: "5%",
    alignItems: "center",
    flex: 1,
  },
  buttonStyle: {
    height: "3%",
    width: "50%",
    marginBottom: "5%",
  },
  textInputStyle: {
    borderColor: "grey",
    margin: "1%",
    borderWidth: 1,
    width: "50%",
    height: "5%",
    marginBottom: "1.5%",
  },
  middlePart: {
    marginTop: "7%",
  },
});
