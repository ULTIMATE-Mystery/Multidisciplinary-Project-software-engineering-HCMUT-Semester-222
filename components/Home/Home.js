import React from 'react'
import {
  Image,
  Text,
  View,
  StyleSheet,Button
} from 'react-native'

import {
  Snowy,
  Avatar
} from '../../assets/index.js'
import Chart from './Chart'
import ControlDevices from './ControlDevices'
import { Dimensions } from "react-native";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;


export default Home = (props) => {
  const {navigation} = props;

  return <View>
        <View style={styles.header}>
            <View style={styles.dayNow}>
                <Text style={styles.textStyle}>Good Morning</Text>
                <Text style={styles.textStyle}>Sunday 3:00 AM</Text>
            </View>
            <Image style={styles.avatar} source={Avatar}>

            </Image>
        </View>
        <View style={styles.weatherContainer}>
             <Image style={styles.weatherNow} source={Snowy}>

            </Image>
            <View style={styles.dayNow}>
                <Text style={styles.textStyle}>Cold 24 °C</Text>
                <Text style={styles.textStyle}>Ho Chi Minh City</Text>
            </View>
        </View>
        <Chart/>
        <ControlDevices navigation={navigation}/>
  </View>
}



const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: screenWidth,
    marginTop:10,
    height: screenHeight*0.7/8
  },
  dayNow:{
    marginBottom: 10
  },
  avatar:{
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
  },
  weatherContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight*1/8
  },
  weatherNow:{
    width: 100,
    height:100
  },
  textStyle:{
    fontFamily: 'Poppins',
  }
})