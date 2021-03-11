import { Body, Container, Drawer, Header, Icon, Left, Right, Title } from 'native-base';
import React, { Component } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { BotNav } from '../../components/BotNav';
import Sidebar from '../../components/Sidebar';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <SafeAreaView>
                <Header transparent>
                    <Left>
                        <Icon type="FontAwesome5" name="bars" style={{color:'#299BD7'}}/>
                    </Left>
                    <Body>
                        <Text>Beranda</Text>
                    </Body>
                    <Right/>
                </Header> 
            </SafeAreaView>
        );
    }
}

export default HomeScreen;