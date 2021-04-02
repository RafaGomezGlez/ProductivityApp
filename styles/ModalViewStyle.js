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
    height: heightScreen * .5,
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    height: "15%",
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1389CE'
  },
  titleStyle: {
    color: "white",
    fontSize: 0.049 * widthScreen,
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
    fontSize: 0.068 * widthScreen,
  },
})


export default styles
