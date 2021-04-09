// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Entypo from 'react-native-vector-icons/Entypo';
import Loader from '../components/ActivityIndicator'; 
import fb from '../firebase/firebase'
import { 
    updateEmail, 
    updatePassword, 
    updateUsername,
    updateLoading,
    signup, 
    getUser,
} from '../actions/user'


class SignUpScreen extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      loading:false,
      errortext: '',
      isRegistraionSuccess: true,
    }
    const value = false;
    this.props.updatePassword('');
    this.props.updateEmail(''); 
    this.props.updateUsername('');  
    this.props.updateLoading(false)
  }

  componentDidMount() {

  }

 

  handleSubmitButton = () => {
    this.setState({errortext:''})
    if (!this.props.user.username) {
      alert('Please fill Name');
      return;
    }
    if (!this.props.user.email) {
      alert('Please fill Email');
      return;
    }
    if (!this.props.user.password) { 
      alert('Please fill Password');
      return;
    }
    //Show Loader
    this.props.signup()
  };
  render(){
  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'space-around'}}>
      <Text style={{
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center'
            }}> Sign up </Text>
      <View> 
      <View style={styles.SectionStyle}>
            <Entypo 
              name="user" 
              size={30} 
              color={'#3ec1d3'} 
            /> 

            
            <TextInput
              style={styles.inputStyle}
              onChangeText={username => this.props.updateUsername(username)}
              placeholder="Username"
              placeholderTextColor="#3ec1d3"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />


            

          </View>
          <View style={styles.SectionStyle}>
                                  <Icon 
              name="email" 
              size={30} 
              color={'#3ec1d3'} 
            />

            
            <TextInput
              style={styles.inputStyle}
              onChangeText={email => this.props.updateEmail(email)}
              placeholder="Email"
              placeholderTextColor="#3ec1d3"
              keyboardType="email-address"
              returnKeyType="next"
              blurOnSubmit={false}
            />




          </View>
          <View style={styles.SectionStyle}>
                        <Icon 
              name="lock" 
              size={30} 
              color={'#3ec1d3'} 
            />


            <TextInput
              style={styles.inputStyle}
              onChangeText={password => this.props.updatePassword(password)
              }
              placeholder="Password"
              placeholderTextColor="#3ec1d3"
              returnKeyType="next"
              secureTextEntry={true}
              blurOnSubmit={false}
            />
          </View>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={this.handleSubmitButton}
      >
        <Text style={styles.buttonTextStyle}>SIGN UP</Text>
      </TouchableOpacity>
              <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
            }}> YOU CAN ALSO SIGN UP WITH </Text>


      <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>

        <TouchableOpacity
          activeOpacity={0.8} 
          underlayColor="#ffffff"
        >

          <View style={styles.buttonText2}>
            <Icon name={'google'} size={40} color={'black'}/>
          </View>

        </TouchableOpacity>
        
        <TouchableOpacity
           activeOpacity={0.8} 
           underlayColor="#ffffff"
        >

          <View style={styles.buttonText2}>
              <Icon name={'facebook'} size={40} color={'#3b5998'}/>
          </View>

        </TouchableOpacity>
      </View>

    </View>
  );
  }
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#3ec1d3'
  },
  buttonStyle: {
    backgroundColor: '#3ec1d3',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 50,
    elevation: 8, 
    shadowColor: '#0047BB',
    shadowRadius: 8, 
    marginVertical:25,
    marginHorizontal:35
  },
  buttonTextStyle: {
    color: 'white',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingHorizontal: 35,
    paddingVertical:5,
    borderRadius: 30,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});


const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, updateUsername, updateLoading, signup, getUser}, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUpScreen)