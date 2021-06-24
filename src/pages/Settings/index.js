import { Body, Header, Icon, Left, Right, Text, View } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';

class SettingsOption extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const screenheight = Dimensions.get('window').height;
        return (
            <View style={{ height: 'auto', maxHeight: screenheight }}>
                <Header transparent>
                    <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                    </Left>
                    <Body>
                        <Text>Pengaturan</Text>
                    </Body>
                    <Right>

                    </Right>
                </Header>

                <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>

                <ScrollView>
                    <View style={{flexDirection:'row', padding:normalize(20), backgroundColor:'#dfdfdf'}}>
                        <Icon type={"FontAwesome5"} name="lock" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                        <Right/>
                        <Text style={{fontSize:normalize(18), color:'#299BD7', fontWeight:'bold'}}>Akun & Keamanan</Text>
                    </View>
                    <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>
                    <View>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', padding:normalize(20)}}>
                                <Text style={{fontSize:normalize(18)}}>Informasi Akun</Text>
                                <Right/>
                                <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', padding:normalize(20)}}>
                                <Text style={{fontSize:normalize(18)}}>Pengaturan Keamanan</Text>
                                <Right/>
                                <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', padding:normalize(20), backgroundColor:'#dfdfdf'}}>
                        <Icon type={"FontAwesome5"} name="cog" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                        <Right/>
                        <Text style={{fontSize:normalize(18), color:'#299BD7', fontWeight:'bold'}}>Umum</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', padding:normalize(20)}}>
                                <Text style={{fontSize:normalize(18)}}>Lokasi</Text>
                                <Right/>
                                <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', padding:normalize(20)}}>
                                <Text style={{fontSize:normalize(18)}}>Bahasa</Text>
                                <Right/>
                                <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', padding:normalize(20)}}>
                                <Text style={{fontSize:normalize(18)}}>Notifikasi</Text>
                                <Right/>
                                <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', padding:normalize(20), backgroundColor:'#dfdfdf'}}>
                        <Icon type={"FontAwesome5"} name="info-circle" style={{color:"#299BD7", fontSize:normalize(28)}}/>
                        <Right/>
                        <Text style={{fontSize:normalize(18), color:'#299BD7', fontWeight:'bold'}}>Tentang Kami</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', padding:normalize(20)}}>
                                <Text style={{fontSize:normalize(18)}}>Tentang Carikamar</Text>
                                <Right/>
                                <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', padding:normalize(20)}}>
                                <Text style={{fontSize:normalize(18)}}>Syarat & Ketentuan</Text>
                                <Right/>
                                <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', padding:normalize(20)}}>
                                <Text style={{fontSize:normalize(18)}}>Kebijakan Privasi</Text>
                                <Right/>
                                <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', padding:normalize(20)}}>
                                <Text style={{fontSize:normalize(18)}}>Versi Aplikasi</Text>
                                <Right/>
                                <Icon type={"FontAwesome5"} name="chevron-right" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SettingsOption;