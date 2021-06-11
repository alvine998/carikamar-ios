import { Body, Button, Card, Container, Content, Header, Icon, Left, Right, Tab, TabHeading, Tabs, Text, Title } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { cup, double_check, refund, wallet,roomsolong,persons, twinbed } from '../../../assets';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

class RoomHotel extends Component {
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
                    <Text style={{color:'#299BD7'}}>Villa So Long</Text>
                </Body>
                <Right>
                    <TouchableOpacity>
                        <Text style={{color:'#299BD7'}}>Ubah</Text>
                    </TouchableOpacity>
                </Right>
            </Header>
            <View style={{alignItems:'center', justifyContent:'center', paddingBottom:normalize(10)}}>
                <View style={{borderRadius:10, height:normalize(35), borderWidth:1, width:normalize(350), backgroundColor:'#22599C', borderColor:'#22599C',alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'white', fontSize:normalize(16)}}>Kamis, 14 Feb 2021, 1 Malam  |  1 Dewasa, 1 Kamar</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{paddingLeft:normalize(20), paddingRight:normalize(20), alignItems:'center'}}>
                    <Card style={{height:normalize(120), width:'100%', borderRadius:10}}>
                        <View style={{padding:normalize(10)}}>
                            <Text style={{fontSize:normalize(18)}}>Pilih Kamar :</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <View style={{borderWidth:1, width:normalize(70), alignItems:'center', borderColor:'#299BD7', borderRadius:10}}>
                                <Image source={double_check} style={{height:normalize(50), width:normalize(50)}}/>
                                <Text style={{fontSize:normalize(16), textAlign:'center'}}>Semua</Text>
                            </View>
                            <TouchableOpacity style={{paddingLeft:normalize(30)}}>
                                <Image source={wallet} style={{height:normalize(50), width:normalize(50)}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingLeft:normalize(30)}}>
                                <Image source={cup} style={{height:normalize(50), width:normalize(50)}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingLeft:normalize(30)}}>
                                <Image source={refund} style={{height:normalize(50), width:normalize(50)}}/>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
                <View style={{paddingLeft:normalize(20), flexDirection:'row'}}>
                    <Text style={{fontSize:normalize(18)}}>Superior Room</Text>
                    <View style={{justifyContent:'center', paddingLeft:normalize(20)}}>
                        <Icon type={"FontAwesome5"} name="dot-circle" style={{fontSize:normalize(20), color:'#299BD7'}}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontSize:normalize(16), color:'#299BD7'}}> 29m</Text>
                    </View>
                    <View style={{justifyContent:'center', paddingLeft:normalize(20)}}>
                        <Icon type={"FontAwesome5"} name="check-square" style={{fontSize:normalize(20), color:'#299BD7'}}/>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontSize:normalize(14), color:'#299BD7'}}> Tersedia 3 dari 3 kamar</Text>
                    </View>
                </View>
                <View style={{paddingTop:normalize(10)}}>
                    <Image source={roomsolong} style={{height:normalize(200), width:'100%'}}/>
                </View>
                <View style={{flexDirection:'row', padding:normalize(10), alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:normalize(18)}}>Superior Room Private Balcony</Text>
                    <Right/>
                    <Image source={double_check} style={{height:normalize(40), width:normalize(40)}}/>  
                </View>
                <View style={{flexDirection:'row', padding:normalize(10)}}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={twinbed} style={{height:normalize(30), width:normalize(30)}} />
                            <View style={{justifyContent:'center'}}>
                                <Text style={{fontSize:normalize(16), color:'#299BD7'}}> Double Bed/ Twin Bed</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={persons} style={{height:normalize(30), width:normalize(30)}} />
                            <View style={{justifyContent:'center'}}>
                                <Text style={{fontSize:normalize(16), color:'#299BD7'}}> 2 Orang</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{paddingTop:normalize(20)}}>
                            <Text style={{fontSize:normalize(16), color:'#299BD7'}}>Lihat Detail Kamar</Text>
                        </TouchableOpacity>
                    </View>
                    <Right/>
                    <View style={{paddingTop:normalize(20)}}>
                        <Text style={{fontSize:normalize(20), color:'#E75A06'}}>Rp 680.000</Text>
                        <Text style={{fontSize:normalize(16)}}>Harga /kamar/malam</Text>
                        <View>
                            <Button full rounded style={{height:normalize(30), backgroundColor:'#22599C'}}>
                                <Title style={{fontSize:normalize(14)}}>Pilih Kamar</Title>
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={{height:normalize(50), width:'100%', backgroundColor:'#dfdfdf', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:normalize(14), color:'#299BD7'}}>
                    Hotel menjamin kebersihan kamar sesuai protokol Kesehatan CHSE
                    </Text>
                </View>

                <View style={{flexDirection:'row', padding:normalize(10), alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:normalize(18)}}>Superior Room View Garden</Text>
                    <Right/>
                    <Image source={double_check} style={{height:normalize(40), width:normalize(40)}}/>  
                </View>
                <View style={{flexDirection:'row', padding:normalize(10)}}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={twinbed} style={{height:normalize(30), width:normalize(30)}} />
                            <View style={{justifyContent:'center'}}>
                                <Text style={{fontSize:normalize(16), color:'#299BD7'}}> Double Bed/ Twin Bed</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={persons} style={{height:normalize(30), width:normalize(30)}} />
                            <View style={{justifyContent:'center'}}>
                                <Text style={{fontSize:normalize(16), color:'#299BD7'}}> 2 Orang</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{paddingTop:normalize(20)}}>
                            <Text style={{fontSize:normalize(16), color:'#299BD7'}}>Lihat Detail Kamar</Text>
                        </TouchableOpacity>
                    </View>
                    <Right/>
                    <View style={{paddingTop:normalize(20)}}>
                        <Text style={{fontSize:normalize(20), color:'#E75A06'}}>Rp 720.000</Text>
                        <Text style={{fontSize:normalize(16)}}>Harga /kamar/malam</Text>
                        <View>
                            <Button full rounded style={{height:normalize(30), backgroundColor:'#22599C'}}>
                                <Title style={{fontSize:normalize(14)}}>Pilih Kamar</Title>
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
        );
    }
}

export default RoomHotel;