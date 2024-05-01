import { StyleSheet, Text, View,Image, Dimensions, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, Icon } from '@rneui/themed';
import React, {useState} from 'react';
//import Map from './map';
import Reviews from './reviews';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:"100%",

    //justifyContent: 'space-between'
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
  headerContainer: {
      flexDirection: 'row',   // Aligns children in a row
      alignItems: 'center',   // Centers children vertically in the container
      justifyContent: 'space-between', // Distributes children evenly with space between them
      padding: 10,            // Adds some padding around the container
      backgroundColor: '#333', // Sets a background color
      height: 60,             // Sets a fixed height for the header
  },
  headerTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
  },
  headerAddress: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
},
headerTitleContainer: {
  flex: 'column'
},
  iconButton: {
      padding: 10,
  }, 
  imageContainer: {
    width: '100%', // The container takes the full width of the screen
    paddingHorizontal: 10, // Apply horizontal padding to create margins on both sides
    paddingTop: 10, // Top padding for margin from elements above, if necessary
    borderRadius: 10, // Apply border radius to the container
    overflow: 'hidden', // Ensures the contents do not bleed outside the border radius
  },
  stretch: {
    width: '100%', // Fill the adjusted width considering paddingHorizontal
    height: 250, // Fixed height, adjust as necessary
    resizeMode: 'cover', // Cover to ensure the aspect ratio is maintained
    borderRadius: 10,
  },
  workInProgress: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',   // Centers children vertically in the container
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '100%', // Full width
    padding: 10, // Padding inside the button container
    //position:'absolute'
  },
});


const Header = ({name, address}) => {
    const [isActive, setIsActive] = useState(false);
    const toggleIcon = () => {
        console.log('toggle');
        setIsActive(isActive => isActive = !isActive);
    }
    return(
      <View style={styles.headerContainer}>
      <Icon style={styles.iconButton}
            name="chevron-left"
            size={24}
            color="#ffffff"
        />
        <View style={styles.headerAddress}>
          <Text style={styles.headerTitle}>{name}</Text>
          <Text style={styles.headerAddress}>{address}</Text>
        </View>
        <Icon style={styles.iconButton}
              name={isActive ? 'favorite' : "favorite-outline"}
              size={24}
              color="#ffffff"
              onPress={toggleIcon}
        />
      </View>
    )
  };

  

  export default Header;