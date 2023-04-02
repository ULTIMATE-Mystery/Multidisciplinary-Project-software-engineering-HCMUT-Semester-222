import React, {useState} from 'react';
import{View, Text, StyleSheet, Image, Flatlist, TouchableOpacity} from 'react-native'
import Welcome from '../../assets/welcome.png'
import {Dimensions} from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default Authenticate = (props) => {
  const {navigation} = props
  return (<View>
  <View style={styles.root}>
    <Image source={Welcome} style={styles.logo} resizemode="contain" />
     </View>
    <View style={styles.Container}>
        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate('Home') }>
    <Text>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate('Home') 
    }>
    <Text>Sign Out</Text>
        </TouchableOpacity>

      </View> 
      </View>);       
}
        

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 5,
    },
    logo: {
      width: '100%',
      height: 375,
    },
    Container: {
      justifyContent: 'space-between'
    },

    button: {
    alignItems: 'center',
      width: "100%",
    height: 25,
    backgroundColor: "#FFF5F5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 10,
  },
});