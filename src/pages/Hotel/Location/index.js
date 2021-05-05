import { Body, Header, Icon, Left, Right, Title } from 'native-base';
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';

class Location extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<ScrollView>
				<View style={{ flex: 1, flexDirection: 'column' }}>
					<View style={{height:normalize(150), backgroundColor:'#299BD7', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
						<Header transparent >
                            <Left>
                                <Icon type="FontAwesome5" name="chevron-left" style={{fontSize:normalize(25), color:'white'}} />
                            </Left>
                            <Body>
                                <Text style={{color:'white', fontSize:normalize(20)}}>Cari Hotel</Text>
                            </Body>
                            <Right>
                                <Icon type="FontAwesome5" name="ellipsis-v" style={{fontSize:normalize(25), color:'white'}} />
                            </Right>
                        </Header>
                        <View style={{paddingLeft:normalize(20), paddingRight:normalize(20)}}>
                            <View style={styles.borderline}>
                                <Icon type="FontAwesome5" name="map-marker-alt" style={{color:'#299BD7', fontSize:normalize(25)}} />
                                <TextInput
                                    placeholder="Cari Hotel Dimana?"
                                    style={{fontSize:normalize(15), paddingLeft:normalize(20), height:normalize(40), paddingTop:normalize(5)}}
                                />
                            </View>
                        </View>
					</View>

                    <View style={{backgroundColor:'white', height:normalize(550)}}>
                        <TouchableOpacity>
                            <View style={{flexDirection:'row', padding:normalize(20)}}>
                                <Icon type="FontAwesome5" name="crosshairs" style={{color:'#299BD7', fontSize:normalize(25)}} />
                                <Text>  Sekitar Saya</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{paddingLeft:normalize(20), paddingRight:normalize(20)}}>
                            <View style={{borderBottomWidth:1, borderBottomColor:'#dfdfdf'}} />
                        </View>

                    {/* Pencarian Terakhir */}
                        <View style={{flexDirection:'row', padding:normalize(20)}}>
                            <Text style={{color:'black', fontWeight:'bold'}}>Pencarian Terakhir</Text>
                            <Right>
                                <TouchableOpacity>
                                    <Text style={{color:'#299BD7', fontSize:normalize(15)}}>Hapus Semua</Text>
                                </TouchableOpacity>
                            </Right>
                        </View>
                        <View style={{padding:normalize(20), backgroundColor:'#dfdfdf'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#299BD7', fontSize:normalize(16)}}>Vila So Long</Text>
                                <Right>
                                    <TouchableOpacity>
                                        <Text style={{fontSize:normalize(15)}}>Kalipuro, Banyuwangi</Text>
                                    </TouchableOpacity>
                                </Right>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#299BD7', fontSize:normalize(16)}}>Jiwa Jawa Ijen Resort</Text>
                                <Right>
                                    <TouchableOpacity>
                                        <Text style={{fontSize:normalize(15)}}>Licin, Banyuwangi</Text>
                                    </TouchableOpacity>
                                </Right>
                            </View>
                        </View>

                        {/* Destinasi Populer */}
                        <View style={{flexDirection:'row', padding:normalize(20)}}>
                            <Text style={{color:'black', fontWeight:'bold'}}>Destinasi Populer di Jawa Timur</Text>
                            <Right>
                                <TouchableOpacity>
                                    <Text style={{fontSize:normalize(15)}}>Region</Text>
                                </TouchableOpacity>
                            </Right>
                        </View>
                        <View style={{padding:normalize(20), backgroundColor:'#dfdfdf'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#299BD7', fontSize:normalize(16)}}>Banyuwangi</Text>
                                <Right>
                                    <TouchableOpacity>
                                        <Text style={{fontSize:normalize(15)}}>20 Akomodasi</Text>
                                    </TouchableOpacity>
                                </Right>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#299BD7', fontSize:normalize(16)}}>Kediri</Text>
                                <Right>
                                    <TouchableOpacity>
                                        <Text style={{fontSize:normalize(15)}}>10 Akomodasi</Text>
                                    </TouchableOpacity>
                                </Right>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#299BD7', fontSize:normalize(16)}}>Tulungagung</Text>
                                <Right>
                                    <TouchableOpacity>
                                        <Text style={{fontSize:normalize(15)}}>10 Akomodasi</Text>
                                    </TouchableOpacity>
                                </Right>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{color:'#299BD7', fontSize:normalize(16)}}>Malang</Text>
                                <Right>
                                    <TouchableOpacity>
                                        <Text style={{fontSize:normalize(15)}}>10 Akomodasi</Text>
                                    </TouchableOpacity>
                                </Right>
                            </View>
                        </View>

                        {/* Wisata Populer */}
                        <View style={{flexDirection:'row', padding:normalize(20)}}>
                            <Text style={{color:'black', fontWeight:'bold'}}>Wisata Populer</Text>
                            <Right>
                                <TouchableOpacity>
                                    <Text style={{fontSize:normalize(15)}}>Paling Dikunjungi</Text>
                                </TouchableOpacity>
                            </Right>
                        </View>
                        <View style={{padding:normalize(10)}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity>
                                    <View style={{height:normalize(100), borderWidth:1,borderRadius:10, width:normalize(170)}}>
                                        <Image/>
                                    </View>
                                </TouchableOpacity>

                                <View style={{paddingLeft:normalize(10)}} />
                                <TouchableOpacity>
                                    <View style={{height:normalize(100),borderRadius:10, borderWidth:1, width:normalize(170)}}>
                                        <Image/>
                                    </View>
                                </TouchableOpacity>

                                <View style={{paddingLeft:normalize(10)}} />
                                <TouchableOpacity>
                                    <View style={{height:normalize(100),borderRadius:10, borderWidth:1, width:normalize(170)}}>
                                        <Image/>
                                    </View>
                                </TouchableOpacity>

                                <View style={{paddingLeft:normalize(10)}} />
                                <TouchableOpacity>
                                    <View style={{height:normalize(100),borderRadius:10, borderWidth:1, width:normalize(170)}}>
                                        <Image/>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                    
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
    borderline:{
        flexDirection:'row',
        borderWidth:1,
        height:normalize(40),
        backgroundColor:'white',
        borderColor:'white',
        borderRadius:10,
        padding:normalize(5),
        paddingLeft:normalize(10)
    }
})

export default Location;
