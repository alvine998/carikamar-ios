import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
    images:{
        width:normalize(250),
        height:normalize(250)
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:normalize(20)
    },
    border:{
        borderWidth:1,
        borderRadius:30,
        width:normalize(200),
        height:normalize(50),
        backgroundColor:'#dfdfdf',
        borderColor:'white',
        paddingLeft:normalize(20)
    },
    btnContainer:{
        height:normalize(50),
        paddingTop:normalize(20),
        paddingBottom:normalize(20)
    },
    btnInside:{
        backgroundColor:'#299BD7',
    }
})