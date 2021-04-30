import { Body, Header, Left, Right, Icon } from 'native-base';
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import normalize from 'react-native-normalize';

class Communicate extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ScrollView>
                <Header transparent>
                    <Left>
                        <Text style={{color:'#299BD7', fontSize:normalize(20)}}>Pesan Masuk</Text>
                    </Left>
                    <Body/>
                    <Right>
                        <Icon
                            type="FontAwesome5"
                            name="ellipsis-v"
                            style={{ color: "#299BD7", fontSize: normalize(25) }}
                        />
                    </Right>
                </Header>
                <View>

                </View>
            </ScrollView>
        );
    }
}

export default Communicate;