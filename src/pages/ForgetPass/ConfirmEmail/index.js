import { Body, Button, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { styles } from './style';

import {email} from '../../../assets'

class ConfirmEmail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:''
         };
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleEmail = (event) => {
        this.setState({email: event});
    }
    render() {
        return (
            <View>
                <KeyboardAvoidingView behavior="padding">
                <Header transparent>
                    <Left>
                        <TouchableOpacity>
                            <Icon type={"FontAwesome5"} name="chevron-left" />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Text style={{color:'black'}}>Lupa Password</Text>
                    </Body>
                    <Right/>
                </Header>
                <View style={styles.field}>
                    <Text style={styles.fieldText}>
                        Masukkan email yang anda gunakan untuk mendaftar di kolom
                        yang tersedia. Kami akan mengirimkan email dengan panduan untuk 
                        memperbarui password anda.
                    </Text>
                </View>
                <View style={styles.center}>
                    <View>
                        <Image source={email} style={styles.image} />
                    </View>
                    <Text style={{color:'black'}}>Masukkan alamat email</Text>
                        <TextInput
                            placeholder="name@domain.com"
                            value={this.state.email}
                            onChange={this.handleEmail}
                            style={styles.border}
                        />
                    <Text style={styles.text}>Gunakan cara lain</Text>
                    <View style={styles.btnContainer}>
                        <Button transparent full rounded style={styles.btnkirim}>
                            <Text style={{color:'white'}}>Kirim</Text>
                        </Button>
                    </View>
                </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default ConfirmEmail;