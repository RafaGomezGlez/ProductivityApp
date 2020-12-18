import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class SettingsPage extends React.PureComponent{
  render() {
    return(
      <SafeAreaView style = {styles.container} >
        <StatusBar backgroundColor="white" barStyle={'dark-content'}/>
        <View style = {[styles.title,styles.centerAlignment]}>
          <Text style =  {styles.textTitle}> Configuración </Text>  
        </View>

        <View style = {[styles.optionContainer,styles.centerAlignment]}>
          <View style = {styles.option} > 
            <Icon name = "palette" color = "black" size = {40} />
            <Text style= {styles.textOption}> Tema </Text>
            <Icon2 name = "chevron-right" color = "black" size = {30} />    
          </View>
        </View>

        <View style = {styles.separator}/>

        <View style = {[styles.optionContainer,styles.centerAlignment]}>
          <View style = {styles.option} >
            <Icon name = "clock-time-five" color = "black" size = {40} /> 
            <Text style= {styles.textOption}> Hora límite </Text>
            <Icon2 name = "chevron-right" color = "black" size = {30} />    
          </View>
        </View>

        <View style = {styles.separator}/>
    
        <View style = {[styles.optionContainer,styles.centerAlignment]}>
          <View style = {styles.option} > 
            <Icon name = "bell" color = "black" size = {40} />     
            <Text style= {styles.textOption}> Notificaciones </Text>
            <Icon2 name = "chevron-right" color = "black" size = {30} />       
          </View>
        </View>

        <View style = {styles.separator}/>

        <View style = {[styles.optionContainer,styles.centerAlignment]}>
          <View style = {styles.option} > 
            <Icon2 name = "user-friends" color = "black" size = {30} />   
            <Text style= {styles.textOption}> Invita a un amigo </Text> 
            <Icon2 name = "chevron-right" color = "black" size = {30} />    
          </View>
        </View>

        <View style = {styles.separator}/>

        <View style = {[styles.optionContainer,styles.centerAlignment]}>
          <View style = {styles.option} > 
            <Icon name = "star" color = "black" size = {30} />  
            <Text style= {styles.textOption}> Califícanos </Text>
            <Icon2 name = "chevron-right" color = "black" size = {30} />    
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#e4e6eb'
  },
  centerAlignment: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  title: {
    width:width*0.90,
    height: height*0.08, 
    marginTop: StatusBar.currentHeight + 5,
    alignItems: 'center',
  },
  optionContainer: {
    flex: 1,
    marginTop: 10,
    width: width*0.90,
    height: height*0.08,
  },
  option: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  textOption: {
    fontSize: 20,
  },
  textTitle: {
    fontSize:30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    height: 2,
    width: "95%",
    backgroundColor: "#CED0CE",
    alignSelf: 'center'
  },

})


