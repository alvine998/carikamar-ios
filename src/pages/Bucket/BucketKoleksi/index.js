import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from "react-native";
import normalize from "react-native-normalize";
import { Header, Left, Icon, Body, Right, Button, Picker } from "native-base";
import { bg4 } from "../../../assets";

class BucketKoleksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
        koleksi:'',
        deskripsi:'',
        foto:'',
        selected: "key1"
    };
    this.handleKoleksi = this.handleKoleksi.bind(this);
    this.handleDeskripsi = this.handleDeskripsi.bind(this);
    this.handleFoto = this.handleFoto.bind(this);
  }

  handleKoleksi = (event) => {
      this.setState({koleksi: event});
  }

  onValueChange = (event) => {
    this.setState({selected: event})
  }

  handleDeskripsi = (event) => {
      this.setState({deskripsi: event});
  }

  handleFoto = (event) => {
      this.setState({foto: event});
  }
  render() {
    return (
      <ScrollView>
        <Header transparent>
          <Left>
            <Icon
              type="FontAwesome5"
              name="chevron-left"
              style={{ color: "#299BD7", fontSize: normalize(25) }}
            />
          </Left>
          <Body>
            <Text style={{color:'#299BD7'}}>Buat Koleksi</Text>
          </Body>
          <Right>
            <Icon
              type="FontAwesome5"
              name="ellipsis-v"
              style={{ color: "#299BD7", fontSize: normalize(25) }}
            />
          </Right>
        </Header>
        <View style={{paddingBottom:normalize(50)}}>
          <View style={{ backgroundColor: "white", height: normalize(250) }}>
            <Image
              source={bg4}
              style={{ width: normalize(400), height: normalize(200) }}
            />
            <TouchableOpacity
              style={{ flex: 1, alignItems: "center", top: normalize(-30) }}
            >
              <TouchableHighlight
                style={{
                  borderWidth: 1,
                  borderRadius: 30,
                  height: normalize(60),
                  width: normalize(60),
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  borderColor: "#299BD7",
                }}
              >
                <Icon
                  type="FontAwesome5"
                  name="camera"
                  style={{ color: "#299BD7" }}
                />
              </TouchableHighlight>
            </TouchableOpacity>
            <Text style={{textAlign:'center'}}>Ganti Foto</Text>
          </View>
          <View style={{alignItems:'center', paddingTop:normalize(20)}}>
              <View style={{borderBottomWidth:1, width:normalize(330)}} />
          </View>
          <View style={{paddingTop:normalize(20), paddingLeft:normalize(30)}}>
              <Text>Nama Koleksi</Text>
              <TextInput
                placeholder="Tulis judul koleksi"
                value={this.state.koleksi}
                onChange={this.handleKoleksi}
                style={{
                    borderWidth:1,
                    width:normalize(300),
                    height:normalize(50),
                    borderRadius:5,
                    paddingLeft:normalize(10),
                    marginTop:normalize(10)
                }}
                maxLength={50}
              />
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'grey', fontSize:normalize(15)}}>Maks. 50 Karakter</Text>
                <Right style={{paddingRight:normalize(50)}}>
                    <Text style={{color:'grey', fontSize:normalize(15)}}>0/50</Text>
                </Right>
              </View>

                <View style={{paddingTop:normalize(20)}} />
              <Text>Deskripsi</Text>
              <TextInput
                placeholder="Tulis keterangan koleksi"
                value={this.state.deskripsi}
                onChange={this.handleDeskripsi}
                style={{
                    borderWidth:1,
                    width:normalize(300),
                    height:normalize(50),
                    borderRadius:5,
                    paddingLeft:normalize(10),
                    marginTop:normalize(10)
                }}
                maxLength={250}
              />
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'grey', fontSize:normalize(15)}}>Maks. 250 Karakter</Text>
                <Right style={{paddingRight:normalize(50)}}>
                    <Text style={{color:'grey', fontSize:normalize(15)}}>0/50</Text>
                </Right>
              </View>

              <View style={{paddingTop:normalize(20)}} />
                <Text>Kategori</Text>
                <View style={{paddingTop:normalize(20)}}>
                  <Picker
                    note
                    mode="dropdown"
                    style={{width:normalize(200)}}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    <Picker.Item label="Travel" value="key0"/>
                    <Picker.Item label="Work" value="key1"/>
                    <Picker.Item label="Love" value="key2"/>
                    <Picker.Item label="Lainnya" value="key3"/>
                  </Picker>
                </View>
            </View>

              <View style={{paddingTop:normalize(20), paddingLeft:normalize(50), paddingRight:normalize(50)}}>
                  <Button full rounded transparent style={{backgroundColor:'#299BD7', height:normalize(40)}}>
                    <Text>Simpan</Text>
                  </Button>
              </View>
        </View>
      </ScrollView>
    );
  }
}

export default BucketKoleksi;
