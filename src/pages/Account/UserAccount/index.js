import { Body, Card, Header, Icon, Left, Right } from "native-base";
import React, { Component } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import normalize from "react-native-normalize";
import { avva } from "../../../assets";
import { BotNav } from "../../../components/BotNav";
import { styles } from "./style";

class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <Header transparent>
          <Left>
            <Text>Akun</Text>
          </Left>
          <Body />
          <Right>
            <Icon
              type="FontAwesome5"
              name="ellipsis-v"
              style={{ fontSize: normalize(25) }}
            />
          </Right>
        </Header>
        <View style={styles.center}>
          <Card style={styles.cardContainer}>
            <View style={{ flexDirection: "row" }}>
              <TouchableHighlight style={styles.avatar}>
                <Image source={avva} style={styles.imageContainer} />
              </TouchableHighlight>
              <View
                style={{ padding: normalize(10), marginLeft: normalize(20) }}
              >
                <Text>Aril Boril</Text>
                <Text>Basic Silver | 6000 Points</Text>
                <Text style={{ color: "#299BD7" }}>Terverifikasi</Text>
                <Icon
                  type={"FontAwesome5"}
                  name="pencil-alt"
                  style={{
                    color: "#299BD7",
                    fontSize: normalize(22),
                    marginLeft: normalize(200),
                  }}
                />
              </View>
            </View>
          </Card>
          <View style={{ paddingTop: normalize(20) }} />
        </View>
        <Text style={{ paddingLeft: normalize(20) }}>Special untuk kamu</Text>
        <View style={styles.center}>
          <Card style={styles.cardContainer}>
            <View style={{ padding: normalize(10) }}>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <View>
                  <Text style={{lineHeight:20}}>Basic Silver 6000 Points{"\n"}Tukarkan poin kamu dengan voucher{"\n"}Pelajari lebih lanjut</Text>
                </View>
                <Right>
                  <Icon type={"FontAwesome5"} name="chevron-right" style={{marginTop:normalize(20)}} />
                </Right>
              </TouchableOpacity>
              <View style={{paddingTop:normalize(20)}}/>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <View>
                  <Text style={{lineHeight:20}}>Voucher Saya {"\n"}Ayo gunakan voucher kamu dan {"\n"}gunakan untuk liburan selanjutnya. </Text>
                </View>
                <Right>
                  <Icon type={"FontAwesome5"} name="chevron-right" style={{marginTop:normalize(20)}} />
                </Right>
              </TouchableOpacity>
              <View style={{paddingTop:normalize(20)}}/>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <View>
                  <Text style={{lineHeight:20}}>
                    Member Carikamar{"\n"}
                  Nikmati keuntungan dengan memiliki{"\n"}
                  member Carikamar mulai dari diskon{"\n"}
                  dan harga khusus
                  </Text>
                </View>
                <Right>
                  <Icon type={"FontAwesome5"} name="chevron-right" style={{marginTop:normalize(20)}} />
                </Right>
              </TouchableOpacity>
            </View>
          </Card>
          <BotNav/>
        </View>
      </SafeAreaView>
    );
  }
}

export default UserAccount;
