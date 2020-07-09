import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image, 
    Dimensions, TouchableOpacity, FlatList, ActivityIndicator,
    Animated, Share, Button
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import  { useEffect, useState } from 'react';
import Category from './components/Beranda/Category'
import Home from './components/Beranda/Home';
import Tag from './components/Beranda/Tag';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 


const { height, width } = Dimensions.get('window')



function HomeScreen({ navigation }) {
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

          
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        
                        <Animated.View
                            style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity, paddingTop: 10 }}
                        >
                            <Tag name="Games" />
                            <Tag name="Software" />
                            <Tag name="Smartphone" />
                            <Tag name="Laptop" />
                            <Tag name="Hardware" />

                        </Animated.View>
                    </Animated.View>


   
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Headline Ceps Media
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
                                            navigation.navigate('Details', { squad: item }) } >   
                               
                               <Category imageUri={item.urlToImage}
                                        name={item.title} />
                                              
                                   
                                   </TouchableOpacity>
        )} /> )}
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Ceps Media Jujur & Terpercaya
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    Menyajikan Berita Terlengkap Seputar Teknologi Terkini

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/front-hd.jpg')}
                                    />

                                </View>
                            </View>
                        </View>
                        
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Berita Terbaru Untuk Kamu
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            
      {isLoading ? <ActivityIndicator/> : (
                                 <FlatList
                                 
                                                         data={data}
                              renderItem={({ item }) => (
                                <TouchableOpacity onPress={() =>
                                            navigation.navigate('Details', { squad: item })
                    } >   
                               
                          <Home width={width}
                                    name={item.title}
                                    imageUri={item.urlToImage}
                                    deskripsi={item.description}
                                    penulis={item.author}
                                />
                                              
                                   
                                   </TouchableOpacity>
        )} /> )}
                                               
                                                                

                            </View>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }


function DetailsScreen({ route, navigation }) {

   
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
    <View style={stylesDetail.container}>
    <ScrollView> 
      <Image style={stylesDetail.image}  source={{ uri: squad.urlToImage }} />
      <View style={stylesDetail.heading}>
        <Text style={stylesDetail.teks}>{squad.title}</Text>
        <Text style={stylesDetail.teksP}>{squad.author}</Text>
        <Text style={stylesDetail.title}>{squad.content}</Text>

      <TouchableOpacity style={stylesDetail.buttonContainer} onPress={shareBerita(squad.url)} alignItems="center">
                <Text style={stylesDetail.tombolb}>Bagikan <AntDesign name="sharealt" color="white" size={20} style={{ marginHorizontal: 20 }}  /></Text> 
      </TouchableOpacity>
        
      </View>

      
      
      

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

const Stack = createStackNavigator();
function Beranda() {

 return (
 <NavigationContainer>
 <Stack.Navigator initialRouteName="CepsMedia" screenOptions={{ headerTintColor:'#0048cd',  }}>
 <Stack.Screen options={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:24,
          }, 
        }} name="Ceps Media" component={HomeScreen} />
 <Stack.Screen name="Details" component={DetailsScreen} />
    
            
            
 </Stack.Navigator>
 </NavigationContainer>
 );
}




export default Beranda;


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
