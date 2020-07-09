import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class CategoryTrending extends Component {
    render() {
        return (
            <View style={{ height: 220, width: 220, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={{ uri: this.props.imageUri }}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 3 }}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default CategoryTrending;

