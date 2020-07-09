import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, Image, TouchableOpacity, ActivityIndicator, FlatList, Button
} from "react-native";

export default class Detail extends Component {
    render() {
        return (
       <View style={stylesDetail.container}>
      <Image style={stylesDetail.image}  source={{ uri: this.props.gambar }} />
      <View style={stylesDetail.heading}>
        <Text style={stylesDetail.teks}>{this.props.judul }</Text>
        <Text style={stylesDetail.teksP}>{this.props.penulis }</Text>
        <Text style={stylesDetail.title}>{this.props.konten}</Text>
        
      </View>
    
    </View>
        );
    }
}

const stylesDetail = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  
  heading: {
    backgroundColor: 'white',
  },
  image: {
    width: 378,
    height: 200,
    resizeMode: 'cover'
  },
  teks: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: '#008000',
  },
  teksP: {
    fontSize: 18,
    margin: 10,
    color: '#656565'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565',
  },
 
});

