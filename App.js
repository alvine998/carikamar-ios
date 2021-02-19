import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import Register from './src/pages/Register';

export default function App() {
  return (
    <View>
      <Register/>
    </View>
  );
}
