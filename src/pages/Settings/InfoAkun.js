import { Header, View, Left, Right,Icon, Text, Body, Card } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import { fb, google } from '../../assets';

class InfoAkun extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            nohp:'',
            click: false,
            click2: false
         };
    }

    handleEmail = (event) => {
        this.setState({email: event})
    }
    handleNohp = (event) => {
        this.setState({nohp: event})
    }
    toggleOn = () => {
        this.setState({click: !this.state.click})
    }
    toggleOn2 = () => {
        this.setState({click2: !this.state.click2})
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
                        <Text>Informasi Akun</Text>
                    </Body>
                    <Right>
                        <TouchableOpacity>
                            <Text style={{color:'#299BD7', fontWeight:'bold'}}>Simpan</Text>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>
                <ScrollView style={{padding:normalize(10)}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon type={"FontAwesome5"} name="exclamation-triangle" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                        <Text style={{fontSize:normalize(18), color:'#299BD7', paddingLeft:normalize(10)}}>Lengkapi Akun Anda</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:normalize(16), paddingTop:normalize(10)}}>
                            Demi melindungi dan mengamankan akun anda dari
                            penyalahgunaan pihak lain. Kami sarankan untuk kelola
                            akun secara berkala. 
                        </Text>
                        <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(10)}}/>
                        <Text style={{fontSize:normalize(18), paddingTop:normalize(10), fontWeight:'bold'}}>EMAIL & NOMOR PONSEL</Text>
                        <Text style={{fontSize:normalize(16), paddingTop:normalize(0)}}>
                            Anda dapat menggunakan email dan 
                            nomor ponsel untuk masuk ke akun CariKamar, 
                            setelah Anda menerima notifikasi dari kami.
                        </Text>

                        <View style={{padding:normalize(10)}}>
                            <View style={{borderWidth:1, borderRadius:10, width:'100%', height:normalize(50), padding:normalize(5)}}>
                                <TextInput
                                    placeholder="Email@domain.com"
                                    style={{fontSize:normalize(16)}}
                                    value={this.state.email}
                                    onChangeText={this.handleEmail.bind(this)}
                                />
                            </View>
                            <View style={{flexDirection:'row', marginTop:normalize(10)}}>
                                <View style={{borderWidth:1, borderRadius:10, width:'15%', height:normalize(50), padding:normalize(5)}}>
                                    <TextInput
                                        placeholder="Email@domain.com"
                                        style={{fontSize:normalize(16)}}
                                        value="+62"
                                        editable={false}
                                    />
                                </View>
                                <View style={{borderWidth:1, borderRadius:10, width:'82%', height:normalize(50), padding:normalize(5), marginLeft:normalize(10)}}>
                                    <TextInput
                                        placeholder="8xx xxxx xxxx"
                                        style={{fontSize:normalize(16)}}
                                        value={this.state.nohp}
                                        onChangeText={this.handleNohp.bind(this)}
                                        keyboardType="number-pad"
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(10)}}/>
                        <View>
                            <Text style={{fontSize:normalize(18), paddingTop:normalize(10), fontWeight:'bold'}}>AKUN TERHUBUNG</Text>
                            <Text style={{fontSize:normalize(16)}}>
                                Hubungankan akun sosial media Anda 
                                untuk memudahkan masuk ke akun.
                            </Text>

                            <View style={{padding:normalize(20)}}>
                                <Card style={{padding:normalize(10), borderRadius:10}}>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Image source={google} style={{width:normalize(30), height:normalize(30)}}/>
                                        <Text style={{fontSize:normalize(16), marginLeft:normalize(10)}}>
                                            Akun Google
                                        </Text>
                                        <Right/>
                                        <Icon type={"FontAwesome5"} onPress={this.toggleOn.bind(this)} name={this.state.click ? "toggle-on" : "toggle-off"} style={{fontSize:normalize(25), color:'#299BD7'}}/>
                                    </View>

                                    <View style={{flexDirection:'row', alignItems:'center', paddingTop:normalize(10)}}>
                                        <Image source={fb} style={{width:normalize(30), height:normalize(30)}}/>
                                        <Text style={{fontSize:normalize(16), marginLeft:normalize(10)}}>
                                            Akun Facebook
                                        </Text>
                                        <Right/>
                                        <Icon type={"FontAwesome5"} onPress={this.toggleOn2.bind(this)} name={this.state.click2 ? "toggle-on" : "toggle-off"} style={{fontSize:normalize(25), color:'#299BD7'}}/>
                                    </View>
                                </Card>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default InfoAkun;