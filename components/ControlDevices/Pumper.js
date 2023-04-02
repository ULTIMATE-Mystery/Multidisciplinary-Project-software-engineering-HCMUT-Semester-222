import React from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
//import { SwipeButton } from '../../src/index';
import { SwipeButton } from 'react-native-expo-swipe-button';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function PlantCondition() {
   return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
    <Text style={styles.titleStyle}>
          Pumper
        </Text>
      <SwipeButton
        Icon={
          <MaterialIcons name="keyboard-arrow-right" size={50} color="white" />
        }
        width={230}
        onComplete={() => {}}
        title="OFF"
        titleStyle={{ color: 'black',
        fontSize: 28,
    fontWeight: 'bold',}}
        borderRadius={100}
        containerGradientProps={{
          colors: ['red', 'white'],
          start: [0, 0.5],
          end: [1, 0.5],
        }}
        underlayTitle="ON"
        underlayTitleStyle={{ color: 'black',
        fontSize: 28,
    fontWeight: 'bold',}}
        underlayStyle={{
          borderRadius: 100,
        }}
        underlayContainerGradientProps={{
          colors: ['green', 'white'],
          start: [0, 0.5],
          end: [1, 0.5],
        }}
      />
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 16,
    maxWidth: '50%',
    textAlign: 'center',
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});