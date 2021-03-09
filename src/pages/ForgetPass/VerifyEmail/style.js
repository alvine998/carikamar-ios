import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
    fieldone:{
        paddingLeft:normalize(30),
        paddingRight:normalize(30),
        paddingTop:normalize(20)
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:normalize(20),
        flexDirection:'row',
    },
    border:{
        borderWidth:1,
        width:normalize(50),
        height:normalize(80),
        textAlign:'center',
    },
    space:{
        paddingRight:normalize(10)
    },
    time:{
        paddingTop:normalize(20),
        alignItems:'center',
        justifyContent:'center'
    },
    btnContainer:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:normalize(20),
        flexDirection:'row',
    },
    btnInside:{
        backgroundColor:'#299BD7',
        width:normalize(100),
        width:normalize(200),
        height:normalize(50)
    }
});