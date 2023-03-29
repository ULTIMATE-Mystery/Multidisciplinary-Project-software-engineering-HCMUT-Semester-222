import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,FlatList,Image} from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import Authenticate from './components/Authenticate/Authenticate'
import Home from './components/Home/Home'
import Report from './components/Report/Report'
import Footer from './components/Footer/Footer'
import MyStack from './Navigator'
// You can import from local files
import { Card } from 'react-native-paper';
import { Dimensions } from "react-native";
import Datalog from './components/Datalog/Datalog';
const screenHeight = Dimensions.get("window").height;

export default function App() {
  return (
    <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#07D24C', '#F98ECE', '#A80A43']}
        locations={[0,0.3,1]}
        style={{height:screenHeight}}
        >
        <MyStack/>
        {/* <Datalog/> */}
        <Footer/>
        </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});