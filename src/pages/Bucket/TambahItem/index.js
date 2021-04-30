import { Body, Button, Card, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';

class TambahItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView>
                <Header transparent>
                    <Left>
                        <Icon
                        type="FontAwesome5"
                        name="chevron-left"
                        style={{ color: "#299BD7", fontSize: normalize(25) }}
                        />
                    </Left>
                    <Body>
                        <Text style={{color:'#299BD7'}}>Tambah Item</Text>
                    </Body>
                    <Right>
                        <Icon
                        type="FontAwesome5"
                        name="ellipsis-v"
                        style={{ color: "#299BD7", fontSize: normalize(25) }}
                        />
                    </Right>
                </Header>
                <View style={{padding:normalize(20)}}>
                    <Text style={{color:'black'}}>
                        Pilih item yang akan disimpan {'\n'}
                        sebagai inspirasi liburan kamu!
                    </Text>

                    {/* Card Hotel */}
                    <View style={{paddingTop:normalize(20)}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'black'}}>Hotel</Text>
                            <Right>
                                <TouchableOpacity>
                                    <Text style={{color:'#299BD7'}}>Lihat Semua</Text>
                                </TouchableOpacity>
                            </Right>
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

                    {/* Card Souvenir */}
                    <View style={{paddingTop:normalize(20)}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'black'}}>Souvenir Store</Text>
                            <Right>
                                <TouchableOpacity>
                                    <Text style={{color:'#299BD7'}}>Lihat Semua</Text>
                                </TouchableOpacity>
                            </Right>
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

                    {/* Card Wisata */}
                    <View style={{paddingTop:normalize(20)}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'black'}}>Wisata</Text>
                            <Right>
                                <TouchableOpacity>
                                    <Text style={{color:'#299BD7'}}>Lihat Semua</Text>
                                </TouchableOpacity>
                            </Right>
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

                    <View style={{paddingTop:normalize(20)}}>
                        <Button full rounded transparent style={{backgroundColor:'#299BD7', height:normalize(40)}}>
                            <Text style={{color:'white'}}>Simpan</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
         );
    }
}
 
export default TambahItem;