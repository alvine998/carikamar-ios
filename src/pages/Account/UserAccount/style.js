import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
    cardContainer:{
        width:normalize(350),
    },
    center:{
        alignItems:'center'
    },
    avatar:{
        borderWidth:1,
        borderRadius:20,
        height:normalize(50),
        width:normalize(50),
        borderColor:'white',
        padding:normalize(10)
    },
    imageContainer:{
        height:normalize(50),
        width:normalize(50)
    }
})