import React, { Component } from 'react';
import { View, Header, Left, Right, Body, Icon, Text, Radio } from 'native-base';
import { Dimensions, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';

class Bahasa extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            itemSelected:'idn'
         };
    }

    render() {
        return (
            <View>
                <Header transparent>
                <Left>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:"#299BD7", fontSize:normalize(24)}}/>
                    </Left>
                    <Body>
                        <Text>Bahasa</Text>
                    </Body>
                    <Right>

                    </Right>
                </Header>

                <View style={{padding:normalize(20)}}>
                    <Text style={{fontWeight:'bold'}}>PILIH BAHASA :</Text>
                    <View style={{paddingTop:normalize(10), flexDirection:'row'}}>
                        <Text style={{fontSize:normalize(20)}}>Bahasa Indonesia</Text>
                        <Right/>
                        <Radio color={"gray"} onPress={() => this.setState({itemSelected: 'idn'})} selected={this.state.itemSelected == 'idn'} />
                    </View>
                    <View style={{paddingTop:normalize(10), flexDirection:'row'}}>
                        <Text style={{fontSize:normalize(20)}}>Bahasa Inggris</Text>
                        <Right/>
                        <Radio color={"gray"} onPress={() => this.setState({itemSelected: 'eng'})} selected={this.state.itemSelected == 'eng'} />
                    </View>
                </View>
            </View>
        );
    }
}

export default Bahasa;