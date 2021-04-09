import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableNativeFeedback, 
    ImageBackground, 
    Image, 
    TouchableOpacity ,
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import FocusAwareStatusBar from '../components/FocusAwareStatusBar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Overlay } from 'react-native-elements';
import fb from '../firebase/firebase'
import { 
    updateEmail, 
    updatePassword, 
    login,
    loginAnon,
    getUser,
} from '../actions/user'

const image = { uri: 'https://wallpaperset.com/w/full/4/6/3/105103.jpg' };


class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          email: '',
          password: ''
        }
    }

    componentDidMount() {
		  fb.auth().onAuthStateChanged(user => {
			  if (user) {
          this.props.getUser(user.uid)
			  }
		})
    }

    logInMail = () => {
      this.props.login()
    }

    logInAnon = () => {
      this.props.loginAnon()
    }

    render() {
        return (
            <View style={styles.container}>

                <ImageBackground  
                    style={styles.backgroundImage} 
                    source={image}
                    blurRadius={10}
                >
                  <View style={{backgroundColor:'rgb(255,255,255)', borderRadius: 30}} >
                  


                    <Text style={styles.title}> Welcome! </Text>
                
                    <View style={styles.iconField}>

                        <Icon 
                            name="email" 
                            size={30} 
                            color={'black'} 
                        />

                        <TextInput
                            onChangeText={email => this.props.updateEmail(email)}
                            autoCompleteType={'email'}
                            clearButtonMode={'while-editing'}
                            returnKeyLabel={'next'}
                            returnKeyType={'next'}
                            placeholder={'Email'}
                            placeholderTextColor = '#58595c'
                            style={styles.textInput}
                            keyboardType = {'email-address'}
                        />

                    </View>

                    <View style={styles.iconField}>

                        <Icon 
                            name="lock" 
                            size={30} 
                            color={'black'} 
                        />

                        <TextInput 
                            onChangeText={password => this.props.updatePassword(password)}
                            autoCompleteType={'password'}
                            clearButtonMode={'while-editing'}
                            returnKeyLabel={'done'}
                            returnKeyType={'done'}
                            placeholder={'Password'}
                            placeholderTextColor = '#58595c'
                            secureTextEntry={true}
                            style={styles.textInput}
                        />

                    </View>


                    <TouchableOpacity style={{alignItems:'center'}}
                    >
                        <Text style={styles.forgotPassword}>Forgot password?</Text>
                    </TouchableOpacity>
                    
                    <View style={{marginTop: 25, marginHorizontal:55}}>

                        <TouchableOpacity
                            activeOpacity={0.8} 
                            underlayColor="#ffffff"
                            onPress={this.logInMail}
                        >

                            <View style={styles.buttonText}>
                                <Text style={{color: 'white',fontSize:20,fontWeight:'bold',textAlign:'center'}}> LOG IN </Text>
                            </View>

                        </TouchableOpacity>
                    </View>

                    <View>
                                            <View style={{
                          marginTop:20,
                          height: 2,
                          width: "100%",
                          backgroundColor: "#CED0CE",
                        }}/>
                        <View style={{alignSelf:'center', padding:5}}>
                        <Text style={{textAlign:'center',color:'black', fontWeight:'bold'}}> OR LOG IN WITH </Text>
                        </View>
                    </View>




                    <View style={{marginTop: 20,flex: 1,
        flexDirection: 'row', justifyContent:'center', marginBottom:50}}>

                        <TouchableNativeFeedback 
                            activeOpacity={0.8} 
                            underlayColor="#ffffff"
                        >

                            <View style={styles.buttonText2}>
                                <Icon name={'google'} size={40} color={'black'}/>
                              
                            </View>

                        </TouchableNativeFeedback>

                        <View style= {{padding:30}} />


                         <TouchableNativeFeedback 
                            activeOpacity={0.8} 
                            underlayColor="#ffffff"
                            style={{marginLeft:100}}
                        >

                            <View style={styles.buttonText2}>
                                <Icon name={'facebook'} size={40} color={'#3b5998'}/>
                  
                            </View>

                        </TouchableNativeFeedback>
                    </View>


                    <TouchableOpacity style={{alignItems:'center'}}
                      onPress={this.logInAnon}
                    >
                        <Text style={{fontStyle:'italic'}}>Anonymous log in</Text>
                    </TouchableOpacity>

                    <FocusAwareStatusBar  barStyle="dark-content" backgroundColor="auto"/>
                    </View>
                    <Text style={[styles.forgotPassword,{marginTop:15}]}>Don't have an account?</Text>
                    <TouchableOpacity style={{alignItems:'center'}}
                      onPress={()=>this.props.navigation.navigate("SignUpScreen")}
                    >
                        <Text style={{fontStyle:'italic', fontSize:20, fontWeight:'bold',color:'white', marginTop: 3}}>SIGN UP FOR FREE</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );  
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a1aedb',
        alignItems: 'center',
        justifyContent: 'center',
    },   
                    
    title:{
        alignSelf: 'center',
        fontSize: 25,
        marginBottom: 40,
        marginTop: 20,
        color: 'black',
        fontWeight: 'bold',
    },
        
    iconField: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
        
    textInput: {
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        textAlign: 'center',
        borderRadius: 20
    },
    
    buttonText: {
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 50,
        elevation: 8,
        shadowColor: '#0047BB',
        shadowRadius: 8,
        backgroundColor: '#3ec1d3'
    },

    buttonText2: {
        elevation: 20
    },
    
    forgotPassword: {
        color: 'black',
        fontSize: 12,
        textAlign:'center',
        textDecorationLine: 'underline',
    },
        
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        opacity: 0.8,
        backgroundColor: 'white'
    },
       
});


const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, login, getUser, loginAnon}, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen)