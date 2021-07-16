import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import React, { Component } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import normalize from 'react-native-normalize';
import { phone } from '../../../assets';
import { styles } from './styles';

class ConfirmPhone extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            phone:''
         };

         this.handlePhone = this.handlePhone.bind(this);
    }

    handlePhone = (event) => {
        this.setState({phone: event})
    }

    render() {
        return (
            <View>
                <Header transparent>
                    <Left>
                        <Icon type={'FontAwesome5'} name="chevron-left"/>
                    </Left>
                    <Body>
                        <Text style={{color:'black'}}>Lupa Password</Text>
                    </Body>
                    <Right/>
                </Header>
                <View>
                    <View style={styles.field}>
                        <Text style={styles.fieldText}>Masukkan nomor ponsel anda yang telah 
                            terdaftar di aplikasi Carikamar untuk menerima
                            kode OTP berupa 6 digit angka.
                        </Text>
                    </View>
                    <View style={styles.centered}>
                        <View>
                            <Image source={phone} style={styles.image} />
                        </View>
                        <Text style={{color:'black'}}>Masukkan Nomor Ponsel</Text>
                        <View style={{flexDirection:'row', marginTop:normalize(10)}}>
                            <TextInput
                                placeholder="+62"
                                editable={false}
                                style={styles.border}
                            />
                            <View style={{marginLeft:normalize(10)}} />
                            <TextInput
                                editable={true}
                                maxLength={12}
                                keyboardType="number-pad"
                                value={this.state.phone}
                                onChange={this.handlePhone}
                                style={styles.border2}
                            />
                        </View>
                        <Text style={{color:'#299BD7', fontSize:normalize(15), paddingTop:normalize(10)}}>Gunakan cara lain</Text>
                        <View style={styles.btnContainer}>
                            <Button full rounded transparent style={styles.btnInside}>
                                <Text style={{color:'white'}}>Kirim</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default ConfirmPhone;