import { Body, Button, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';

class Choose extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView>
                <View style={{flex:1, flexDirection:'column', paddingBottom:normalize(20)}}>
                    <View style={{backgroundColor:'#299BD7', height:normalize(250), borderBottomRightRadius:50, borderBottomLeftRadius:50}}>
                        <Header transparent style={{marginTop:normalize(0)}}>
                            <Left>
                                <Icon
                                type="FontAwesome5"
                                name="chevron-left"
                                style={{ color: "white", fontSize: normalize(25) }}
                                onPress={() => this.props.navigation.goBack()}
                                />
                            </Left>
                            <Body>
                                <Text style={{color:'white'}}>Hotel</Text>
                            </Body>
                            <Right>
                                <Icon
                                type="FontAwesome5"
                                name="ellipsis-v"
                                style={{ color: "white", fontSize: normalize(25) }}
                                />
                            </Right>
                        </Header>
                    </View>
                    <View style={{padding:normalize(20)}}>
                        <View style={{borderWidth:1, padding:normalize(20), borderRadius:10, height:normalize(330), borderColor:'#dfdfdf', shadowColor:'black', marginTop:normalize(-150), backgroundColor:'#dfdfdf', shadowOffset:1, shadowOpacity:10}}>
                            <TouchableOpacity>
                                <View style={{flexDirection:'row', borderBottomWidth:1, paddingBottom:normalize(10), borderBottomColor:'#808080'}}>
                                    <Icon type="FontAwesome5" name="map-marker-alt" style={{color:'#299BD7', fontSize:normalize(30)}} />
                                    <Text style={{marginLeft:normalize(10), marginTop:normalize(5)}}>Sekitar Saya</Text>
                                    <Right>
                                        <Icon type="FontAwesome5" name="crosshairs" style={{color:'#299BD7', fontSize:normalize(20)}} />
                                    </Right>
                                </View>
                            </TouchableOpacity>

                            <View style={{flexDirection:'row', paddingTop:normalize(10)}}>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row', borderBottomWidth:1, paddingBottom:normalize(10), borderBottomColor:'#808080'}}>
                                        <Icon type="FontAwesome5" name="calendar-alt" style={{color:'#299BD7', fontSize:normalize(30)}} />
                                        <View>
                                            <Text style={{fontSize:normalize(14), marginLeft:normalize(10)}}>Check-in</Text>
                                            <Text style={{fontSize:normalize(14),color:'black', marginLeft:normalize(10)}}>Kam, 14 Feb 2021</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <View style={{paddingLeft:normalize(50)}} />
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row', borderBottomWidth:1, paddingBottom:normalize(10), borderBottomColor:'#808080'}}>
                                        <Icon type="FontAwesome5" name="calendar-alt" style={{color:'#299BD7', fontSize:normalize(30)}} />
                                        <View>
                                            <Text style={{fontSize:normalize(14), marginLeft:normalize(10)}}>Check-out</Text>
                                            <Text style={{fontSize:normalize(14),color:'black', marginLeft:normalize(10)}}>Kam, 14 Feb 2021</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection:'row', paddingTop:normalize(10)}}>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row', width:normalize(125), paddingBottom:normalize(10), borderBottomWidth:1, borderBottomColor:'#808080'}}>
                                        <Icon type="FontAwesome5" name="cloud-moon" style={{color:'#299BD7', fontSize:normalize(30)}} />
                                        <Text style={{color:'black', marginLeft:normalize(10), fontSize:normalize(16), paddingTop:normalize(10)}}>1 Malam</Text>
                                    </View>
                                </TouchableOpacity>

                                <View style={{paddingLeft:normalize(50)}} />
                                <View style={{paddingTop:normalize(10)}}>
                                    <Text style={{fontSize:normalize(14)}}>Maks. 31 Malam</Text>
                                </View>
                            </View>

                            <View style={{paddingTop:normalize(10)}}>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row', paddingBottom:normalize(10), borderBottomWidth:1, borderBottomColor:'#808080'}}>
                                        <Icon type="FontAwesome5" name="user-friends" style={{color:'#299BD7', fontSize:normalize(30)}} />
                                        <Text style={{color:'black', marginLeft:normalize(10), fontSize:normalize(16), paddingTop:normalize(10)}}>1 Tamu, 1 Kamar</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{paddingTop:normalize(10)}}>
                                <TouchableOpacity>
                                    <View style={{flexDirection:'row', paddingBottom:normalize(10), borderBottomWidth:1, borderBottomColor:'#808080'}}>
                                        <Icon type="FontAwesome5" name="sliders-h" style={{color:'#299BD7', fontSize:normalize(30)}} />
                                        <Text style={{color:'black', marginLeft:normalize(10), fontSize:normalize(16), paddingTop:normalize(10)}}>Filter (harga & tipe akomodasi)</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{paddingTop:normalize(20)}}>
                                <Button full rounded transparent style={{height:normalize(40), backgroundColor:'#299BD7'}}>
                                    <Text style={{color:'white'}}>Cari Hotel</Text>
                                </Button>
                            </View>
                        </View>
                        
                        <View style={{paddingTop:normalize(20), paddingLeft:normalize(20), paddingRight:normalize(20)}}>
                            <Text style={{color:'black', fontWeight:'bold'}}>Promo Menarik Bulan Ini</Text>
                            <Text style={{fontSize:normalize(16)}}>
                                Liburan jadi hemat dengan berbagai {'\n'}
                                penawaran promo yang menarik
                            </Text>
                        </View>
                    </View>

                    <View style={{padding:normalize(10)}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity>
                                <View style={{height:normalize(100), borderWidth:1,borderRadius:10, width:normalize(170)}}>
                                    <Image/>
                                </View>
                            </TouchableOpacity>

                            <View style={{paddingLeft:normalize(10)}} />
                            <TouchableOpacity>
                                <View style={{height:normalize(100),borderRadius:10, borderWidth:1, width:normalize(170)}}>
                                    <Image/>
                                </View>
                            </TouchableOpacity>

                            <View style={{paddingLeft:normalize(10)}} />
                            <TouchableOpacity>
                                <View style={{height:normalize(100),borderRadius:10, borderWidth:1, width:normalize(170)}}>
                                    <Image/>
                                </View>
                            </TouchableOpacity>

                            <View style={{paddingLeft:normalize(10)}} />
                            <TouchableOpacity>
                                <View style={{height:normalize(100),borderRadius:10, borderWidth:1, width:normalize(170)}}>
                                    <Image/>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    
                </View>
            </ScrollView>
         );
    }
}
 
export default Choose;