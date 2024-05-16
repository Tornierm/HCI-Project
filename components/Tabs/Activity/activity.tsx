import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';



const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      // justifyContent: 'center',
      backgroundColor: '#f0f0f0',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 20,
      margin: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cafeName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      justifyContent: 'center'
    },
    chipsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 10,
    },
    chip: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      paddingVertical: 6,
      paddingHorizontal: 12,
      marginRight: 10,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    upcoming: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 20,
      marginTop: 10,
    },
    image: {
      width: 290,
      height: 150, 
      marginBottom: 10,
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 10,
    }
  });
  
  const cafeImage = require('../../../assets/CafèProfileImages/Steven2.jpeg');

  export default function Activity() {
    return (
      <View style={styles.container}>
        <Text style={styles.upcoming}>Upcoming</Text>
      <View style={styles.card}>
      <Image source={cafeImage} style={styles.image} />
        
        <Text style={styles.cafeName}>Stevens</Text>
        
        <View style={styles.chipsContainer}>
        <View style={styles.chip}>
            <Text>Monday, 27th May</Text>
          </View>
          <View style={styles.chip}>
            <Text>Time: 12-14 hrs</Text>
          </View>
          <View style={styles.chip}>
            <Text>Guests: 2</Text>
          </View>
          <View style={styles.chip}>
            <Text>Calle de Berenguela, 19</Text>
          </View>
        </View>
      </View>
      </View>
    


    );
  }