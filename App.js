import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import Beranda from './screens/Beranda';
import Berita from './screens/Berita';
import Trending from './screens/Trending';
import Profile from './screens/Profile';
import Cari from './screens/Search';

export default createBottomTabNavigator(
  {
    Beranda: {
      screen: Beranda,
      navigationOptions: {
        tabBarLabel: 'BERANDA',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={24} />
        ),
      },
    },
    Berita: {
      screen: Berita,
      navigationOptions: {
        tabBarLabel: 'POPULER',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-paper" color={tintColor} size={24} />
        ),
      },
    },
    Cari: {
      screen: Cari,
      navigationOptions: {
        tabBarLabel: 'CARI',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={24} />
        ),
      },
    },
    Trending: {
      screen: Trending,
      navigationOptions: {
        tabBarLabel: 'TRENDING',
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="barschart" color={tintColor} size={24}  />
        ),
      },
    },

    
    
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'PROFIL',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" color={tintColor} size={24} />
        ),
      },
    },
    
  },
  {
    tabBarOptions: {
      activeTintColor: '#0048cd',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  }
);
