import { Body, Card, Container, Header, Icon, Left, Right, Tab, TabHeading, Tabs, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { cup, double_check, refund, wallet } from '../../../assets';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

class RoomHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
        <View>
            <Header transparent>
                <Left>
                    <Icon type={"FontAwesome5"} name="chevron-left" style={{color:'#299BD7'}} />
                </Left>
                <Body>
                    <Text style={{color:'#299BD7'}}>Villa So Long</Text>
                </Body>
                <Right>
                    <TouchableOpacity>
                        <Text style={{color:'#299BD7'}}>Ubah</Text>
                    </TouchableOpacity>
                </Right>
            </Header>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <View style={{borderRadius:10, height:normalize(35), borderWidth:1, width:normalize(350), backgroundColor:'#22599C', borderColor:'#22599C',alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color:'white', fontSize:normalize(16)}}>Kamis, 14 Feb 2021, 1 Malam  |  1 Dewasa, 1 Kamar</Text>
                </View>
            </View>
            <View style={{paddingLeft:normalize(20), paddingRight:normalize(20), alignItems:'center'}}>
                <Card style={{height:normalize(120), width:'100%', borderRadius:10}}>
                    <View style={{padding:normalize(10)}}>
                        <Text style={{fontSize:normalize(18)}}>Pilih Kamar :</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <View style={{borderWidth:1, width:normalize(70), alignItems:'center', borderColor:'#299BD7', borderRadius:10}}>
                            <Image source={double_check} style={{height:normalize(50), width:normalize(50)}}/>
                            <Text style={{fontSize:normalize(16), textAlign:'center'}}>Semua</Text>
                        </View>
                        <View style={{paddingLeft:normalize(30)}}>
                            <Image source={wallet} style={{height:normalize(50), width:normalize(50)}}/>
                        </View>
                        <View style={{paddingLeft:normalize(30)}}>
                            <Image source={cup} style={{height:normalize(50), width:normalize(50)}}/>
                        </View>
                        <View style={{paddingLeft:normalize(30)}}>
                            <Image source={refund} style={{height:normalize(50), width:normalize(50)}}/>
                        </View>
                    </View>
                </Card>
            </View>

        </View>
        );
    }
}

export default RoomHotel;