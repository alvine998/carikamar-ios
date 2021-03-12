import {
  Body,
  Container,
  Drawer,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from "native-base";
import React, { Component } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { banner, hotel } from "../../assets";
import { BotNav } from "../../components/BotNav";
import Sidebar from "../../components/Sidebar";
import { styles } from "./style";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <Header transparent>
          <Left>
            <Icon
              type="FontAwesome5"
              name="bars"
              style={{ color: "#299BD7" }}
            />
          </Left>
          <Body>
            <Text>Beranda</Text>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <View style={styles.positions}>
            <ImageBackground source={banner} style={styles.image}>
              <View style={styles.positionsImg}>
                <TouchableHighlight style={styles.borderimg}>
                  <Image source={hotel} style={styles.hotelimg} />
                </TouchableHighlight>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
