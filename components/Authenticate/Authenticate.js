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
    <Text style={styles.Text}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate('Home') 
    }>
    <Text style={styles.Text}>Sign Up</Text>
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
      justifyContent: 'space-between',
      justifyContent: 'center',
    },

    button: {
    backgroundColor: '#07D24C',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
    
  },

    Text: {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    }
});