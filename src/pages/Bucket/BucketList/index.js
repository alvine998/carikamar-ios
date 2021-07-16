import { Body, Card, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {baks, bg3} from '../../../assets';
import normalize from 'react-native-normalize';

class BucketList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Header transparent>
                    <Left>
                        <Icon type="FontAwesome5" name="chevron-left" style={{color:'#299BD7', fontSize:normalize(25)}} />
                    </Left>
                    <Body>
                        <Text style={{color:'#299BD7'}}>Bucket List</Text>
                    </Body>
                    <Right>
                        <Icon type="FontAwesome5" name="ellipsis-v" style={{color:'#299BD7', fontSize:normalize(25)}} />
                    </Right>
                </Header>
                <View>
                    <Image source={baks} style={{height:normalize(200), width:normalize(400)}} />
                    <View style={{alignItems:'center', padding:normalize(20)}}>
                        <Card style={{borderRadius:30, width:normalize(300), height:normalize(320)}}>
                            <View style={{paddingTop:normalize(20), alignItems:'center'}}>
                                <Image source={bg3} style={{width:normalize(100), height:normalize(100)}} />
                                <Text style={{textAlign:'center', fontWeight:'bold'}}>
                                    Kamu Belum Memiliki {"\n"}
                                    Koleksi yang Disimpan
                                </Text>
                                <View style={{paddingTop:normalize(20), paddingRight:normalize(5), paddingLeft:normalize(5)}}>
                                    <Text style={{fontSize:normalize(15), textAlign:'center'}}>
                                        Yuk, buat rencana liburan impian kamu {"\n"}
                                        disini ya. Atur item tersimpan dengan {"\n"}
                                        koleksi liburan kamu
                                    </Text>
                                </View>
                                <View style={{paddingTop:normalize(20)}}>
                                    <View style={{borderTopWidth:1, borderColor:"black", width:normalize(280)}} />
                                </View>
                                <View style={{flexDirection:'row', paddingTop:normalize(10)}}>
                                    <TouchableOpacity>
                                        <Icon type="FontAwesome5" name="plus-circle" style={{color:'#299BD7'}} />
                                    </TouchableOpacity>
                                    <Text style={{color:'#299BD7',fontWeight:'bold', paddingTop:normalize(8), marginLeft:normalize(8)}}>Buat Koleksi</Text>
                                </View>
                            </View>
                        </Card>
                    </View>
                </View>
            </View>
        );
    }
}

export default BucketList;