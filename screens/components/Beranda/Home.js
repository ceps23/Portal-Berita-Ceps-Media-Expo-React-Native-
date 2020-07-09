import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import StarRating from 'react-native-star-rating'
class Home extends Component {
    render() {
        return (
            <View style={{ width:this.props.width, height: this.props.width, borderWidth: 0.5, borderColor: '#dddddd',marginBottom:10 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null,resizeMode: 'cover', borderRadius: 5,  }}
                        source={{ uri: this.props.imageUri }} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{this.props.name}</Text>
                    <Text style={{ fontSize: 12 }}>{this.props.deskripsi}</Text>
                    <Text style={{ fontSize: 12 }}>{this.props.penulis}</Text>
                </View>
            </View>
        );
    }
}
export default Home;

