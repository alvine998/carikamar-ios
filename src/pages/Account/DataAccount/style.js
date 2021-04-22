import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
    rounder:{
        height:normalize(80),
        width:normalize(80),
        borderRadius:20,
        paddingTop:normalize(10),
    },
    img:{
        height:normalize(80),
        width:normalize(80),
    },
    txtinput:{
        width:normalize(300),
        height:normalize(40),
        borderWidth:1,
        borderRadius:10,
        fontSize:normalize(15),
        padding:normalize(10)
    }
});