import { Body, Card, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { bg3 } from '../../../assets';

class Pesanan extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ScrollView>
                <Header transparent>
                    <Left>
                        <Text style={{color:'#299BD7', fontSize:normalize(20)}}>Pesanan</Text>
                    </Left>
                    <Right>
                        <Icon
                            type="FontAwesome5"
                            name="ellipsis-v"
                            style={{ color: "#299BD7", fontSize: normalize(25) }}
                        />
                    </Right>
                </Header>
                <View style={{padding:normalize(20)}}>
                    <Card style={{borderRadius:10}}>
                        <View style={{padding:normalize(20)}}>
                            <View style={{alignItems:'center'}}>
                                <Image source={bg3} style={{width:normalize(200), height:normalize(200)}} />
                            </View>
                            <Text style={{textAlign:'center', color:'black'}}>
                                Kamu Belum Memiliki {'\n'}
                                Voucher Hotel Aktif & Riwayat Pesanan
                            </Text>
                            <Text style={{textAlign:'center', color:'#808080', paddingTop:normalize(10), fontSize:normalize(14)}}>
                                Yuk, buat rencana liburan kamu disini ya! {'\n'}
                                Pilih hotelmu dan siap untuk berpetualang.
                            </Text>
                            <View style={{borderBottomWidth:1, padding:normalize(20), borderBottomColor:'#dfdfdf'}} />
                            <View style={{paddingTop:normalize(30)}}>
                                <Text style={{color:'#299BD7', fontSize:normalize(20), textAlign:'center'}}>Cari Hotel</Text>
                            </View>
                        </View>
                    </Card>
                </View>

                {/* Card Hotel */}
                <View style={{padding:normalize(20)}}>
                        <View>
                            <Text style={{color:'black'}}>Rekomendasi Penginapan Terpopuler</Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={{paddingTop:normalize(10)}}>
                                <View style={{borderWidth:1, borderRadius:10, width:normalize(170), height:normalize(100)}}>
                                    <Image/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingTop:normalize(10), paddingLeft:normalize(10)}}>
                                <View style={{borderWidth:1, borderRadius:10, width:normalize(170), height:normalize(100)}}>
                                    <Image/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingTop:normalize(10), paddingLeft:normalize(10)}}>
                                <View style={{borderWidth:1, borderRadius:10, width:normalize(170), height:normalize(100)}}>
                                    <Image/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingTop:normalize(10), paddingLeft:normalize(10)}}>
                                <View style={{borderWidth:1, borderRadius:10, width:normalize(170), height:normalize(100)}}>
                                    <Image/>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
            </ScrollView>
        );
    }
}

export default Pesanan;