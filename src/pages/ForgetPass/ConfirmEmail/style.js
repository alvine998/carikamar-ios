import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
    field:{
        height:normalize(100),
        backgroundColor:'#FAF183',
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:normalize(30)
    },
    text:{
        color:'#299BD7',
        fontSize:normalize(15),
        paddingTop:normalize(10)
    },
    border:{
        borderWidth:1,
        borderRadius:30,
        width:normalize(250),
        height:normalize(50),
        textAlign:'center',
        backgroundColor:'#dfdfdf',
        borderColor:'white',
        color:'black'
    },
    image:{
        width:normalize(200),
        height:normalize(150)
    },
    fieldText:{
        color:'black',
        fontSize:normalize(15),
        justifyContent:'center',
        textAlign:'justify',
        paddingRight:normalize(20),
        paddingLeft:normalize(20),
        paddingTop:normalize(10)
    },
    btnkirim:{
        height:normalize(50),
        backgroundColor:'#299BD7',
    },
    btnContainer:{
        width:normalize(150),
        height:normalize(50),
        paddingTop:normalize(20)
    }

})