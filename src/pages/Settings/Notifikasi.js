import React, { Component } from 'react';
import { View, Header, Left, Right, Body, Icon, Text, Radio } from 'native-base';
import { Dimensions, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';

class Notifikasi extends Component {
    constructor(props) {
        super(props);
        this.state = { check: false, check2: false };
    }

    toggleOn = () => {
        this.setState({check: !this.state.check})
    }
    toggleOn2 = () => {
        this.setState({check2: !this.state.check2})
    }
    render() {
        return (
            <View>
                <Header transparent>
                <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                    </Left>
                    <Body>
                        <Text>Notifikasi</Text>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>

                <View style={{padding:normalize(20)}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontWeight:'bold'}}>AKTIFKAN NOTIFIKASI</Text>
                    </View>
                    <View style={{paddingTop:normalize(10)}}>
                        <Text style={{fontSize:normalize(16)}}>
                            Kami akan memberikan pemberitahuan terkait
                            aktifitas akun, diskon, harga terbaru, promo menarik,
                            status pembayaran, pembaharuan sistem, dan tips liburan.
                        </Text>
                    </View>

                    <View style={{flexDirection:'row', paddingTop:normalize(10)}}>
                        <Text style={{fontSize:normalize(18)}}>Aktifkan Notifikasi</Text>
                        <Right/>
                        <TouchableOpacity onPress={this.toggleOn.bind(this)}>
                            <Icon type={"FontAwesome5"} name={this.state.check ? "toggle-on" : "toggle-off"} style={{fontSize:normalize(30), color:'#299BD7'}} />
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', paddingTop:normalize(10)}}>
                        <Text style={{fontSize:normalize(18)}}>Email</Text>
                        <Right/>
                        <TouchableOpacity onPress={this.toggleOn2.bind(this)}>
                            <Icon type={"FontAwesome5"} name={this.state.check2 ? "toggle-on" : "toggle-off"} style={{fontSize:normalize(30), color:'#299BD7'}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Notifikasi;