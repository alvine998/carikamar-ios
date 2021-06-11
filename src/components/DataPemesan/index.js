import { Icon, Text } from 'native-base';
import React, { Component } from 'react';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import normalize from 'react-native-normalize';


const DataPemesan = (props) => {
    const [value, setValue] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");

    const onPressText = (event) => {
        setValue(event)
    }
    const onPressMail = (event) => {
        setEmail(event)
    }
    const onPressWhatsapp = (event) => {
        setWhatsapp(event)
    }
    return ( 
        <View>
            <View style={{borderWidth:1, borderRadius:10, height:normalize(150),alignItems:'center', marginTop:normalize(10), padding:normalize(10)}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon type={"FontAwesome5"} name="user" style={{fontSize:normalize(25), color:'#299BD7'}} />
                    <TextInput
                        style={{borderBottomColor:'#808080', borderBottomWidth:1, marginBottom:normalize(10), height:normalize(40), fontSize:normalize(16), marginLeft:normalize(20), width:normalize(280)}}
                        placeholder="Nama Lengkap"
                        value={value}
                        onChangeText={onPressText}
                    />
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon type={"FontAwesome5"} name="envelope" style={{fontSize:normalize(25), color:'#299BD7'}} />
                    <TextInput
                        style={{borderBottomColor:'#808080', borderBottomWidth:1, marginBottom:normalize(10), height:normalize(40), fontSize:normalize(16), marginLeft:normalize(20), width:normalize(280)}}
                        placeholder="Email@domain.com"
                        value={email}
                        onChangeText={onPressMail}
                    />
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon type={"FontAwesome5"} name="whatsapp" style={{fontSize:normalize(25), color:'#299BD7'}} />
                    <TextInput
                        style={{borderBottomColor:'#808080', borderBottomWidth:1, marginBottom:normalize(10), height:normalize(40), fontSize:normalize(16), marginLeft:normalize(20), width:normalize(280)}}
                        placeholder="+62 "
                        keyboardType="number-pad"
                        value={whatsapp}
                        onChangeText={onPressWhatsapp}
                    />
                </View>
            </View>
        </View>
     );
}
 
export default DataPemesan;