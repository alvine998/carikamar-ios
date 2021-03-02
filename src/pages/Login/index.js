import React, { Component } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fb, google, logo } from '../../assets';
import normalize from 'react-native-normalize';
import { Button } from 'native-base';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',
            showPass: true
         };
    }
    render() {
        return (
            <View style={{padding:normalize(50), paddingTop:normalize(80)}}>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Image source={logo} style={{height:normalize(150), width:normalize(150)}} />
                    <View style={{paddingTop:normalize(20)}}>
                        <TextInput
                            placeholder="Email atau No Ponsel"
                            style={{
                                borderWidth:1,
                                borderRadius:40,
                                width:normalize(250),
                                borderColor:'white',
                                backgroundColor:'#dfdfdf',
                                fontSize:normalize(17),
                                height:normalize(50),
                                paddingLeft:normalize(15)
                            }}
                        />
                        <View style={{paddingTop:normalize(10)}}/>
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={true}
                            style={{
                                borderWidth:1,
                                borderRadius:40,
                                width:normalize(250),
                                borderColor:'white',
                                backgroundColor:'#dfdfdf',
                                fontSize:normalize(17),
                                height:normalize(50),
                                paddingLeft:normalize(15)
                            }}
                        />
                        <View style={{paddingTop:normalize(10)}}/>
                        <Text style={{color:'#299BD7', fontSize:normalize(15), textAlign:'center'}}>Lupa Password?</Text>
                        <View style={{paddingLeft:normalize(40), paddingRight:normalize(40), paddingTop:normalize(15)}}>
                            <Button full rounded primary style={{backgroundColor:'#299BD7', height:normalize(35)}}>
                                <Text style={{color:'white', fontSize:normalize(20)}}>Masuk</Text>
                            </Button>
                        </View>
                        <View style={{paddingTop:normalize(10), flexDirection:'row', paddingLeft:normalize(30), paddingRight:normalize(20)}}>
                            <Text style={{fontSize:normalize(15)}}>Belum punya akun?</Text> 
                            <Text style={{fontSize:normalize(15), color:'#299BD7'}}> Daftar disini</Text>
                        </View>
                        <View style={{paddingTop:normalize(10)}}>
                            <Text style={{fontSize:normalize(15), textAlign:'center'}}>Atau</Text>
                        </View>
                        <View style={{flexDirection:'row', paddingTop:normalize(10)}}>
                            <TouchableOpacity style={{paddingLeft:normalize(55)}}>
                                <Image source={fb} style={{width:normalize(50), height:normalize(50)}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingLeft:normalize(50)}}>
                                <Image source={google} style={{width:normalize(50), height:normalize(50)}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;