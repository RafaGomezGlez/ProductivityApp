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

const image = { uri: 'https://www.hiltonaffiliates.com/assets/img/Canopy/canopy-city-view-1680x758.jpg' };


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
                >
                  <View style={{backgroundColor:'white', borderRadius: 30}} >
                  


                    <Text style={styles.title}> Bienvenido </Text>
                
                    <View style={styles.iconField}>

                        <Icon 
                            name="email" 
                            size={30} 
                            color={'black'} 
                        />

                        <TextInput
                            onChangeText={email => this.props.updateEmail(email)}
                            value={this.props.user.email}
                            autoCompleteType={'email'}
                            clearButtonMode={'while-editing'}
                            returnKeyLabel={'next'}
                            returnKeyType={'next'}
                            placeholder={'Correo Electrónico'}
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
                            value={this.props.user.password}
                            autoCompleteType={'password'}
                            clearButtonMode={'while-editing'}
                            returnKeyLabel={'done'}
                            returnKeyType={'done'}
                            placeholder={'Contraseña'}
                            placeholderTextColor = '#58595c'
                            secureTextEntry={true}
                            style={styles.textInput}
                        />

                    </View>


                    <TouchableOpacity style={{alignItems:'center'}}
                    >
                        <Text style={styles.forgotPassword}>Olvidaste tu Contraseña</Text>
                    </TouchableOpacity>
                    
                    <View style={{marginTop: 25, alignItems:'center'}}>

                        <TouchableNativeFeedback 
                            activeOpacity={0.8} 
                            underlayColor="#ffffff"
                            onPress={this.logInMail}
                        >

                            <View style={styles.buttonText}>
                                <Text style={{color: 'black',fontSize:20,fontWeight:'bold'}}> Iniciar Sesión </Text>
                            </View>

                        </TouchableNativeFeedback>
                    </View>

                    <View>
                                            <View style={{
                          marginTop:20,
                          height: 2,
                          width: "100%",
                          backgroundColor: "#CED0CE",
                        }}/>
                        <View style={{backgroundColor:"#CED0CE", alignSelf:'center',borderRadius:30, padding:5}}>
                        <Text style={{textAlign:'center',color:'black', fontWeight:'bold'}}> O INICIA CON </Text>
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
                                <Icon name={'facebook'} size={40} color={'blue'}/>
                  
                            </View>

                        </TouchableNativeFeedback>
                    </View>


                    <TouchableOpacity style={{alignItems:'center'}}
                      onPress={this.logInAnon}
                    >
                        <Text style={{fontStyle:'italic'}}>Inicia sin registro</Text>
                    </TouchableOpacity>

                    <FocusAwareStatusBar  barStyle="dark-content" backgroundColor="auto"/>
                    </View>
                    <Text style={[styles.forgotPassword,{marginTop:15}]}>¿No tienes una cuenta?</Text>
                    <TouchableOpacity style={{alignItems:'center'}}
                      onPress={()=>this.props.navigation.navigate("SignUpScreen")}
                    >
                        <Text style={{fontStyle:'italic', fontSize:20, fontWeight:'bold',color:'white', marginTop: 3}}>REGÍSTRATE</Text>
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
        backgroundColor: '#6ef3d6'
    },

    buttonText2: {
        elevation: 20
    },
    
    forgotPassword: {
        color: 'black',
        fontSize: 12,
        textAlign:'center'
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