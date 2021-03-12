import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>Hello Booking</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default Booking;