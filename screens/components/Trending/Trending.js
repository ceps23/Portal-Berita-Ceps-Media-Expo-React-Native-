import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, Image, TouchableOpacity, ActivityIndicator, FlatList, Button, ScrollView, Animated, Share
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import  { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CategoryTrending from './CategoryTrending';
import { AntDesign } from '@expo/vector-icons'; 

function Artikel({ navigation }) {
  var hitung = 1;
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
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
         <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() =>
                      navigation.navigate('Details', { squad: item })
                    } >
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
      />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingLeft:10,
  },
});

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
                               
                               <CategoryTrending 

                        
                               imageUri={item.urlToImage}
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


const Stack = createStackNavigator();
function Trending() {
  return(
 <NavigationContainer>
 <Stack.Navigator initialRouteName="Trending" screenOptions={{ headerTintColor:'#0048cd'}}>
 <Stack.Screen name="Trending" component={Artikel} />
 <Stack.Screen name="Details" component={DetailsScreen} />
 </Stack.Navigator>
 </NavigationContainer>
 );
}
export default Trending;

