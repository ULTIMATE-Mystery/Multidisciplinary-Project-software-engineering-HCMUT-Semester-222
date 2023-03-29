import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { SnowIcon,HumidityIcon, LightIcon,Avatar   } from '../../assets';
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const devices = [
  {
    key: 1,
    url: SnowIcon,
    device: 'Temperature',
  },
  {
    key: 2,
    url: HumidityIcon,
    device: 'Humidity',
  },
  {
    key: 3,
    url: LightIcon,
    device: 'Light intensity',
  },
  {
    key: 4,
    url: Avatar,
    device: 'Plant\'s condition',
  },
]
export default function Datalog() {
  return (
    <View style={styles.ctnDtl}>
      {
        devices.map((device)=>(
          <TouchableOpacity>

      <View style={styles.ctnItemDtl}>
        <View style={styles.itemDtl}>
          <Image source={device.url} style={styles.itemIcon}>
          </Image>
          <Text style={{fontSize: 28, fontWeight: "bold"}}>{device.device}</Text>
        </View>
      </View>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  ctnDtl: {
    height: screenHeight*6.5/8,
    width: screenWidth,
    padding: 25,
    justifyContent: 'space-between'
  },
  ctnItemDtl:{
    width: "100%",
    height: screenHeight*1.35/8,
    backgroundColor: "#FFF5F5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  itemDtl:{
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'space-between',
    width: "100%",
    // paddingRight: 40,
    // paddingLeft: 10
  },
  itemIcon:{
    width:100,
    height:100,
    marginRight: 5
  }
})