import React from 'react'
import {StyleSheet, View} from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  containerTareas: {
    alignItems: "center",
  },
  containerSquare: {
    width: 380,
    height: 150,
    borderColor: "black",
    borderWidth: 8,
    justifyContent: "space-around",
    alignContent: "stretch",
    flexDirection: "row",
    borderRadius: 35,
    marginBottom: 30,
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
