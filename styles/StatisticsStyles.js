import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CED0CE',
    marginTop: StatusBar.currentHeight || 0,
  },
  titleContainer: {
    marginVertical: screenWidth * 0.015,
    marginHorizontal: screenWidth * 0.05,
  },
  title: {
    fontSize: screenWidth * 0.09,
    color: '#5D4D4A',
    fontWeight: 'bold',
  },
  carrouselOptions: {
    flexDirection: 'row',
    marginVertical: screenWidth * 0.025,
  },
  carrouselText: {
    fontWeight: 'bold',
    fontSize: screenWidth * 0.05,
  },
  carrouselDays2: {
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: 'gray',
    height: screenWidth * 0.11,
    width: screenWidth * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carrouselDays: {
    borderRadius: 18,
    borderWidth: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carrouselDayText: {
    color: 'black',
    fontSize: screenWidth * 0.035,
    textAlign: 'center',
  },
  carrouselDayText2: {
    color: 'black',
    fontSize: screenWidth * 0.05,
    textAlign: 'center',
  },
  graph: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: screenWidth*0.05
  },
  sectionText: {
    fontWeight: 'bold',
    color: '#757575',
    fontSize: screenWidth * 0.06,
  },
  graph2: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginLeft: screenWidth * 0.11,
    marginBottom: screenWidth*0.05
  },
  separator: {
    height: screenWidth * 0.015,
    width: screenWidth * 0.015,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 10,
  },
  graphContainer: {
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  detailsContainer: {
    backgroundColor: 'white',
    marginTop: screenWidth * 0.025,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  headerContainer: {
    backgroundColor: 'white',
    marginBottom: screenWidth * 0.01,
  },
  headerContainerCarrousel: {
    backgroundColor: 'white',
    marginBottom: screenWidth * 0.01,
    borderRadius: 30,
  },
  tabStyle: {
    marginTop: screenWidth * 0.05,
    height: screenWidth * 0.1,
    width: screenWidth * 0.003,
    backgroundColor: '#CED0CE',
    position: 'absolute',
  },
});
