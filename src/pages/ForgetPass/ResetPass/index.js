import { Body, Button, Header, Icon, Label, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, View } from 'react-native';
import normalize from 'react-native-normalize';
import { reset } from '../../../assets';
import { styles } from './style';

class ResetPass extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            password:'',
            showPass: true
         };
         this.handlePass = this.handlePass.bind(this);
         this.handleShowPass = this.handleShowPass.bind(this);
    }

    handlePass = (event) => {
        this.setState({password: event})
    }

    handleShowPass = () => {
        this.setState({showPass: !this.state.showPass})
    }
    render() {
        const screenheight = Dimensions.get('window').height;

        return (
            <ScrollView style={{height:'auto', maxHeight: screenheight}}>
                <Header transparent>
                    <Left>
                        <Icon type="FontAwesome5" name="chevron-left"/>
                    </Left>
                    <Body>
                        <Text style={{color:'black'}}>Ganti Password</Text>
                    </Body>
                    <Right/>
                </Header>
                    <View style={styles.center}>
                        <Image source={reset} style={styles.images} />
                        <Text>Ganti Password</Text>
                        <View style={{paddingTop:normalize(10)}}>
                            <Text style={{marginLeft:normalize(20)}}>Password Baru</Text>
                            <TextInput
                                secureTextEntry={true}
                                value={this.state.password}
                                onChange={this.handlePass}
                                style={styles.border}
                            />
                            <View style={{paddingTop:normalize(20)}} />
                            <Text style={{marginLeft:normalize(20)}}>Konfirmasi Password</Text>
                            <TextInput
                                secureTextEntry={true}
                                value={this.state.password}
                                onChange={this.handlePass}
                                style={styles.border}
                            />
                            <View style={styles.btnContainer}>
                                <Button full rounded transparent style={styles.btnInside}>
                                    <Text style={{color:'white'}}>Kirim</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
            </ScrollView>
        );
    }
}

export default ResetPass;