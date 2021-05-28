import { Body, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';

class ProfileHotel extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }
    render() {
        return (
            <ScrollView>
                <ImageBackground style={{height:normalize(200)}}>
                    <Header transparent>
                        <Left>
                            <Icon type={"FontAwesome5"} name="chevron-left" style={{fontSize:normalize(25)}}/>
                        </Left>
                        <Body>
                            <Text>Detail Hotel</Text>
                        </Body>
                        <Right>
                            <Icon type={"FontAwesome5"} name="ellipsis-v" style={{fontSize:normalize(25)}}/>
                        </Right>
                    </Header>
                </ImageBackground>
                <View style={{padding:normalize(20), flexDirection:'row'}}>
                    <Icon type={"FontAwesome5"} name="calendar-alt" style={{fontSize:normalize(25)}}/>
                    <Text>14 Feb - 15 Feb</Text>
                </View>
                <Text style={{textAlign:'center'}}>Hold up</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    headview:{

    }
});

export default ProfileHotel;