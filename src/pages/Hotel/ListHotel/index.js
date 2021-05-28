import { Body, Button, Fab, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { bg2, bg5, hotel } from '../../../assets';

class ListHotel extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false }
    }
    render() { 
        return ( 
            <ScrollView>
                <View>
                    <Header transparent>
                        <Left>
                            <Icon
                                type="FontAwesome5"
                                name="chevron-left"
                                style={{ color: "#299BD7", fontSize: normalize(25) }}
                                onPress={() => this.props.navigation.goBack()}
                            />
                        </Left>
                        <Body>
                            <Text style={{color:'#299BD7'}}>List Hotel</Text>
                        </Body>
                        <Right/>
                    </Header>
                    <View style={{paddingLeft:normalize(40), paddingRight:normalize(40)}}>
                        <TouchableOpacity>
                            <View style={{borderWidth:1, backgroundColor:'#299BD7', height:normalize(30), borderColor:'#299BD7', borderRadius:10, padding:normalize(5), paddingLeft:normalize(20)}}>
                                <Text style={{color:'white', fontSize:normalize(14)}}>Kamis, 14 Feb 2021, 1 Malam | 1 Dewasa, 1 Kamar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    {/* Pilihan */}
                    <View style={{padding:normalize(10)}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity>
                                <View style={{borderWidth:1, height:normalize(50), borderColor:'white', justifyContent:'center', width:normalize(100), backgroundColor:'#299BD7', borderRadius:10}}>
                                    <Text style={{textAlign:'center', color:'white', justifyContent:'center'}}>Semua</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{borderWidth:1, height:normalize(50), borderColor:'white', justifyContent:'center', width:normalize(100), backgroundColor:'#dfdfdf', borderRadius:10}}>
                                    <Text style={{textAlign:'center', color:'black', justifyContent:'center'}}>Hotel</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{borderWidth:1, height:normalize(50), borderColor:'white', justifyContent:'center', width:normalize(100), backgroundColor:'#dfdfdf', borderRadius:10}}>
                                    <Text style={{textAlign:'center', color:'black', justifyContent:'center'}}>Villa</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{borderWidth:1, height:normalize(50), borderColor:'white', justifyContent:'center', width:normalize(100), backgroundColor:'#dfdfdf', borderRadius:10}}>
                                    <Text style={{textAlign:'center', color:'black', justifyContent:'center'}}>Staycation</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    {/* Lokasi Pilihan */}
                    <View style={{flexDirection:'row', padding:normalize(10)}}>
                        <Icon type="FontAwesome5" name="map-marker-alt" style={{color:'#299BD7', fontSize:normalize(25)}} />
                        <Text style={{paddingLeft:normalize(10)}}>Banyuwangi</Text>
                        <Right>
                            <Text style={{fontSize:normalize(16)}}>Tersedia 20 Akomodasi</Text>
                        </Right>
                    </View>

                    {/* List hotel */}
                    <View style={{flex:1}}>
                        <View style={{padding:normalize(10)}}>
                            <TouchableOpacity>
                                <View style={{height:normalize(150), borderWidth:1, borderRadius:10, borderColor:'white', backgroundColor:'#dfdfdf'}}>
                                    <View style={{flexDirection:'row'}}>
                                            <View style={{height:normalize(150), flex:1}}>
                                                <Image source={bg2} style={{height:normalize(148), borderRadius:10, width:normalize(170)}}/>
                                            </View>
                                        <View style={{borderWidth:1, alignItems:'center', justifyContent:'center', borderRadius:0, height:normalize(30), width:normalize(80), marginRight:normalize(0), backgroundColor:'orange', borderColor:'orange'}}>
                                            <Text style={{color:'white'}}>Hotel</Text>
                                        </View>
                                        <View style={{marginRight:normalize(9), marginLeft:normalize(10)}}>
                                            <View style={{flexDirection:'row', paddingTop:normalize(10)}}>
                                                <Text style={{color:'black'}}>Villa So Long </Text>
                                                <Icon type="FontAwesome" name="star" style={{color:'orange', fontSize:normalize(20), paddingTop:normalize(5)}}/>
                                                <Icon type="FontAwesome" name="star" style={{color:'orange', fontSize:normalize(20), paddingTop:normalize(5)}}/>
                                            </View>
                                            <Text style={{fontSize:normalize(14)}}>200 m dari Lokasi Anda</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={{fontSize:normalize(24), color:'green'}}>8.3</Text>
                                                <View>
                                                    <Text style={{fontSize:normalize(14)}}>Luar Biasa</Text>
                                                    <Text  style={{fontSize:normalize(14)}}>TripAdvisor 28 ulasan</Text>
                                                </View>
                                            </View>
                                            <Text style={{paddingTop:normalize(10), fontSize:normalize(16)}}>Mulai dari</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={{color:'#299BD7'}}>Rp. 680.000</Text>
                                                <Text style={{fontSize:normalize(14), padding:normalize(8)}}>Kamar/Malam</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{padding:normalize(10)}}>
                            <TouchableOpacity>
                                <View style={{height:normalize(150), borderWidth:1, borderRadius:10, borderColor:'white', backgroundColor:'#dfdfdf'}}>
                                    <View style={{flexDirection:'row'}}>
                                            <View style={{height:normalize(150), flex:1}}>
                                                <Image source={bg2} style={{height:normalize(148), borderRadius:10, width:normalize(170)}}/>
                                            </View>
                                        <View style={{borderWidth:1, alignItems:'center', justifyContent:'center', borderRadius:0, height:normalize(30), width:normalize(80), marginRight:normalize(0), backgroundColor:'orange', borderColor:'orange'}}>
                                            <Text style={{color:'white'}}>Hotel</Text>
                                        </View>
                                        <View style={{marginRight:normalize(9), marginLeft:normalize(10)}}>
                                            <View style={{flexDirection:'row', paddingTop:normalize(10)}}>
                                                <Text style={{color:'black'}}>Villa So Long </Text>
                                                <Icon type="FontAwesome" name="star" style={{color:'orange', fontSize:normalize(20), paddingTop:normalize(5)}}/>
                                                <Icon type="FontAwesome" name="star" style={{color:'orange', fontSize:normalize(20), paddingTop:normalize(5)}}/>
                                            </View>
                                            <Text style={{fontSize:normalize(14)}}>200 m dari Lokasi Anda</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={{fontSize:normalize(24), color:'green'}}>8.3</Text>
                                                <View>
                                                    <Text style={{fontSize:normalize(14)}}>Luar Biasa</Text>
                                                    <Text  style={{fontSize:normalize(14)}}>TripAdvisor 28 ulasan</Text>
                                                </View>
                                            </View>
                                            <Text style={{paddingTop:normalize(10), fontSize:normalize(16)}}>Mulai dari</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={{color:'#299BD7'}}>Rp. 680.000</Text>
                                                <Text style={{fontSize:normalize(14), padding:normalize(8)}}>Kamar/Malam</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        
                    </View>
                </View>
                {/* Fixed Bar */}
                <View style={{flex:1}}>
                        <Fab
                            active={this.state.active}
                            direction="up"
                            containerStyle={{}}
                            style={{backgroundColor:'#5067FF'}}
                            position="bottomRight"
                            onPress={() => this.setState({active: !this.state.active})}
                        >
                            <Icon type="FontAwesome" name="share-alt"/>
                            <Button style={{ backgroundColor: '#299BD7' }}>
                                <Icon type="FontAwesome" name="map"/>
                            </Button>
                            <Button style={{ backgroundColor: '#299BD7' }}>
                                <Icon type="FontAwesome5" name="sliders-h"/>
                            </Button>
                            <Button style={{ backgroundColor: '#299BD7' }}>
                                <Icon type="FontAwesome5" name="home"/>
                            </Button>
                        </Fab>
                    </View>
            </ScrollView>
         );
    }
}
 
export default ListHotel;