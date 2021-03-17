import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
    image:{
        height:normalize(200),
        width:normalize(400),
    },
    hotelimg:{
        height:normalize(80),
        width:normalize(100)
    },
    borderimg:{
        borderWidth:1,
        borderRadius:30,
        height:normalize(100),
        width:normalize(120),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#299BD7',
        borderColor:'#299BD7'
    },
    positions:{
        alignItems:'center',
    },
    positionsImg:{
        alignItems:'center',
        marginTop:normalize(-100),
    }
})