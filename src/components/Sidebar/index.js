import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { Component } from 'react';
import { Image, Linking, SafeAreaView, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import { logo } from '../../assets';

const SideBar = (props) => {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{alignItems:'center', padding:normalize(20), marginTop:normalize(20)}}>
                <Image source={logo} style={{width:normalize(100), height:normalize(100)}} />
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
                <DrawerItem label="Visit Us" onPress={() => Linking.openURL('https://carikamar.id/')} />
            </DrawerContentScrollView>
            <Text
                style={{fontSize:normalize(16), textAlign:'center', color:'grey'}}
            >
                www.carikamar.id
            </Text>
        </SafeAreaView>
    );
}

export default SideBar;