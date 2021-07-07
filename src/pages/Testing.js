import { Button, ListItem, Text, View } from 'native-base';
import React, { Component } from 'react';
import axios from 'axios';
import {FlatList, TouchableOpacity, TextInput, Alert} from 'react-native';
import normalize from 'react-native-normalize';

class Testing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            customers:[],
            nama:'',
            email:'',
            refresh:''
         };
         this.handleNama = this.handleNama.bind(this);
         this.handleEmail = this.handleEmail.bind(this);
    }

    handleNama = (event) => {
        this.setState({nama: event});
    }

    handleEmail = (event) => {
        this.setState({email: event});
    }

    handleSubmit = () => {

        axios.post('http://10.0.2.2:3000/customers', {
            name:this.state.nama,
            email:this.state.email
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({nama:'', email:''})
            Alert.alert("Data Berhasil Disimpan")
        })
        .catch(err => console.log("api error: ", err.message))
    }

    componentDidMount(){
        axios.get(`http://10.0.2.2:3000/customers`)
        .then(res => {
            const customers = res.data;
            console.log(res);
            this.setState({customers})
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <View>
                <Text>Example Axios</Text>
                {this.state.customers.map(customer => 
                <View style={{borderWidth:1, borderRadius:10, height:normalize(50), width:normalize(250)}}>
                    <Text>{customer.name}</Text>
                    <Text>{customer.email}</Text>
                </View>
                )}

                <View style={{paddingTop:normalize(10), paddingLeft:normalize(20), paddingRight:normalize(20)}}>
                    <View style={{borderWidth:1, borderRadius:10, width:'100%', height:normalize(50)}}>
                        <TextInput
                            placeholder="Ketik disini..."
                            value={this.state.nama.toString()}
                            onChangeText={this.handleNama}
                            style={{fontSize:normalize(14)}}
                        />
                    </View>

                    <View style={{paddingTop:normalize(10)}} />
                    <View style={{borderWidth:1, borderRadius:10, width:'100%', height:normalize(50)}}>
                        <TextInput
                            placeholder="Ketik disini..."
                            value={this.state.email.toString()}
                            onChangeText={this.handleEmail}
                            style={{fontSize:normalize(14)}}
                        />
                    </View>

                    <View style={{paddingTop:normalize(10)}} />
                    <Button full rounded primary onPress={this.handleSubmit.bind(this)}>
                        <Text>Simpan</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

export default Testing;