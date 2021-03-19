import React, { Component } from 'react';
import { View, Text } from 'react-native';
import normalize from 'react-native-normalize';
import {Header, Left, Icon, Body, Right} from 'native-base';

class BucketKoleksi extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Header>
                    <Left>
                        <Icon type="FontAwesome5" name="chevron-left" style={{color:'#299BD7', fontSize:normalize(25)}} />
                    </Left>
                    <Body>
                        <Text>Buat Koleksi</Text>
                    </Body>
                    <Right>
                        <Icon type="FontAwesome5" name="ellipsis-v" style={{color:'#299BD7', fontSize:normalize(25)}} />
                    </Right>
                </Header>
            </View>
        );
    }
}

export default BucketKoleksi;