import { Body, Card, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import normalize from 'react-native-normalize';
import { avva } from '../../../assets';
import { styles } from './style';

class UserAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <SafeAreaView>
                <Header transparent>
                    <Left>
                        <Text>Akun</Text>
                    </Left>
                    <Body/>
                    <Right>
                        <Icon type="FontAwesome5" name="ellipsis-v" style={{fontSize:normalize(25)}} />
                    </Right>
                </Header>
                <View style={styles.center}>
                    <Card style={styles.cardContainer}>
                        <View style={{flexDirection:'row'}}>
                            <TouchableHighlight style={styles.avatar}>
                                <Image source={avva} style={styles.imageContainer} />
                            </TouchableHighlight>
                            <View style={{padding:normalize(10), marginLeft:normalize(20)}}>
                                <Text>Aril Boril</Text>
                                <Text>Basic Silver | 6000 Points</Text>
                                <Text style={{color:'#299BD7'}}>Terverifikasi</Text>
                                <Icon type={'FontAwesome5'} name="pencil-alt" style={{color:'#299BD7', fontSize:normalize(22), marginLeft:normalize(240)}} />
                            </View>
                        </View>
                    </Card>
                </View>
            </SafeAreaView>
        );
    }
}

export default UserAccount;