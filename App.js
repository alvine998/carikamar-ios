import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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
import BucketList from './src/pages/Bucket/BucketList';
import SideBar from './src/components/Sidebar';
import UserAccount from './src/pages/Account/UserAccount';
import normalize from 'react-native-normalize';
import BucketKoleksi from './src/pages/Bucket/BucketKoleksi';
import DataAccount from './src/pages/Account/DataAccount';
import DetailKoleksi from './src/pages/Bucket/DetailKoleksi';
import TambahItem from './src/pages/Bucket/TambahItem';
import Communicate from './src/pages/Communicate';
import Choose from './src/pages/Hotel/Choose';
import ListHotel from './src/pages/Hotel/ListHotel';
import Location from './src/pages/Hotel/Location';
import ProfileHotel from './src/pages/Hotel/ProfileHotel';
import RoomHotel from './src/pages/Hotel/RoomHotel';
import DataPemesanan from './src/pages/Hotel/DataPemesanan';
import RincianPemesanan from './src/pages/Hotel/RincianPemesan';
import Pembayaran from './src/pages/Hotel/Pembayaran';
import PopupSuccess from './src/components/PopupSuccess';
import AturKhusus from './src/pages/Hotel/DataPemesanan/AturKhusus';
import SettingsOption from './src/pages/Settings';
import InfoAkun from './src/pages/Settings/InfoAkun';
import Keamanan from './src/pages/Settings/Keamanan';
import Lokasi from './src/pages/Settings/Lokasi';
import Bahasa from './src/pages/Settings/Bahasa';
import Notifikasi from './src/pages/Settings/Notifikasi';
import Kebijakan from './src/pages/Settings/Kebijakan';
import Testing from './src/pages/Testing';


export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  // const HomeStackNavigator = () => {
  //   return
  //   <Stack.Navigator>
  //     <Stack.Screen name="Login" component={Login} />
  //     <Stack.Screen name="Register" component={Register}/>
  //     <Stack.Screen name="ConfirmEmail" component={ConfirmEmail}/>
  //     <Stack.Screen name="ConfirmPhone" component={ConfirmPhone}/>
  //     <Stack.Screen name="VerifyEmail" component={VerifyEmail}/>
  //   </Stack.Navigator>
  // }

  // const Navigation = () => {
  //   return

  // }
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="HomeScreen" drawerContent={(props) => <SideBar {...props}/>}>
    //     <Drawer.Screen name="Home" component={BotNav}/>
    //     <Drawer.Screen name="Bitbucket" component={BucketList}/>
    //     <Drawer.Screen name="My Profile" component={DataAccount}/>
    //     <Drawer.Screen name="Pesanan" component={Communicate}/>
    //   </Drawer.Navigator>
    // </NavigationContainer>
    

    <ScrollView>
      <ProfileHotel/>
    </ScrollView>
    );
}
