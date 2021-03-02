import { Body, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { styles } from './style';

class ConfirmEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Header transparent>
                    <Left>
                        <TouchableOpacity>
                            <Icon type={"FontAwesome5"} name="chevron-left" />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Text>Lupa Password</Text>
                    </Body>
                    <Right/>
                </Header>
                <View style={styles.field}>

                </View>
                <View>
                    <Text>Masukkan alamat email</Text>
                    <TextInput

                    />
                </View>
            </View>
        );
    }
}

export default ConfirmEmail;