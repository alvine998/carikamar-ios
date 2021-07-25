import React, { Component } from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBar from '../Sidebar';
import { BotNav } from '../BotNav';
import BucketList from '../../pages/Bucket/BucketList';
import DataAccount from '../../pages/Account/DataAccount';
import Communicate from '../../pages/Communicate';

const Drawer = createDrawerNavigator();

const SideNav = (props) => {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen" drawerContent={(props) => <SideBar {...props}/>}>
         <Drawer.Screen name="Home" component={BotNav}/>
         <Drawer.Screen name="Bitbucket" component={BucketList}/>
         <Drawer.Screen name="My Profile" component={DataAccount}/>
         <Drawer.Screen name="Pesanan" component={Communicate}/>
       </Drawer.Navigator>
    )
}

export default SideNav;