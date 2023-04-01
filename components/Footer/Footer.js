import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import {
  HomeIcon,
  ActivityIcon,
  DataLog,
  SettingIcon
} from '../../assets/index'
import {useNavigation} from '@react-navigation/native';

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export default Footer = () => {
  const navigation = useNavigation();
  return <View style={styles.navigateContainer}>
    <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
      
      <Image source={HomeIcon} style={styles.imageStyle}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("Activities")}>

    <Image source={ActivityIcon} style={styles.imageStyle}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=> navigation.navigate("Datalog")}>

    <Image source={DataLog} style={styles.imageStyle}/>
      </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate("Setting")}>

    <Image source={SettingIcon} style={styles.imageStyle}/>
    </TouchableOpacity>

  </View>
}

const styles = StyleSheet.create({
  navigateContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight*0.5/8
  },
  imageStyle:{
    width: 30,
    height:30
  }
})