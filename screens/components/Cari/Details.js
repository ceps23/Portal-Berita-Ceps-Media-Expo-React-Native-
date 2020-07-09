import Detail from './Detail';
  import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, Image, TouchableOpacity, ActivityIndicator, FlatList, Button, ScrollView, Animated, Share
} from "react-native";
import  { useEffect, useState } from 'react';
import Category from '../Beranda/Category'
import { AntDesign } from '@expo/vector-icons'; 




export default function DetailsScreen({ route, navigation }) {
  const { squad } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
   

   useEffect(() => {
    fetch('http://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=3ddb73c411ba47ef960151fe0e813dab')
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }, []);

        return (
          
           <View style={stDetail.container}>
           <ScrollView>
           <Detail 
                                    judul={squad.title}
                                    gambar={squad.urlToImage}
                                    konten={squad.description}
                                    penulis={squad.author}
                                />
                  <TouchableOpacity style={stDetail.buttonContainer} onPress={shareBerita(squad.url)} alignItems="center">
                <Text style={stDetail.tombolb}>Bagikan <AntDesign name="sharealt" color="white" size={20} style={{ marginHorizontal: 20 }}  /></Text> 
      </TouchableOpacity>
          

   <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 20 }}>
                                Baca Juga :
                            </Text>

                            <View style={{ height: 220, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >  
                                {isLoading ? <ActivityIndicator/> : (
                                 <FlatList
                                 horizontal={true}
                              data={data}
                              renderItem={({ item }) => (
                                <TouchableOpacity onPress={() =>
                                            navigation.replace('Details', { squad: item }) } >   
                               
                               <Category imageUri={item.urlToImage}
                                        name={item.title} />
                                              
                                   
                                   </TouchableOpacity>
        )} /> )}
                                </ScrollView>
                                </View>
                                </View>
                            </ScrollView>
                            </ScrollView>
    </View>
        );
    }


function shareBerita(urlBerita) { 
  
  return(
  async () => {
    try {
      const result = await Share.share({
        message: urlBerita.toString(),
        url: urlBerita.toString(),
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }
  );
}


const stDetail = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  tombolb:{
    fontSize:20,
    color: "#ffffff",
    fontWeight: "600"
  },

  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  
  
 
});
