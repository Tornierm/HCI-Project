import { Button, Icon } from '@rneui/themed';
import {React} from 'react';
import { StyleSheet, Text, View} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:"100%",
    marginTop: 20
    //justifyContent: 'space-between'
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
  headerContainer: {
      flexDirection: 'row',   // Aligns children in a row
      alignItems: 'center',   // Centers children vertically in the container
      //justifyContent: 'space-between', // Distributes children evenly with space between them
      padding: 10,            // Adds some padding around the container
      backgroundColor: '#fff', // Sets a background color
      height: 60,             // Sets a fixed height for the header
  },
  chipsContainer: {
    flexDirection: 'row',   // Aligns children in a row
    alignItems: 'center',   // Centers children vertically in the container
    justifyContent: 'space-between', // Distributes children evenly with space between them
    padding: 10,            // Adds some padding around the container
    backgroundColor: '#fff', // Sets a background color
    height: 20,             // Sets a fixed height for the header
},
  iconButton: {
      padding: 10,
  }, 
  styleText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:'bold',
    fontSize: 24,
    marginLeft: 5
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'gray',
    //width: '100%',
    //marginVertical: 10
  },
});

const mapImage = '../../../assets/CafèProfileImages/map.png';

const Menu = () => {
    return(
        <View style={styles.container} > 
            <View style={styles.chipsContainer}>
                <View style={styles.headerContainer}>
                    <Icon style={styles.iconButton}
                        name="restaurant"
                        size={24}
                        color="#000"
                    />
                    <Text>Vegan</Text>
                </View>
                <View  style={styles.headerContainer}>
                    <Icon style={styles.iconButton}
                        name="download"
                        size={24}
                        color="#000"
                        onPress={() => alert('Downloading...')}
                    />
                    <Text>Download Menu</Text>
                </View>
            </View>
            <View style={{marginTop:'10'}}>
                <Text style={styles.styleText}>Starters</Text>
                <Dish name='Golden Beet Tartare' price='6€'/>
                <Dish name='Crispy Cauliflower Bites' price='5€'/>
                <Dish name='Wild Mushroom Crostini' price='10€'/>
                <Dish name='Spicy Edamame' price='15€'/>
            </View>
            <View>
                <Text style={styles.styleText}>Main Course</Text>
                <Dish name='Butternut Squash Risotto' price='3€'/>
                <Dish name='Portobello Mushroom Steak' price='4€'/>
                <Dish name='Chickpea and Spinach Stuffed Sweet Potatoes' price='11€'/>
            </View>
        </View>
    );
};

const Dish = ({name, price}) => {
    return(
        <View style={styles.chipsContainer}>
            <Text>{name}</Text>
            <View style={styles.horizontalLine}/>
            <Text>{price}</Text>
        </View>
    );
}

export default Menu;