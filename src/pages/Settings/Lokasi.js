import { View, Header, Left, Right, Body, Icon, Text } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';

class Lokasi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            check: false
         };
    }

    toggleOn = () => {
        this.setState({check: !this.state.check})
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
                        <Text>Lokasi</Text>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>

                <View style={{padding:normalize(20)}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontWeight:'bold'}}>AKSES LOKASI</Text>
                        <Right/>
                        <TouchableOpacity onPress={this.toggleOn.bind(this)}>
                            <Icon type={"FontAwesome5"} name={this.state.check ? "toggle-on" : "toggle-off"} style={{fontSize:normalize(30), color:'#299BD7'}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingTop:normalize(10)}}>
                        <Text style={{fontSize:normalize(16)}}>
                            Izinkan Carikamar mengakses lokasi Anda. Aktifkan
                            GPS di perangkat Anda untuk menggunakan Aplikasi Carikamar.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Lokasi;