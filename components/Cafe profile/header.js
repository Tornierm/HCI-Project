import { StyleSheet, Text, View} from 'react-native';
import { Button, Icon } from '@rneui/themed';
import React, {useState} from 'react';

const styles = StyleSheet.create({
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
  iconButton: {
      padding: 10,
  }
});


const Header = ({name, address}) => {
    const [isActive, setIsActive] = useState(false);
    const toggleIcon = () => {
        if(!isActive){
          alert('Added to Wishlist!')
        }
        setIsActive(isActive => isActive = !isActive);
    }
    return(
      <View style={styles.headerContainer}>
      
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