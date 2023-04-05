import React from 'react';
import { View, StyleSheet, Alert, Text, Image } from 'react-native';
//import { SwipeButton } from '../../src/index';
import { SwipeButton } from 'react-native-expo-swipe-button';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Control from "./index"
import { Datalog2,AirConditioner } from '../../assets';

export default function AirCondition() {
   return (
    <Control>
  <Text style={{fontSize: 50, marginRight: 20, fontWeight: '600'}}>75</Text>
  <Image source={AirConditioner} style={{width: 200, height: 200, marginRight: 30}}/>
</Control>
  );
}