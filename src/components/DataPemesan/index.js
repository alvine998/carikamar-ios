import { Icon, Text } from 'native-base';
import React, { Component } from 'react';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import normalize from 'react-native-normalize';


const DataPemesan = () => {
    const [value, setValue] = useState("");
    const onPressText = (event) => {
        setValue(event)
    }
    return ( 
        <View>
            <View style={{borderWidth:1, borderRadius:10, height:normalize(100),alignItems:'center', marginTop:normalize(10), padding:normalize(10)}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon type={"FontAwesome5"} name="user" style={{fontSize:normalize(25), color:'#299BD7'}} />
                    <TextInput
                        style={{borderBottomColor:'#808080', borderBottomWidth:1, marginBottom:normalize(10), height:normalize(40), fontSize:normalize(16), marginLeft:normalize(20), width:normalize(300)}}
                        placeholder="Nama Lengkap"
                        value={value}
                        onChangeText={setValue}
                    />
                </View>
            </View>
        </View>
     );
}
 
export default DataPemesan;