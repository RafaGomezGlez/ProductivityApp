import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  pickerContainer: {
    height: 300,
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1389CE'
  },
  titleStyle: {
    color: "white",
    fontSize: 20,
  },
  flatListContainer: {
    flex: 1,
    paddingTop: '5%'
  },
  flatListItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: heightScreen * .08,
  },
  flatListTitle: {
    fontSize: 28,
  },
})


export default styles
