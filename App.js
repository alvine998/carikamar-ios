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
import SideNav from './src/components/SideNav';


export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  // const HomeStackNavigator = () => {
  //   return
  // }

  // const Navigation = () => {
  //   return

  // }
  return (
    <NavigationContainer>
        <Stack.Navigator>
        {/* Awalan */}
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} options={{headerShown: false}}/>
          <Stack.Screen name="ConfirmPhone" component={ConfirmPhone} options={{headerShown: false}}/>
          <Stack.Screen name="VerifyEmail" component={VerifyEmail} options={{headerShown: false}}/>
          <Stack.Screen name="ResetPass" component={ResetPass} options={{headerShown: false}}/>
        {/* Dahboard */}
          <Stack.Screen name="Home" component={SideNav} options={{headerShown: false}}/>
          <Stack.Screen name="Communicate" component={Communicate} options={{headerShown: false}}/>
        {/* BucketList */}
          <Stack.Screen name="BucketList" component={BucketList} options={{headerShown: false}}/>
          <Stack.Screen name="BucketKoleksi" component={BucketKoleksi} options={{headerShown: false}}/>
          <Stack.Screen name="DetailKoleksi" component={DetailKoleksi} options={{headerShown: false}}/>
          <Stack.Screen name="TambahItem" component={TambahItem} options={{headerShown: false}}/>
        {/* Account */}
          <Stack.Screen name="UserAccount" component={UserAccount} options={{headerShown: false}}/>
          <Stack.Screen name="DataAccount" component={DataAccount} options={{headerShown: false}}/>
        {/* Hotel */}
          <Stack.Screen name="Choose" component={Choose} options={{headerShown: false}}/>
          <Stack.Screen name="ListHotel" component={ListHotel} options={{headerShown: false}}/>
          <Stack.Screen name="Location" component={Location} options={{headerShown: false}}/>
          <Stack.Screen name="ProfileHotel" component={ProfileHotel} options={{headerShown: false}}/>
          <Stack.Screen name="RoomHotel" component={RoomHotel} options={{headerShown: false}}/>
        {/* Transactions */}
          <Stack.Screen name="RincianPemesanan" component={RincianPemesanan} options={{headerShown: false}}/>
          <Stack.Screen name="Pembayaran" component={Pembayaran} options={{headerShown: false}}/>
          <Stack.Screen name="DataPemesanan" component={DataPemesanan} options={{headerShown: false}}/>
          <Stack.Screen name="AturKhusus" component={AturKhusus} options={{headerShown: false}}/>
        {/* Settings */}
          <Stack.Screen name="SettingsOption" component={SettingsOption} options={{headerShown: false}}/>
          <Stack.Screen name="InfoAkun" component={InfoAkun} options={{headerShown: false}}/>
          <Stack.Screen name="Keamanan" component={Keamanan} options={{headerShown: false}}/>
          <Stack.Screen name="Lokasi" component={Lokasi} options={{headerShown: false}}/>
          <Stack.Screen name="Bahasa" component={Bahasa} options={{headerShown: false}}/>
          <Stack.Screen name="Notifikasi" component={Notifikasi} options={{headerShown: false}}/>
          <Stack.Screen name="Kebijakan" component={Kebijakan} options={{headerShown: false}}/>

        </Stack.Navigator>
    </NavigationContainer>
  
    );
}
