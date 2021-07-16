import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './style';

class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            one:'',
            two:'',
            three:'',
            four:'',
            five:'',
            six:'',
            second:0,
         };
         this.handleOne = this.handleOne.bind(this);
         this.handleTwo = this.handleTwo.bind(this);
         this.handleThree = this.handleThree.bind(this);
         this.handleFour = this.handleFour.bind(this);
         this.handleFive = this.handleFive.bind(this);
         this.handleSix = this.handleSix.bind(this);
         this.secondTime = this.secondTime.bind(this);
    }

    handleOne = (event) => {
        this.setState({one: event})
    }
    handleTwo = (event) => {
        this.setState({two: event})
    }
    handleThree = (event) => {
        this.setState({three: event})
    }
    handleFour = (event) => {
        this.setState({four: event})
    }
    handleFive = (event) => {
        this.setState({five: event})
    }
    handleSix = (event) => {
        this.setState({six: event})
    }
    secondTime = () => {
        this.setState({second: this.state.second + 1})
    }
    render() {
        return (
            <View>
                <Header transparent>
                    <Left>
                        <Icon type={'FontAwesome5'} name="chevron-left" />
                    </Left>
                    <Body>
                        <Text style={{color:'black'}}>Verifikasi OTP Email</Text>
                    </Body>
                    <Right/>
                </Header>
                <View>
                    <View style={styles.fieldone}>
                        <Text style={{color:'black'}}>
                            Masukkan 6 digit angka verifikasi yang 
                            dikirim ke emailmu.
                        </Text>
                        <View style={styles.center}>
                            <TextInput
                                maxLength={1}
                                autoFocus={true}
                                keyboardType="numeric"
                                value={this.state.one}
                                onChangeText={this.handleOne}
                                style={styles.border}
                                blurOnSubmit={false}
                                onSubmitEditing={() => {this.handleTwo.focus()}}
                            />
                            <View style={styles.space} />
                            <TextInput
                                maxLength={1}
                                keyboardType="numeric"
                                value={this.state.two}
                                onChangeText={this.handleTwo}
                                style={styles.border}
                                ref={(input) => {this.handleTwo = input}}
                                onSubmitEditing={() => {this.handleThree.focus()}}
                            />
                            <View style={styles.space} />
                            <TextInput
                                maxLength={1}
                                keyboardType="numeric"
                                value={this.state.three}
                                onChangeText={this.handleThree}
                                style={styles.border}
                                ref={(input) => {this.handleThree = input}}
                                onSubmitEditing={() => {this.handleFour.focus()}}
                            />
                            <View style={styles.space} />
                            <TextInput
                                maxLength={1}
                                keyboardType="numeric"
                                value={this.state.four}
                                onChangeText={this.handleFour}
                                style={styles.border}
                                ref={(input) => {this.handleFour = input}}
                                onSubmitEditing={() => {this.handleFive.focus()}}
                            />
                            <View style={styles.space} />
                            <TextInput
                                maxLength={1}
                                keyboardType="numeric"
                                value={this.state.five}
                                onChangeText={this.handleFive}
                                style={styles.border}
                                ref={(input) => {this.handleFive = input}}
                                onSubmitEditing={() => {this.handleSix.focus()}}
                            />
                            <View style={styles.space} />
                            <TextInput
                                maxLength={1}
                                keyboardType="numeric"
                                value={this.state.six}
                                onChangeText={this.handleSix}
                                style={styles.border}
                                ref={(input) => {this.handleSix = input}}
                            />
                        </View>
                        <View style={styles.time}>
                            <Text>{this.state.second}</Text>
                            <Text style={{color:'#299BD7'}}>Kirim ulang</Text>
                            <View style={styles.btnContainer}>
                                <Button transparent full rounded style={styles.btnInside}>
                                    <Text style={{color:'white'}}>Verifikasi</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default VerifyEmail;