import { Body, Button, Content, Header, Icon, Left, Right, Segment, Text } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { roomsolong } from '../../../assets';
import DataPemesan from '../../../components/DataPemesan';
import DataTamu from '../../../components/DataTamu';

class DataPemesanan extends Component {
    constructor(props) {
        super(props);
        this.state = { check:1 };
    }
    render() {
        const screenheight = Dimensions.get('window').height;
        const check = this.state.check;
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
                <ScrollView>
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

                    <View style={{padding:normalize(10), borderTopColor:'#dfdfdf', borderTopWidth:1}}>
                        <Text style={{fontSize:normalize(16), fontWeight:'bold'}}>Detail Pemesanan Anda</Text>
                        <View style={{alignItems:'center', paddingTop:normalize(10)}}>
                            <TouchableOpacity style={{flexDirection:'row', borderWidth:1,borderColor:'#dfdfdf', borderRadius:10, height:normalize(100),width:'90%', justifyContent:'center', alignItems:'center'}}>
                                <Image source={roomsolong} style={{height:normalize(80), width:normalize(80), borderRadius:10}} />
                                <View style={{paddingLeft:normalize(10), paddingRight:normalize(10)}}>
                                    <Text style={{fontSize:normalize(16)}}>Villa So Long Banyuwangi</Text>
                                    <Text style={{fontSize:normalize(16), color:'#808080'}}>Superior Room View Garden</Text>
                                    <Text style={{fontSize:normalize(16), color:'#808080'}}>1 Kamar, 1 Malam, 2 Dewasa</Text>
                                    <Text style={{fontSize:normalize(16), color:'#808080'}}>Check-in Kam, 14 Feb 2021</Text>
                                    <Text style={{fontSize:normalize(16), color:'#808080'}}>Check-out Jum, 15 Feb 2021</Text>
                                </View>
                                <Icon type={"FontAwesome5"} name="chevron-down" style={{fontSize:normalize(25), color:'#299BD7'}} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{padding:normalize(10), borderTopColor:'#dfdfdf', borderTopWidth:1}}>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => this.setState({check: 1})}>
                                <Text style={{fontSize:normalize(16), color:'#299BD7'}}>Data Pemesan</Text>
                            </TouchableOpacity>
                            <Right/>
                            <TouchableOpacity onPress={() => this.setState({check: 2})}>
                                <Text style={{fontSize:normalize(16), color:'#299BD7'}}>Data Tamu</Text>
                            </TouchableOpacity>
                        </View>
                        {check == 1 ? <DataPemesan/> : <DataTamu/>}
                    </View>

                    <View style={{padding:normalize(10), borderTopColor:'#dfdfdf', borderTopWidth:1}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:normalize(18), color:'#299BD7', fontWeight:'bold'}}>Atur Permintaan Khusus</Text>
                            <Right/>
                            <TouchableOpacity>
                                <Icon type={"FontAwesome5"} name="pencil-alt" style={{fontSize:normalize(20), color:'#299BD7'}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row', paddingTop:normalize(10)}}>
                            <Text style={{fontSize:normalize(18), color:'#299BD7', fontWeight:'bold'}}>Bayar di hotel</Text>
                            <Right/>
                            <Icon type={"FontAwesome5"} name="check-square" style={{fontSize:normalize(20), color:'gray'}} />
                        </View>
                    </View>

                    <View style={{padding:normalize(10), borderTopColor:'#dfdfdf', borderTopWidth:1}}>
                        <Text style={{fontWeight:'bold'}}>Rincian Harga</Text>
                        <Text style={{fontSize:normalize(16)}}>(1x) Superior Room View Garden</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={{fontSize:normalize(16)}}>Total</Text>
                            <Text style={{fontSize:normalize(20), color:'#E75A06'}}> Rp 720.000 </Text>
                            <Text style={{fontSize:normalize(16), color:'#808080'}}>termasuk pajak</Text>
                        </View>
                        <View style={{padding:normalize(10)}}>
                            <Button full primary rounded style={{backgroundColor:'#22599C', height:normalize(40)}}>
                                <Text style={{fontSize:normalize(20), color:'white'}}>Pesan Sekarang</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default DataPemesanan;