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
import { Header, Left, Icon, Body, Right, Button } from "native-base";
import { bg4 } from "../../../assets";

class BucketKoleksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
        koleksi:'',
        deskripsi:'',
        foto:''
    };
    this.handleKoleksi = this.handleKoleksi.bind(this);
    this.handleDeskripsi = this.handleDeskripsi.bind(this);
    this.handleFoto = this.handleFoto.bind(this);
  }

  handleKoleksi = (event) => {
      this.setState({koleksi: event});
  }

  handleDeskripsi = (event) => {
      this.setState({deskripsi: event});
  }

  handleFoto = (event) => {
      this.setState({foto: event});
  }
  render() {
    return (
      <View>
        <Header>
          <Left>
            <Icon
              type="FontAwesome5"
              name="chevron-left"
              style={{ color: "#299BD7", fontSize: normalize(25) }}
            />
          </Left>
          <Body>
            <Text>Buat Koleksi</Text>
          </Body>
          <Right>
            <Icon
              type="FontAwesome5"
              name="ellipsis-v"
              style={{ color: "#299BD7", fontSize: normalize(25) }}
            />
          </Right>
        </Header>
        <ScrollView>
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
                    height:normalize(35),
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
                    height:normalize(35),
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
                    <View style={{flexDirection:'row'}}>
                        <Button full transparent style={{borderWidth:1}}>
                            <Text>Travel</Text>
                        </Button>
                        <Button full transparent style={{borderWidth:1}}>
                            <Text>Work</Text>
                        </Button>
                        <Button full transparent style={{borderWidth:1}}>
                            <Text>Love</Text>
                        </Button>
                        <Button full transparent style={{borderWidth:1}}>
                            <Text>Other</Text>
                        </Button>
                    </View>
                </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default BucketKoleksi;
