import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ProgressChart from './components/ProgressCircle'
import Constants from 'expo-constants'
import HomePageComponent from './screens/HomePage'
import FormularyPageComponent from './screens/FormularyPage'
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

import {styles} from './styles/HomeScreenStyle'
import SettingsPage from './screens/SettingsPage'



//Declaring the bottom tab navigator
const Tab = createBottomTabNavigator();

//Declaring the 3 Stack navigators for each bottom tab
const HomeStack = createStackNavigator();
const StatisticsStack = createStackNavigator();
const SettingsStack = createStackNavigator();

//Declaration of each StackScreen whith their respectives names
function HomeStackScreen(){
  return(
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen
        name = "Home"
        component={HomeScreen}
        options = {{
          headerStyle:{
            backgroundColor: '#2D4D73'
          },
          headerTintColor: '#fff',
          headerTytleStyle: {
            fontWeight: 'bold'
          },

        }}
      />
      <HomeStack.Screen
        name = "Formulary"
        component={FormularyScreen}
        options = {{
          headerStyle:{
            backgroundColor: '#2D4D73'
          },
          headerTintColor: '#fff',
          headerTytleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
    </HomeStack.Navigator>
  );
}

function StatisticsStackScreen(){
  return (
    <StatisticsStack.Navigator headerMode="none">
      <StatisticsStack.Screen
        name = "Statistics"
        component = {StatisticsScreen}
        options = {{
          headerStyle:{
            backgroundColor: '#2D4D73'
          },
          headerTintColor: '#fff',
          headerTytleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
    </StatisticsStack.Navigator>

  )
}

function SettingsStackScreen(){
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name = "Settings"
        component = {SettingsScreen}
        options = {{
          headerStyle:{
            backgroundColor: '#2D4D73'
          },
          headerTintColor: '#fff',
          headerTytleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
    </SettingsStack.Navigator>
  )
}

//Components in our HomeScreen
function HomeScreen({navigation}){
  return (
    <ScrollView style = {{marginBottom: 75}}>
      <HomePageComponent/>
      <View style = {{margin: 50}}>
        <Button
          title = "Press me"
          onPress = {() => navigation.navigate('Formulary')}
        />
      </View>
      <View style={styles.containerTareas}>
        <View style={styles.containerSquare}>
          <View style={styles.logo}>
            <Ionicons name="musical-notes" size={65} color='black' />
          </View>
          <View style={styles.columnaMitad}>
            <Text style={styles.textMeta}> Tocar piano </Text>
            <Text style={styles.textCantidad}> 12/100 </Text>
          </View>
        </View>

          <View style={styles.containerSquare}>
          </View>
      </View>
    </ScrollView>
  );
}

//Components in our StatisticsScreen
function StatisticsScreen(){
  return (
    <View style = {{margin: 20, flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text> Statics </Text>
    </View>
  );
}

//Components in out SettingsScreen
function SettingsScreen(){
  return(
    <View style = {{margin: 20, flex:1, justifyContent: 'center',
    alignItems: 'center'}}>
      <Text> Settings </Text>
    </View>
  );
}

//StackComponent for the button in HomePage
function FormularyScreen(){
  return (
    <View>
      <FormularyPageComponent/>
      <View style = {{margin: 20, flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text> Formulary Beta </Text>
      </View>
    </View>
  );
}

//Intended to be separated
function MyTabs() {
  return (

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              } else if (route.name === 'Statistics') {
                iconName = focused ? 'stats-chart-sharp' : 'stats-chart-outline'
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#1979a9',
            inactiveTintColor: 'gray',
            labelStyle: {fontSize: 15, color: 'black'},
            activeBackgroundColor: '#cce7e8',
            inactiveBackgroundColor: 'white',
            style: { position: 'absolute' }
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Statistics" component={StatisticsStackScreen} />
          <Tab.Screen name="Settings" component={SettingsPage} />

        </Tab.Navigator>
  );
}

//This is going to be like this in order to create a login screen
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
