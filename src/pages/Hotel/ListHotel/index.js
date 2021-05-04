import { Body, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import normalize from 'react-native-normalize';

class ListHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView>
                <View>
                    <Header transparent>
                        <Left>
                            <Icon
                                type="FontAwesome5"
                                name="chevron-left"
                                style={{ color: "white", fontSize: normalize(25) }}
                                onPress={() => this.props.navigation.goBack()}
                            />
                        </Left>
                        <Body>
                            <Text style={{color:'white'}}>Hotel</Text>
                        </Body>
                        <Right>
                            <Icon
                                type="FontAwesome5"
                                name="ellipsis-v"
                                style={{ color: "white", fontSize: normalize(25) }}
                            />
                        </Right>
                    </Header>
                </View>
            </ScrollView>
         );
    }
}
 
export default ListHotel;