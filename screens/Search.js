import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cari from './components/Cari/Cari';
import Details from './components/Cari/Details';

const Stack = createStackNavigator();
class Search extends Component{ 
  render(){
   return (
 <NavigationContainer>
 <Stack.Navigator initialRouteName="Cari Berita" screenOptions={{  headerTintColor:'#0048cd', headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:24,
          }, }}>
 <Stack.Screen options={{headerShown: false}} name="Cari Berita" component={Cari} />
 <Stack.Screen name="Details" component={Details} />
 </Stack.Navigator>
 </NavigationContainer>
 );
  }

}

export default Search;