import { Body, Card, DatePicker, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Alert, BackHandler, ScrollView, Text, View, Animated, TouchableHighlight, Image, TextInput, DatePickerAndroid, TouchableWithoutFeedback } from 'react-native';
import normalize from 'react-native-normalize';
import { avva } from '../../../assets';
import { styles } from './style';


class DataAccount extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
            simpleDate: new Date(),
            simpleText: ''
        }
        this.backAction = this.backAction.bind(this);
        this.setDate = this.setDate.bind(this);
        this.showPicker = this.showPicker.bind(this, 'simple', {date: this.state.simpleDate});
    }

    showPicker = async (statekey, option) => {
        try{
            const newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(option);
            if(action === DatePickerAndroid.dismissedAction){
                newState[statekey + 'Text'] = 'dismissed';
            } else {
                const date = new Date(year, month, day);
                newState[statekey + 'Text'] = date.toLocaleDateString();
                newState[statekey + 'Date'] = date;
            }
            this.setState({newState});
        } catch ({code, message}) {
            console.warn('error in example' + statekey + " : " + message)
        }
    }

    setDate = (newDate) => {
        this.setState({newDate});
    }
    backAction = () => {
        this.props.navigation.goBack();
        return true;
    }
    componentDidMount(){
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }
    componentWillUnmount(){
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }
    render() { 
        return ( 
            <View>
                <ScrollView>
                    {/* Header */}
                    <Header transparent>
                        <Left>
                            <Icon onPress={() => this.props.navigation.goBack()} type="FontAwesome5" name="chevron-left" style={{fontSize:normalize(20), color:'#299BD7'}} />
                        </Left>
                        <Body>
                            <Text style={{color:'#299BD7', fontSize:normalize(20)}}>My Profile</Text>
                        </Body>
                        <Right>
                            <Icon type="FontAwesome5" name="ellipsis-v" style={{fontSize:normalize(20), color:'#299BD7'}}/>
                        </Right>
                    </Header>

                    {/* Card Ganti Foto */}
                    <View style={{padding:normalize(20)}}>
                        <Card style={{borderRadius:10}}>
                            <View style={{paddingTop:normalize(20), paddingBottom:normalize(20), }}>
                                <View style={{flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
                                    <Icon type="FontAwesome5" name="exclamation-triangle" style={{fontSize:normalize(24), color:'#299BD7'}} />
                                    <Text style={{color:'black', fontSize:normalize(18), paddingLeft:normalize(10), fontWeight:'bold'}}>Atur Kembali Akun Anda</Text>
                                </View>
                                <View style={{paddingTop:normalize(10), alignItems:'center'}}>
                                    <Text style={{fontSize:normalize(15), color:'black', lineHeight:15}}>
                                        Demi melindungi dan mengamankan akun Anda {"\n"}
                                        dari penyalahgunaan pihak lain. Kami sarankan {"\n"}
                                        untuk kelola akun secara berkala.
                                    </Text>
                                    <View style={styles.rounder}>
                                        <Image source={avva} style={styles.img} />
                                    </View>
                                    <Text style={{color:'#299BD7', marginTop:normalize(10)}}>Ganti Foto</Text>
                                </View>
                            </View>
                        </Card>
                    </View>

                    <View style={{paddingLeft:normalize(40)}}>
                        <Text style={{color:'black', fontWeight:'bold'}}>Data Pribadi</Text>
                        <Text style={{color:'black', fontSize:normalize(15)}}>Isi data pribadi Anda dengan benar.</Text>
                    </View>

                    {/* Input Biodata */}
                    <View style={{padding:normalize(20)}}>
                        <Card style={{borderRadius:10}}>
                            <View style={{paddingTop:normalize(20), paddingBottom:normalize(20), alignItems:'center'}}>
                                <TextInput
                                    placeholder="Nama Lengkap"
                                    style={styles.txtinput}
                                />
                                <View style={{paddingTop:normalize(10)}} />
                                <TouchableWithoutFeedback onPress={this.showPicker}>
                                    <TextInput
                                        placeholder="Tanggal Lahir"
                                        onFocus={this.showPicker}
                                        value={this.state.simpleText}
                                        onChange={(event) => this.setState({simpleText: event})}
                                    />
                                </TouchableWithoutFeedback>
                                <View style={{paddingTop:normalize(10)}} />
                                <TextInput
                                    placeholder="Alamat"
                                    style={styles.txtinput}
                                />
                            </View>
                        </Card>
                    </View>
                </ScrollView>
            </View>
         );
    }
}
 
export default DataAccount;