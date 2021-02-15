import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import Setting from '../components/Setting'
import {styles} from '../styles/SettingsStyles'
import {icons} from '../data/iconsData'
import FocusAwareStatusBar from '../components/FocusAwareStatusBar'
import fb from '../firebase/firebase'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { 
  getUser
} from '../actions/user'

class SettingsPage extends React.PureComponent{
  
  logOut = () => {
    fb.auth().signOut().then(
      this.props.getUser('null')
    )
  } 

  key = (item, index) => {
    return item.text+index
  }
 
  render() {
    return(
      <SafeAreaView style = {styles.container} >
        <ScrollView> 
          <FocusAwareStatusBar  barStyle="dark-content" backgroundColor="white"/>
            <FlatList
              renderItem={({item, index})=>(<Setting item={item} logOut = {this.logOut} />)}
              data={icons}
              keyExtractor={(item,index)=>this.key(item,index)}
            /> 
            
          


        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ getUser }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsPage)

