import React from 'react'
import {StyleSheet, View, Dimensions} from 'react-native'
import Constants from 'expo-constants'

const width = Dimensions.get('window').width;
const scale = 375;

const scaling = (fontSize) => {
  const ratio = fontSize / scale;
  const newSize = Math.round(ratio * width);
  return newSize;
}

const styles = StyleSheet.create({
  containerTareas: {
    alignItems: "center",
    flex: 1,
    marginBottom: "10%"
  },
  containerSquare: {
    width: "95%",
    height: "32%",
    borderWidth: 8,
    justifyContent: "space-around",
    alignContent: "stretch",
    flexDirection: "row",
    borderRadius: 35,
    marginBottom: "7%",
  },
  logo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  columnaMitad: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-around",
  },
  textMeta: {
    fontSize: 35,
    fontWeight: "bold",
  },
  textCantidad: {
    fontSize: 25,
  }
})

export {styles}
