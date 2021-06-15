import { Header, View, Left, Body, Text, Right, Icon, Button } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import normalize from 'react-native-normalize';
import { building_full, no_smoking, twinbed } from '../../../assets';

class RincianPemesanan extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const screenheight = Dimensions.get('window').height;
		const check = this.state.check;
		return (
			<View style={{ height: 'auto', maxHeight: screenheight }}>
				<Header transparent>
					<Left>
						<Icon
							type={'FontAwesome5'}
							name="chevron-left"
							style={{ color: '#299BD7', fontSize: normalize(25) }}
						/>
					</Left>
					<Body>
						<Text style={{ color: '#299BD7', fontSize: normalize(18) }}>Rincian Pemesanan</Text>
					</Body>
					<Right>
						<Icon
							type={'FontAwesome5'}
							name="ellipsis-v"
							style={{ color: '#299BD7', fontSize: normalize(25) }}
						/>
					</Right>
				</Header>

				<ScrollView>
					<View
						style={{
							padding: normalize(20),
							borderTopWidth: 1,
							borderTopColor: '#dfdfdf',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ alignItems: 'center' }}>
								<TouchableOpacity
									style={{
										height: normalize(50),
										width: normalize(50),
										backgroundColor: '#dfdfdf',
										borderRadius: 30
									}}
								/>
								<Text style={{ fontSize: normalize(14) }}>Data Pemesanan</Text>
							</View>
							<View style={{ justifyContent: 'center', alignItems: 'center' }}>
								<View
									style={{
										borderTopWidth: 1,
										width: normalize(70),
										marginBottom: normalize(20),
										marginLeft: normalize(-17),
										borderTopColor: '#299BD7'
									}}
								/>
							</View>
							<View style={{ alignItems: 'center', marginLeft: normalize(-25) }}>
								<TouchableOpacity
									style={{
										height: normalize(50),
										width: normalize(50),
										backgroundColor: '#299BD7',
										borderRadius: 30
									}}
								/>
								<Text style={{ fontSize: normalize(14) }}>Rincian Pemesanan</Text>
							</View>
							<View style={{ justifyContent: 'center', alignItems: 'center' }}>
								<View
									style={{
										borderTopWidth: 1,
										width: normalize(70),
										marginBottom: normalize(20),
										marginLeft: normalize(-25),
										borderTopColor: '#299BD7'
									}}
								/>
							</View>
							<View style={{ alignItems: 'center', marginLeft: normalize(-5) }}>
								<TouchableOpacity
									style={{
										height: normalize(50),
										width: normalize(50),
										backgroundColor: '#dfdfdf',
										borderRadius: 30
									}}
								/>
								<Text style={{ fontSize: normalize(14) }}>Pembayaran</Text>
							</View>
						</View>
					</View>

                    <View style={{paddingTop:normalize(10)}}>
                        <View style={{backgroundColor:'#299BD7', height:normalize(50)}}>
                            <View style={{alignItems:'center', flexDirection:'row', padding:normalize(15)}}>
                                <Text style={{fontSize:normalize(16), color:'white'}}>Kode Pesanan Anda 0078786650 </Text>
                                <Right/>
                                <TouchableOpacity>
                                    <Text style={{fontSize:normalize(16), color:'white'}}>Salin</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{padding:normalize(10)}}>
                        <View style={{flexDirection:"row"}}>
                            <Icon type={"FontAwesome5"} name="exclamation-triangle" style={{color:'#299BD7', fontSize:normalize(20)}} />
                            <Text style={{fontSize:normalize(16), color:'#299BD7'}}> Selesaikan pembayaran anda sebelum </Text>
                            <Right/>
                            <Text style={{fontSize:normalize(16), color:'#299BD7'}}>00:19:59</Text>
                        </View>
                    </View>

                    <View style={{
							padding: normalize(10),
							borderTopWidth: 1,
							borderTopColor: '#dfdfdf',
                            }}>
                        <Text style={{fontSize:normalize(18)}}>Rincian Pemesanan Anda</Text>
                        <View style={{flexDirection:'row', marginTop:normalize(10)}}>
                            <Image source={building_full} style={{height:normalize(40), width:normalize(30)}} />
                            <View style={{marginLeft:normalize(10)}}>
                                <Text style={{fontSize:normalize(16)}}>Villa So Long Banyuwangi</Text>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>Superior Room View Garden</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginTop:normalize(10)}}>
                            <Icon type={"FontAwesome5"} name="calendar-alt" style={{fontSize:normalize(30), color:'#299BD7'}} />
                            <View style={{marginLeft:normalize(10)}}>
                                <Text style={{fontSize:normalize(16)}}>Check-in</Text>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>Kam, 14 Feb 2021</Text>
                            </View>
                            <View style={{marginLeft:normalize(20), marginTop:normalize(20)}}>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>- 1 malam -</Text>
                            </View>
                            <Right/>
                            <View style={{marginLeft:normalize(10)}}>
                                <Text style={{fontSize:normalize(16)}}>Check-out</Text>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>Jum, 15 Feb 2021</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginTop:normalize(10)}}>
                            <Icon type={"FontAwesome"} name="id-badge" style={{fontSize:normalize(35), color:'#299BD7'}} />
                            <View style={{marginLeft:normalize(10)}}>
                                <Text style={{fontSize:normalize(16)}}>Kamar & Tamu</Text>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>1 Kamar, 2 Dewasa</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{padding:normalize(10), borderTopWidth:1, borderTopColor:'#dfdfdf'}}>
                        <Text style={{fontSize:normalize(18)}}>Permintaan Khusus Anda</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row', marginTop:normalize(10)}}>
                                <Image source={twinbed} style={{height:normalize(30), width:normalize(30)}} />
                                <View style={{marginLeft:normalize(10)}}>
                                    <Text style={{fontSize:normalize(14)}}>Tempat Tidur</Text>
                                    <Text style={{fontSize:normalize(14), color:'#808080'}}>Twin Bed</Text>
                                </View>
                            </View>
                            <Right/>
                            <View style={{flexDirection:'row', marginTop:normalize(10)}}>
                                <Image source={no_smoking} style={{height:normalize(30), width:normalize(30)}} />
                                <View style={{marginLeft:normalize(10)}}>
                                    <Text style={{fontSize:normalize(14)}}>Kamar Tidak Boleh Merokok</Text>
                                    <Text style={{fontSize:normalize(14), color:'#808080'}}>Bebas Asap Rokok</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{padding:normalize(10), borderTopWidth:1, borderTopColor:'#dfdfdf'}}>
                        <Text style={{fontSize:normalize(18)}}>Rincian Harga</Text>
                        <View style={{marginTop:normalize(10)}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>(1x) Superior Room View Garden</Text>
                                <Right/>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>Rp 720.000</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>Pajak 10%</Text>
                                <Right/>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>-</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>Diskon</Text>
                                <Right/>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>-</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:normalize(16), color:'#808080'}}>Total Bayar</Text>
                                <Right/>
                                <Text style={{fontSize:normalize(16), color:'black', fontWeight:'bold'}}>Rp 720.000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{padding:normalize(10)}}>
                        <Button full rounded style={{backgroundColor:'#299BD7', height:normalize(40)}}>
                            <Text style={{fontSize:normalize(16), color:'white'}}>Lanjut Pembayaran</Text>
                        </Button>
                    </View>
				</ScrollView>
			</View>
		);
	}
}

export default RincianPemesanan;
