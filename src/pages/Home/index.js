import { useNavigation } from "@react-navigation/core";
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
  BackHandler,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Animated,
  Alert,
  Dimensions,
  ToastAndroid,
} from "react-native";
import normalize from "react-native-normalize";
import { avva, banner, header_logo, hotel, logo } from "../../assets";
import { BotNav } from "../../components/BotNav";
import Sidebar from "../../components/Sidebar";
import { styles } from "./style";

let {width, height} = Dimensions.get('window');

class HomeScreen extends Component  {
  constructor(props) {
    super(props);
    this.state = {backClickCount: 0};
    this.springValue = new Animated.Value(100);
    this.backAction = this.backAction.bind(this);
  }

  _spring(){
    this.setState({backClickCount: 1 }, () => {
        Animated.sequence([
            Animated.spring(
                this.springValue, 
                {
                    toValue: -.15 * height,
                    friction: 5,
                    duration: 300,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(
                this.springValue,
                {
                    toValue: 100,
                    duration: 300,
                    useNativeDriver: true,
                }
            ),
        ]).start(() => {
            this.setState({backClickCount: 0});
        });
    });
  }

  backAction = () => {
      setTimeout(() => {
        this.setState({backClickCount: 0});
      }, 2000);

      if(this.state.backClickCount == 0){
        this.setState({backClickCount: this.state.backClickCount + 1});
        ToastAndroid.show("Tekan 2 kali untuk keluar!", ToastAndroid.SHORT);
      } else {
        BackHandler.exitApp()
      }
      return true;
  }

  componentDidMount(){
    BackHandler.addEventListener("hardwareBackPress", this.backAction)
  }

  componentWillUnmount(){
    BackHandler.removeEventListener("hardwareBackPress", this.backAction  )
  }

  render() {

    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <Header transparent>
          <Left>
            <Icon
              type="FontAwesome5"
              name="bars"
              style={{ color: "#299BD7", fontSize:normalize(24) }}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Body>
            <Image source={header_logo} style={styles.headerImg}/>
          </Body>
          <Right style={{flexDirection:'row'}}>
            <Image style={styles.rounder} source={avva} />
            <Text style={{color:'black', fontSize:normalize(14), paddingBottom:normalize(8), paddingLeft:normalize(5)}}>6000 Poin</Text>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.backwhite}>
            {/* Background */}
            <Image source={banner} style={styles.borderimg} />
            {/* Image Hotel */}
            <View style={styles.positionsImg}>
              <View style={styles.borderhotel}>
                <Image source={hotel} style={styles.imgcontain}/>
              </View>
            </View>
            <Text style={{color:'#299BD7', textAlign:'center', fontSize:normalize(24)}}>Hotel</Text>

            {/* Border Yellow */}
            <View style={styles.yellowborder}>
              <Icon type="FontAwesome5" name="exclamation-triangle" style={{color:'#F1814D', fontSize:normalize(24), paddingRight:normalize(10)}}/>
              <Text>Patuhi Protokol Kesehatan</Text>
            </View>

            {/* Ini Rekomendasi Penginapan */}
            <View style={{padding:normalize(20)}}>
              <View>
                <Text style={{color:'black', fontWeight:'bold'}}>Rekomendasi Penginapan Terpopuler</Text>
                <Text>Temukan penginapan yang nyaman</Text>
                <Text>dengan harga terbaik.</Text>
              </View>
              <View style={{flexDirection:'row', marginTop:normalize(20)}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={styles.borderHo}>

                  </View>
                  <View style={{paddingRight:normalize(10)}}/>
                  <View style={styles.borderHo}>

                  </View>
                  <View style={{paddingRight:normalize(10)}}/>
                  <View style={styles.borderHo}>

                  </View>
                </ScrollView>
              </View>
            </View>

            {/* Ini Promosi */}
            <View style={{padding:normalize(20)}}>
              <View>
                <Text style={{color:'black', fontWeight:'bold'}}>Promo Menarik Bulan Ini</Text>
                <Text>Liburan jadi hemat dengan berbagai</Text>
                <Text>penawaran promo yang menarik.</Text>
              </View>
              <View style={{flexDirection:'row', marginTop:normalize(20)}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={styles.borderHo}>

                  </View>
                  <View style={{paddingRight:normalize(10)}}/>
                  <View style={styles.borderHo}>

                  </View>
                  <View style={{paddingRight:normalize(10)}}/>
                  <View style={styles.borderHo}>

                  </View>
                </ScrollView>
              </View>
            </View>

            {/* Ini Inspirasi Liburan */}
            <View style={{padding:normalize(20)}}>
              <View>
                <Text style={{color:'black', fontWeight:'bold'}}>Inspirasi Tujuan Liburan</Text>
                <Text>Buat liburanmu makin berkesan</Text>
                <Text>dengan menjelajahi destinasi pilihan.</Text>
              </View>
              <View style={{flexDirection:'row', marginTop:normalize(20)}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={styles.borderHo}>

                  </View>
                  <View style={{paddingRight:normalize(10)}}/>
                  <View style={styles.borderHo}>

                  </View>
                  <View style={{paddingRight:normalize(10)}}/>
                  <View style={styles.borderHo}>

                  </View>
                </ScrollView>
              </View>
            </View>

            {/* Partner Kami */}
            <View style={{padding:normalize(20)}}>
              <Text style={{color:'black', fontWeight:'bold'}}>Partner Kami : </Text>
              <View style={{flexDirection:'row'}}>

              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
