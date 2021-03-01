import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import Register from './src/pages/Register';

export default function App() {
  return (
    <Provider store={store}>
    <View>
      <Register/>
    </View>
    </Provider>
  );
}
