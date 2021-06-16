import { Icon, Right, View } from 'native-base';
import React, { Component } from 'react';
import normalize from 'react-native-normalize';


class PopupSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{padding:normalize(20)}}>
                <View style={{borderWidth:1, borderRadius:20, height:normalize(300), width:'100%', padding:normalize(20)}}>
                    <View style={{flexDirection:'row'}}>
                        <Right/>
                        <Icon type={"FontAwesome5"} name="times" style={{fontSize:normalize(30), color:'#299BD7'}} />
                    </View>
                </View>
            </View>
        );
    }
}

export default PopupSuccess;