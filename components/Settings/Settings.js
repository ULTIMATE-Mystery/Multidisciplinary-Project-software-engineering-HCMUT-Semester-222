import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import { EditIcon, FbIcon, ImgSetting, LockIcon } from '../../assets'

export default function Settings() {
  return (
    <View style={styles.ctnSettingS}>
      <View>

      <View style={styles.itemSettings}>
        <Image source={LockIcon} style={styles.itemLeft}/>
        <Text style={styles.itemRight}>Edit profile</Text>
      </View>
      <View style={styles.itemSettings}>
        <Image source={EditIcon} style={styles.itemLeft}/>
        <Text style={styles.itemRight}>Change password</Text>
      </View>
      <View style={styles.itemSettings}>
        <Image source={FbIcon} style={styles.itemLeft}/>
        <Text style={styles.itemRight}>Send feedbacks</Text>
      </View>
      </View>
      <View >
          <Image source={ImgSetting} style={{width: "100%", height: 240, borderRadius: 20}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
ctnSettingS: {
  height: "100%",
  padding: 20,
  flexDirection: "column",
  justifyContent: "space-between"
},
itemSettings: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
  // borderWidth: 1,
  // borderColor: "#090805",
  // borderStyle: "solid",
  padding: 15
},
itemLeft:{
  marginRight: 40,
  width: 45,
  height: 45
},
itemRight: {
  fontWeight: "bold",
  color: "#090805",
  letterSpacing: 1.4,
  fontSize: 20,
  textDecorationLine: 'underline'
}
})