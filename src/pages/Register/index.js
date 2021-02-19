import React, { Component } from 'react';
import {Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fb, google, logo } from '../../assets';
import normalize from 'react-native-normalize';
import { Body, Button, CheckBox, ListItem } from 'native-base';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',
            name:'',
            ponsel:'',
            isSelected:false,
            isSelectPass:false,
            showPass: true
         };
         this.handleEmail = this.handleEmail.bind(this);
         this.handleName = this.handleName.bind(this);
         this.handlePass = this.handlePass.bind(this);
         this.handlePonsel = this.handlePonsel.bind(this);
         this.showthePass = this.showthePass.bind(this);
         this.toggleCheck = this.toggleCheck.bind(this);
    }

    handleEmail = (event) => {
        this.setState({email: event.target.email})
    }
    handlePass = (event) => {
        this.setState({password: event.target.password})
    }
    handleName = (event) => {
        this.setState({name: event.target.name})
    }
    handlePonsel = (event) => {
        this.setState({ponsel: event.target.ponsel})
    }

    toggleCheck = () => {
        this.setState({isSelected: !this.state.isSelected})
    }

    showthePass = () => {
        this.setState({showPass: !this.state.showPass, isSelectPass: !this.state.isSelectPass})
    }
    render() {
        return (
            <View style={{padding:normalize(50), paddingTop:normalize(150)}}>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Image source={logo} style={{height:normalize(150), width:normalize(150)}} />
                    <View style={{paddingTop:normalize(20)}}>
                        <TextInput
                            placeholder="Nama Lengkap"
                            value={this.state.name}
                            onChange={this.handleName}
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
                            placeholder="No Ponsel"
                            value={this.state.ponsel}
                            maxLength={12}
                            keyboardType="numeric"
                            onChange={this.handlePonsel}
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
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleEmail}
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
                            value={this.state.password}
                            onChange={this.handlePass}
                            secureTextEntry={this.state.showPass}
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
                        <View style={{paddingTop:normalize(10)}}>
                            <ListItem>
                                <CheckBox checked={this.state.isSelectPass} onPress={this.showthePass} />
                                <Body style={{paddingLeft:normalize(5)}}>
                                    <Text style={{fontSize:normalize(10), textAlign:'left'}}> Lihat Password</Text>
                                </Body>
                            </ListItem>
                        </View>
                        <View style={{paddingTop:normalize(0)}}>
                            <ListItem>
                                <CheckBox checked={this.state.isSelected} onPress={this.toggleCheck} />
                                <Body style={{paddingLeft:normalize(5)}}>
                                    <Text style={{fontSize:normalize(10), textAlign:'left'}}> Saya setuju menerima syarat & ketentuan yang berlaku</Text>
                                </Body>
                            </ListItem>
                        </View>
                        <View style={{paddingTop:normalize(10), paddingLeft:normalize(40), paddingRight:normalize(40)}}>
                            <Button full rounded primary style={{backgroundColor:'#299BD7', height:normalize(35)}} >
                                <Text style={{fontSize:normalize(20), color:'white'}}>Daftar</Text>
                            </Button>
                        </View>
                        <View style={{paddingTop:normalize(10), flexDirection:'row', paddingLeft:normalize(20), paddingRight:normalize(20)}}>
                            <Text style={{fontSize:normalize(15)}}>Sudah punya akun?</Text> 
                            <Text style={{fontSize:normalize(15), color:'#299BD7'}}> Masuk disini</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Register;