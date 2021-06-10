import { Body, Button, Footer, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';

class FooterPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <View style={{backgroundColor:"white", alignItems:'center', justifyContent:'center', borderTopColor:"grey", borderTopWidth:1, height:normalize(100)}}>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:normalize(16), color:'black'}}>Harga Mulai Dari</Text>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:normalize(20), color:'#E75A06', fontWeight:'bold'}}>Rp. 680.000</Text>
                            <Text style={{fontSize:normalize(16), color:'black'}}> /kamar/malam</Text>
                        </View>
                        <TouchableOpacity>
                            <Button full primary rounded style={{height:normalize(40), backgroundColor:'#22599C', width:normalize(250)}}>
                                <Text style={{color:'white'}}>Pesan Kamar</Text>
                            </Button>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
 
export default FooterPrice;