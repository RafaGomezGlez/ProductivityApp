import React from 'react';
import {} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants'


import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react'

import MainStack from './navigation/MainStack'

import reducer from './reducers'

const middleware = applyMiddleware(thunkMiddleware)
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, middleware)
const persistore = persistStore(store)


//This is going to be like this in order to create a login screen
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>  
        <SafeAreaProvider>
          <NavigationContainer>
            <MainStack/>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate> 
    </Provider>
  );
}
