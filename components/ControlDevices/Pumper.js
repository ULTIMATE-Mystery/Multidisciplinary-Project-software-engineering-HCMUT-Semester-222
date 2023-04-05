import React from 'react';
import { View, StyleSheet, Alert, Text, Image } from 'react-native';
//import { SwipeButton } from '../../src/index';
import { SwipeButton } from 'react-native-expo-swipe-button';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Control from "./index"
import { Datalog2 } from '../../assets';

export default function Pumper() {
   return (
    <Control>
  <Text style={{fontSize: 50, marginTop: 50, fontWeight: '600'}}>75</Text>
  <Image source={Datalog2} style={{width: 200, height: 200}}/>
</Control>
  );
}