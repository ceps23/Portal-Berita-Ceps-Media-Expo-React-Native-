/*This is an Example of SearchBar in React Native*/
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform, TouchableOpacity, Image
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import  { useEffect, useState } from 'react';


export default class Cari extends Component{
  
constructor(props) {
    super(props);
    //setting default state
    this.state = { news:[], search: '' };
    this.arrayholder = [];
  }

  componentDidMount(){
    const API="http://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=3ddb73c411ba47ef960151fe0e813dab";
    fetch(API).then(response=>response)
    .then(resp=>resp.json())
    .then(
      resp=> this.setState({news:resp.articles}, function() {
            this.arrayholder = resp.articles;
          }) 
      )
  }

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      news: newData,
      search: text,
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View/>
    );
  };

  render() {
    if (this.state.isLoading) {
      // Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <Searchbar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          style={styles.scStyle}
        />
<FlatList
        data={this.state.news}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
          <TouchableOpacity onPress={() =>
                                            this.props.navigation.navigate('Details', { squad: item }) } >   
          
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'white',
              }}>
              <Image
                style={{ width: 100, height: 100, margin: 5, borderRadius: 5, borderWidth: 1 }}
                source={{ uri: item.urlToImage }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  height: 130,
                }}>
                <Text style={{fontSize: 18}}>{item.title}</Text>
               <Text style={{color: '#656565'}}> {item.author}</Text>

                
              </View>
            </View>
          </View>
          </TouchableOpacity>

           )}
           enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS == 'ios' ? 30 : 0,
  },

  scStyle: {
    marginTop:30,
  },

});