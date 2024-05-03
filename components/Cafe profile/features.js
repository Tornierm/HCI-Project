import { Button, Icon } from '@rneui/themed';
import {React} from 'react';
import { StyleSheet, Text, View} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width:"100%",
        margin: 20
        //justifyContent: 'space-between'
        /*alignItems: 'center',
        justifyContent: 'center',*/
      },
  iconButton: {
      padding: 10,
  }, 
  centerText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
    marginVertical: 10
  },
  headerContainer: {
    flexDirection: 'row',   // Aligns children in a row
    alignItems: 'center',   // Centers children vertically in the container
    //justifyContent: 'center', // Distributes children evenly with space between them
    //padding: 10,            // Adds some padding around the container
    backgroundColor: '#fff', // Sets a background color
    height: 20, 
    margin: 10,         // Sets a fixed height for the header
},
});

const mapImage = '../../../assets/CafèProfileImages/map.png';

const Features = () => {
  return(
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Icon style={styles.iconButton}
              name="laptop"
              size={24}
              color="#000"
        />
            <Text style={styles.centerText}>Laptops allowed from Monday to Friday, not allowed on weekends</Text>
        </View>
        
        <View style={styles.headerContainer}>
        <Icon style={styles.iconButton}
              name="wifi"
              size={24}
              color="#000"
        />
            <Text style={styles.centerText}>Strong free wifi</Text>
        </View>
            
        <View style={styles.headerContainer}>
        <Icon style={styles.iconButton}
              name="bolt"
              size={24}
              color="#000"
        />
            <Text style={styles.centerText}>One socket per table</Text>
        </View>
    </View>

  )
};

export default Features;