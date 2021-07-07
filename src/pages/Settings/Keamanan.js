import { Header, View, Left, Right,Icon, Text, Body, Card } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';

class Keamanan extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newPass:'',
            oldPass:''
         }
    }

    handleNewPass = (event) => {
        this.setState({newPass: event})
    }

    handleOldpass = (event) => {
        this.setState({oldPass: event})
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
                        <Text>Keamanan Akun</Text>
                    </Body>
                    <Right>
                        <TouchableOpacity>
                            <Text style={{fontWeight:'bold', color:'#299BD7'}}>Simpan</Text>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>

                <View style={{padding:normalize(10)}}>
                    <Text style={{fontWeight:'bold'}}>PASSWORD</Text>
                    <Text style={{fontSize:normalize(16)}}>Anda dapat mengubah atau mengatur ulang password yang digunakan untuk masuk ke akun Carikamar.</Text>
                    <View style={{padding:normalize(10)}}>
                        <View style={{borderWidth:1, borderRadius:10, width:'100%', height:normalize(50), padding:normalize(5), flexDirection:'row', alignItems:'center'}}>
                            <TextInput
                                placeholder="Password saat ini"
                                value={this.state.oldPass}
                                onChangeText={this.handleOldpass.bind(this)}
                                secureTextEntry
                            />
                            <Right/>
                            <Icon type={"FontAwesome5"} name="eye-slash" style={{color:'#dfdfdf', fontSize:normalize(24), marginRight:normalize(10)}} />
                        </View>
                        <View style={{paddingTop:normalize(10)}}/>
                        <View style={{borderWidth:1, borderRadius:10, width:'100%', height:normalize(50), padding:normalize(5), flexDirection:'row', alignItems:'center'}}>
                            <TextInput
                                placeholder="Password baru"
                                value={this.state.newPass}
                                onChangeText={this.handleNewPass.bind(this)}
                                secureTextEntry
                            />
                            <Right/>
                            <Icon type={"FontAwesome5"} name="eye-slash" style={{color:'#dfdfdf', fontSize:normalize(24), marginRight:normalize(10)}} />
                        </View>
                        <View style={{paddingTop:normalize(10)}}/>
                        <Text style={{fontSize:normalize(16)}}>Pastikan Anda memasukkan kombinasi angka dan karakter huruf dengan benar.</Text>
                    </View>
                </View>
            </View>
         );
    }
}
 
export default Keamanan;