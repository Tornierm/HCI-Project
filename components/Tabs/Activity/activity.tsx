import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
  
  const image ='../../../assets/CafèProfileImages/Steven2.jpeg';

  export default function Activity() {
    return (
      <View style={styles.container}>
        <Text>Activity</Text>
      </View>
    );
  }