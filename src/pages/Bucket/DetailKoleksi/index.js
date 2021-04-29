import { Body, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import { bg4, bg5 } from '../../../assets';

class DetailKoleksi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView>
                <Header transparent>
                    <Left>
                    <Icon
                        type="FontAwesome5"
                        name="chevron-left"
                        style={{ color: "#299BD7", fontSize: normalize(25) }}
                    />
                    </Left>
                    <Body>
                        <Text style={{color:'#299BD7'}}>Detail</Text>
                    </Body>
                    <Right>
                    <Icon
                        type="FontAwesome5"
                        name="ellipsis-v"
                        style={{ color: "#299BD7", fontSize: normalize(25) }}
                    />
                    </Right>
                </Header>
                <View style={{paddingBottom:normalize(50)}}>
                        <Image
                            source={bg4}
                            style={{ width: normalize(400), height: normalize(200) }}
                        />

                        <View style={{padding:normalize(20)}}>
                            <Text style={{textAlign:'center', color:'black'}}>Honeymoon di Bali</Text>
                            <Text style={{lineHeight:20, color:'#808080', paddingTop:normalize(10)}}>
                                Lorem ipsum dolor sit amet, {'\n'}
                                consectetur adipiscing elit. {'\n'}
                                Fusce aliquet ipsum eu {'\n'}
                                pellentesque fermentum. 
                            </Text>
                            <View style={{paddingTop:normalize(10), flexDirection:'row'}}>
                                <Text style={{color:'black', fontWeight:'bold'}}>Love</Text>
                                <Right>
                                    <Icon type="FontAwesome5" name="pencil-alt" style={{ color: "#299BD7", fontSize: normalize(25) }}/>
                                </Right>
                            </View>
                        </View>
                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{borderBottomWidth:1, width:normalize(330), borderBottomColor:'#dfdfdf'}} />
                        </View>

                        <View style={{alignItems:'center', paddingTop:normalize(20)}}>
                            <Image source={bg5} style={{height:normalize(100), width:normalize(100)}} />
                            <Text style={{color:'black', fontWeight:'bold'}}>Belum Ada Item Tersimpan di Koleksi Ini</Text>
                            <Text style={{textAlign:'center', color:'#808080', lineHeight:20}}>
                                Pilih item tersimpan sebanyak yang {"\n"}
                                kamu inginkan dan atur item tersebut {"\n"}
                                dengan koleksi liburan kamu!
                            </Text>
                        </View>
                        <View style={{flexDirection:'row', padding:normalize(30)}}>
                            <Right>
                                <Icon type="FontAwesome5" name="plus-circle" style={{ color: "#299BD7", fontSize: normalize(35) }}/>
                            </Right>
                        </View>
                </View>
            </ScrollView>
         );
    }
}
 
export default DetailKoleksi;