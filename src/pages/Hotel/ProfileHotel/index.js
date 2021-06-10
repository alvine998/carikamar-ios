import { DrawerView } from '@react-navigation/drawer';
import { Body, Button, Container, Footer, FooterTab, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import MapView from 'react-native-maps';
import { icn1, solong1, solong2, eat, swiming, wifi } from '../../../assets';
import FooterPrice from '../../../components/FooterPrice';

class ProfileHotel extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height:normalize(530)}}>
                    <ScrollView>
                        {/* Ini Header sekaligus foto" */}
                        <ImageBackground source={solong1} style={{height:normalize(300)}}>
                            <Header transparent>
                                <Left>
                                    <Icon type={"FontAwesome5"} name="chevron-left" style={{fontSize:normalize(25), color:'white'}}/>
                                </Left>
                                <Body>
                                    <Text style={{color:'white'}}>Detail Hotel</Text>
                                </Body>
                                <Right>
                                    <Icon type={"FontAwesome5"} name="ellipsis-v" style={{fontSize:normalize(25), color:'white'}}/>
                                </Right>
                            </Header>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Right/>
                                <ImageBackground source={solong2} style={{width:normalize(150), alignItems:'center',justifyContent:'center', height:normalize(120), marginTop:normalize(85)}}>
                                    <Text style={{color:'white', textAlign:'center', fontSize:normalize(16 ) }}>Lihat Semua Foto {"\n"} +25 Lainnya</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </ImageBackground>
                        {/* Ini tanggal pemesanan */}
                        <View style={{padding:normalize(10), flexDirection:'row'}}>
                            <Icon type={"FontAwesome5"} name="calendar-alt" style={{fontSize:normalize(25)}}/>
                            <Text>14 Feb - 15 Feb</Text>
                        </View>
                        {/* Ini profil akomodasi */}
                        <View style={{padding:normalize(10)}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{height:normalize(40),borderBottomRightRadius:10,borderTopLeftRadius:10,alignItems:'center', justifyContent:'center', width:normalize(100), backgroundColor:'orange'}}>
                                    <Text style={{color:'white'}}>Villa</Text>
                                </View>
                                <View style={{justifyContent:'center', paddingLeft:normalize(10)}}>
                                    <Text style={{fontWeight:'bold', color:'black', fontSize:normalize(24)}}>Villa So Long</Text>
                                </View>
                                <Right/>
                                <View style={{flexDirection:'row', justifyContent:'center', alignItems:"center"}}>
                                    <Icon type="FontAwesome" name="star" style={{color:'orange', fontSize:normalize(20), paddingTop:normalize(5)}}/>
                                    <Icon type="FontAwesome" name="star" style={{color:'orange', fontSize:normalize(20), paddingTop:normalize(5)}}/>
                                </View>
                            </View>
                            {/* Ini Lokasi Akomodasi */}
                            <View style={{flexDirection:'row', paddingTop:normalize(10)}}>
                                <Icon type="FontAwesome5" name="map-marker-alt" style={{color:'#299BD7', fontSize:normalize(20), paddingTop:normalize(5)}}/>
                                <View style={{justifyContent:'center', paddingLeft:normalize(10)}}>
                                    <Text style={{fontSize:normalize(16)}}>Banyuwangi, Jawa Timur</Text>
                                </View>
                                <Right/>
                                <TouchableOpacity style={{justifyContent:'center'}}>
                                    <Text style={{color:'#299BD7', fontSize:normalize(16)}}>Lihat Peta</Text>
                                </TouchableOpacity>
                            </View>
                            {/* Ini Review Akomodasi TripAdvisor */}
                            <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(10)}}/>
                            <View style={{paddingTop:normalize(10)}}>
                                <Text style={{fontWeight:'bold', color:'black'}}>Review</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:normalize(24), color:'green'}}>8.3</Text>
                                    <View style={{paddingLeft:normalize(10)}}>
                                        <Text style={{fontSize:normalize(14)}}>Luar Biasa</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <View>
                                                <Text  style={{fontSize:normalize(14)}}>TripAdvisor 28 ulasan</Text>
                                            </View>
                                            
                                        </View>
                                    </View>
                                    <Right/>
                                    <TouchableOpacity style={{justifyContent:'center'}}>
                                        <Text style={{color:'#299BD7', fontSize:normalize(16)}}>Lihat Peta</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* Ini Fasilitas Umum Akomodasi */}
                            <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(10)}}/>
                            <View style={{flexDirection:'row', paddingTop:normalize(10)}}>
                                <Text style={{fontWeight:'bold', color:'black'}}>Fasilitas Umum</Text>
                                <Right/>
                                <TouchableOpacity style={{justifyContent:'center'}}>
                                    <Text style={{color:'#299BD7', fontSize:normalize(16)}}>Lihat Fasilitas Lainnya</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center', padding:normalize(20)}}>
                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                    <Image source={icn1} style={{width:normalize(50), height:normalize(50)}}/>
                                    <Text style={{textAlign:'center', color:'black'}}>AC</Text>
                                </View>
                                <View style={{alignItems:'center', justifyContent:'center', paddingLeft:normalize(10)}}>
                                    <Image source={wifi} style={{width:normalize(50), height:normalize(50)}}/>
                                    <Text style={{textAlign:'center', color:'black'}}>Wifi</Text>
                                </View>
                                <View style={{alignItems:'center', justifyContent:'center', paddingLeft:normalize(10)}}>
                                    <Image source={swiming} style={{width:normalize(50), height:normalize(50)}}/>
                                    <Text style={{textAlign:'center', color:'black'}}>Kolam Renang</Text>
                                </View>
                                <View style={{alignItems:'center', justifyContent:'center', paddingLeft:normalize(10)}}>
                                    <Image source={eat} style={{width:normalize(50), height:normalize(50)}}/>
                                    <Text style={{textAlign:'center', color:'black'}}>Sarapan</Text>
                                </View>
                            </View>

                            {/* Ini Map Lokasi */}
                            <View>
                                <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(10)}}/>
                                <Text style={{fontWeight:'bold', color:'black'}}>Lokasi</Text>
                                <MapView
                                    initialRegion={{
                                        latitude: 37.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                />
                            </View>

                            {/* Ini Informasi */}
                            <View>
                                <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(10)}}/>
                                <Text style={{fontWeight:'bold', color:'black', paddingBottom:normalize(10)}}>Informasi</Text>
                                <Text style={{color:'black', fontSize:normalize(16)}}>Kebijakan Waktu :</Text>
                                <View style={{paddingLeft:normalize(10)}}>
                                    <Text style={{color:'#808080', fontSize:normalize(16)}}>Waktu Check-in : 14:00 - 23:59</Text>
                                    <Text style={{color:'#808080', fontSize:normalize(16)}}>Waktu Check-out : 12:00</Text>
                                </View>

                                <Text style={{color:'black', fontSize:normalize(16)}}>Deskripsi :</Text>
                                <View style={{paddingLeft:normalize(10)}}>
                                    <Text style={{color:'#808080', fontSize:normalize(16), lineHeight:normalize(20)}}>
                                        Seperti menginap di Villa So Long Banyuwangi. 
                                        Villa yang tepat menghadap Selat Bali ini cocok
                                        banget buat staycation kamu. Penginapan ini
                                        memiliki fasilitas yang sangat lengkap.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <FooterPrice/>
            </View>
        );
    }
}


export default ProfileHotel;