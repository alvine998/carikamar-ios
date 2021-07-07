import { View } from 'native-base';
import React, { Component } from 'react';
import { Linking, StyleSheet } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import InAppBrowser from 'react-native-inappbrowser-reborn';

class Kebijakan extends Component {
    async openLink() {
        try{
            const url = 'https://carikamar.id'
            if(await InAppBrowser.isAvailable()){
                const result = await InAppBrowser.open(url, {
                    // Android Properties
                    showTitle: true,
                    toolbarColor: '#FF6363',
                    secondaryToolbarColor: 'white',
                    enableUrlBarHiding: true,
                    enableDefaultShare: true,
                    forceCloseOnRedirection: false,
                    // Specify full animation resource identifier(package:anim/name)
                    // or only resource name(in case of animation bundled with app).
                    animations: {
                        startEnter: 'slide_in_right',
                        startExit: 'slide_out_left',
                        endEnter: 'slide_in_left',
                        endExit: 'slide_out_right'
                    },
                    headers: {
                        'my-custom-header': 'my custom header value'
                    }
                })
                console.log(result)
            }
            else Linking.openURL(url)
        } catch (err){
            console.log(err)
        }
    }

    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <View style={styles.viewContainer}>
                    <TouchableNativeFeedback onPress={this.openLink}>
                        <View style={styles.buttonWorld}>
                            <Text style={styles.textWorld}>IN-App Browser</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonWorld:{
        width:400,
        height:60,
        backgroundColor:'#FF6363',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    textWorld:{
        fontSize:16,
        fontWeight:'bold',
        color:'#FFF'
    }
})

export default Kebijakan;