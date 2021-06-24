import { View } from 'native-base';
import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

export const SearchByMap = () => {
	return (
		<View>
			<MapView>
				<View style={{ borderBottomWidth: 1, borderBottomColor: '#dfdfdf', paddingTop: normalize(10) }} />
				<Text style={{ fontWeight: 'bold', color: 'black' }}>Lokasi</Text>
				<MapView
					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.009,
						longitudeDelta: 0.009
					}}
					style={{ width: '100%', height: normalize(200) }}
				>
					<Marker
						style={{ ...StyleSheet.absoluteFillObject }}
						coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
					/>
				</MapView>
			</MapView>
		</View>
	);
};
