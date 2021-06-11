import { Body, Header, Icon, Left, Right, Text } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';

class DataPemesanan extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const screenheight = Dimensions.get('window').height;
        return (
            <View style={{height:'auto', maxHeight: screenheight}}>
                <Header transparent>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:'#299BD7', fontSize:normalize(25)}} />
                    </Left>
                    <Body>
                        <Text style={{color:'#299BD7'}}>Data Pemesanan</Text>
                    </Body>
                    <Right>
                        <Icon type={"FontAwesome5"} name="ellipsis-v" style={{color:'#299BD7', fontSize:normalize(25)}} />
                    </Right>
                </Header>
                <View style={{padding:normalize(20), borderTopWidth:1, borderTopColor:'#dfdfdf', alignItems:'center', justifyContent:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity style={{height:normalize(50), width:normalize(50), backgroundColor:'#299BD7', borderRadius:30}}>

                            </TouchableOpacity>
                            <Text style={{fontSize:normalize(14)}}>Data Pemesanan</Text>
                        </View>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <View style={{borderTopWidth:1, width:normalize(70), marginBottom:normalize(20), marginLeft:normalize(-17), borderTopColor:'#299BD7'}} />
                        </View>
                        <View style={{alignItems:'center', marginLeft:normalize(-25)}}>
                            <TouchableOpacity style={{height:normalize(50), width:normalize(50), backgroundColor:'#dfdfdf', borderRadius:30}}>

                            </TouchableOpacity>
                            <Text style={{fontSize:normalize(14)}}>Rincian Pemesanan</Text>
                        </View>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <View style={{borderTopWidth:1, width:normalize(70), marginBottom:normalize(20), marginLeft:normalize(-25), borderTopColor:'#299BD7'}} />
                        </View>
                        <View style={{alignItems:'center', marginLeft:normalize(-5)}}>
                            <TouchableOpacity style={{height:normalize(50), width:normalize(50), backgroundColor:'#dfdfdf', borderRadius:30}}>

                            </TouchableOpacity>
                            <Text style={{fontSize:normalize(14)}}>Pembayaran</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default DataPemesanan;