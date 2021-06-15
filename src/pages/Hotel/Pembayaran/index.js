import { Header, View, Left, Body, Text, Right, Icon, Button } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import normalize from 'react-native-normalize';
import { building_full, no_smoking, twinbed } from '../../../assets';

class Pembayaran extends Component {
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
						<Text style={{ color: '#299BD7', fontSize: normalize(18) }}>Pembayaran</Text>
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
										backgroundColor: '#dfdfdf',
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
										backgroundColor: '#299BD7',
										borderRadius: 30
									}}
								/>
								<Text style={{ fontSize: normalize(14) }}>Pembayaran</Text>
							</View>
						</View>
					</View>

                    <View style={{paddingTop:normalize(10)}}>
                        <View style={{backgroundColor:'#299BD7', height:normalize(50)}}>
                            <View style={{flexDirection:'row', padding:normalize(8)}}>
                                <Icon type={"FontAwesome5"} name="clock" style={{color:'white', fontSize:normalize(35)}} />
                                <Text style={{fontSize:normalize(16), color:'white', marginLeft:normalize(20)}}>
                                    Selesaikan pembayaran anda dalam 20 menit {"\n"}
                                    Atau sebelum 18:50 PM
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
							padding: normalize(10),
							borderTopWidth: 1,
							borderTopColor: '#dfdfdf',
                            }}>
                        <Text style={{fontSize:normalize(18)}}>Pilih Metode Pembayaran</Text>
                        <View style={{paddingTop:normalize(10)}}>
                            <Text style={{fontSize:normalize(16), fontWeight:'bold'}}>Transfer</Text>
                            <Text style={{fontSize:normalize(14)}}>
                                Anda bisa melakukan pembayaran melalui ATM, {"\n"}
                                Internet Banking & Mobile Banking.
                            </Text>
                        </View>
                    </View>

                    <View>
                        
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

export default Pembayaran;
