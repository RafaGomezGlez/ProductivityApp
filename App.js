import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {styles} from './styles';
import {style} from './style';

const {width, height} = Dimensions.get('screen');

export default class App extends Component{
  state = {
    name: '',
    lastName: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={style.innerText}> APP V1 </Text>
        <View>
          <Text style={style.baseText}> Nombre </Text>
          <TextInput style={styles.input} />
        </View>

        <View>
          <Text style={style.baseText}> Apellido </Text>
          <TextInput style={styles.input} />
        </View>

        <View>
          <Text style={style.baseText}> Semestre </Text>
          <TextInput style={styles.input} />
        </View>

        <View>
          <Text style={style.baseText}> Carrera </Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    );
  }
}
