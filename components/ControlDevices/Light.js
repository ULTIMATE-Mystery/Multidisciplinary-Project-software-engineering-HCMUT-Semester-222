import React from 'react';
import { Image, Text } from 'react-native';
//import { SwipeButton } from '../../src/index';
import { Datalog3 } from '../../assets';
import Control from "./index";

export default function Light() {
   return (
    <Control>
  <Text style={{fontSize: 50, marginTop: 50, fontWeight: '600'}}>75</Text>
  <Image source={Datalog3} style={{width: 200, height: 200}}/>
</Control>
  );
}