import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConfirmEmail from './src/pages/ForgetPass/ConfirmEmail';
import ConfirmPhone from './src/pages/ForgetPass/ConfirmPhone';
import VerifyEmail from './src/pages/ForgetPass/VerifyEmail';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import {createStackNavigator} from '@react-navigation/stack';
import ResetPass from './src/pages/ForgetPass/ResetPass';
import HomeScreen from './src/pages/Home';
import { BotNav } from './src/components/BotNav';
import {createDrawerNavigator} from '@react-navigation/drawer';

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName={HomeScreen}>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Register" component={Register}/>
    //     <Stack.Screen name="ConfirmEmail" component={ConfirmEmail}/>
    //     <Stack.Screen name="ConfirmPhone" component={ConfirmPhone}/>
    //     <Stack.Screen name="VerifyEmail" component={VerifyEmail}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={BotNav}/>
      </Drawer.Navigator>
    </NavigationContainer>
    // <View>
    //   <Login/>
    // </View>
    );
}
