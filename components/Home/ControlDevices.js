import React from 'react'

import{
  View,
  Text,
  Image,
  FlatList,
  StyleSheet
} from 'react-native'

import{
  HumidityIcon,
  LightIcon,
  SnowIcon
} from '../../assets/index'
import Device from './Device'

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const devices = [
  {
    key: 1,
    url: HumidityIcon,
    device: 'Pumper',
    value: '70%'
  },
  {
    key: 2,
    url: LightIcon,
    device: 'Light',
    value: '78 Lux'
  },
  {
    key: 3,
    url: SnowIcon,
    device: 'Air Conditioner',
    value: '24°C'
  },
]
export default ControlDevices = (props) => {
  const {navigation} = props
  return <View>
    <FlatList
      data={devices}
      renderItem={({item}) => <Device device={item} navigation={navigation}/>}
      keyExtractor={item=>item.key}
      contentContainerStyle={styles.devicesContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
}

const styles = StyleSheet.create({
  devicesContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:20,
    height: screenHeight*1.5/8
  }
})