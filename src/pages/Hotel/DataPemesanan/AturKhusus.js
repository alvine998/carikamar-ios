import { View, Header, Left, Icon, Body, Right, Button, Text } from 'native-base';
import React, { Component } from 'react';
import normalize from 'react-native-normalize';
import {Dimensions, Image, TextInput, ScrollView} from 'react-native';
import { no_smoking, twinbed } from '../../../assets';

class AturKhusus extends Component {
    constructor(props) {
        super(props);
        this.state = { isActive:true, isActive2:true, isActive3:true, isActive4:true };
    }
    render() {
        const screenheight = Dimensions.get('window').height;
        return (
            <View style={{ height: 'auto', maxHeight: screenheight }}>
                <Header transparent>
                    <Left/>
                    <Body>
                        <Text style={{fontSize:normalize(18)}}>Permintaan Khusus</Text>
                    </Body>
                    <Right>
                        <Icon type={"FontAwesome5"} name="times" style={{fontSize:normalize(20), color:'#299BD7'}} />
                    </Right>
                </Header>
                <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(0)}}/>
                <ScrollView>
                    <View style={{padding:normalize(20)}}>
                        <Text style={{fontSize:normalize(16)}}>
                            Anda punya permintaan khusus ? 
                            Atur permintaaan khusus Anda di bawah ini. 
                            (Permintaan Anda akan di sesuaikan
                            ketersediaannya oleh pihak akomodasi dan 
                            mungkin dikenakan biaya tambahan)
                        </Text>
                    </View>

                    <View style={{padding:normalize(20), flexDirection:'row'}}>
                        <Image source={twinbed} style={{height:normalize(30), width:normalize(30)}} />
                        <Text style={{fontSize:normalize(20)}}> Tipe Ranjang</Text>
                        
                    </View>
                        <View style={{paddingLeft:normalize(20),justifyContent:'center', alignItems:'center',paddingRight:normalize(20),marginLeft:normalize(30), flexDirection:'row'}}>
                            <Text style={{fontSize:normalize(18)}}>Saya ingin 1 ranjang besar (Double bed)</Text>
                            <Right/>
                            <Icon type={"FontAwesome5"} onPress={()=>this.setState({isActive: !this.state.isActive})} name={this.state.isActive ? "square" : "check-square"} style={{fontSize:normalize(30), color:'#299BD7'}} />
                        </View>
                        <View style={{paddingLeft:normalize(20),paddingRight:normalize(20),justifyContent:'center', alignItems:'center',marginLeft:normalize(30), flexDirection:'row'}}>
                            <Text style={{fontSize:normalize(18)}}>Saya ingin 2 ranjang single (Twin bed)</Text>
                            <Right/>
                            <Icon type={"FontAwesome5"} onPress={()=>this.setState({isActive2: !this.state.isActive2})} name={this.state.isActive2 ? "square" : "check-square"} style={{fontSize:normalize(30), color:'#299BD7'}} />
                        </View>

                        <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(10)}}/>

                        <View style={{padding:normalize(20), flexDirection:'row'}}>
                            <Image source={no_smoking} style={{height:normalize(30), width:normalize(30)}} />
                            <Text style={{fontSize:normalize(20)}}> Kamar Bebas Asap Rokok</Text>
                        </View>
                        <View style={{paddingLeft:normalize(20),justifyContent:'center', alignItems:'center',paddingRight:normalize(20),marginLeft:normalize(30), flexDirection:'row'}}>
                            <Text style={{fontSize:normalize(18)}}>Saya ingin kamar bebas asap rokok</Text>
                            <Right/>
                            <Icon type={"FontAwesome5"} onPress={()=>this.setState({isActive3: !this.state.isActive3})} name={this.state.isActive3 ? "square" : "check-square"} style={{fontSize:normalize(30), color:'#299BD7'}} />
                        </View>
                        <View style={{paddingLeft:normalize(20),paddingRight:normalize(20),justifyContent:'center', alignItems:'center',marginLeft:normalize(30), flexDirection:'row'}}>
                            <Text style={{fontSize:normalize(18)}}>Saya ingin kamar boleh merokok</Text>
                            <Right/>
                            <Icon type={"FontAwesome5"} onPress={()=>this.setState({isActive4: !this.state.isActive4})} name={this.state.isActive4 ? "square" : "check-square"} style={{fontSize:normalize(30), color:'#299BD7'}} />
                        </View>

                        <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf', paddingTop:normalize(10)}}/>
                        <View style={{padding:normalize(20)}}>
                            <View style={{padding:normalize(10), borderWidth:1, borderRadius:10}}>
                                <TextInput
                                    placeholder="Tulis disini"
                                    multiline
                                    numberOfLines={4}
                                    maxLength={250}
                                />
                            </View>
                        </View>

                        <View style={{padding:normalize(20), marginBottom:normalize(10)}}>
                            <Button full rounded style={{backgroundColor:'#299BD7', height:normalize(40)}}>
                                <Text style={{fontSize:normalize(18), color:'white'}}>Simpan</Text>
                            </Button>
                        </View>
                </ScrollView>
            </View>
        );
    }
}

export default AturKhusus;