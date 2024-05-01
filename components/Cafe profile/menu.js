import { Button, Icon } from '@rneui/themed';
import {React} from 'react';
import { StyleSheet, Text, View,Image, Dimensions, ScrollView } from 'react-native';


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
    width: '50%', // Full width
    padding: 10, // Padding inside the button container
    //position:'absolute'
  },
});

const mapImage = '../../../assets/CafèProfileImages/map.png';

const Menu = () => {
    return(
        <View style={{backgroundColor:'#ffffff'}} > 
            <View>
                <View>
                    <Icon style={styles.iconButton}
                        name="restaurant"
                        size={24}
                        color="#000"
                    />
                    <Text>Vegan</Text>
                </View>
                <View>
                    <Icon style={styles.iconButton}
                        name="download"
                        size={24}
                        color="#000"
                        onPress={() => alert('Downloading...')}
                    />
                    <Text>Download Menu</Text>
                </View>
            </View>
            <View>
                <Text>Starters</Text>
                <Dish name='Golden Beet Tartare' price='6€'/>
                <Dish name='Crispy Cauliflower Bites' price='5€'/>
                <Dish name='Wild Mushroom Crostini' price='10€'/>
                <Dish name='Spicy Edamame' price='15€'/>
            </View>
            <View>
                <Text>Main Course</Text>
                <Dish name='Butternut Squash Risotto' price='3€'/>
                <Dish name='Portobello Mushroom Steak' price='4€'/>
                <Dish name='Chickpea and Spinach Stuffed Sweet Potatoes' price='11€'/>
            </View>
        </View>
    );
};

const Dish = ({name, price}) => {
    return(
        <View>
            <Text>{name}</Text>
            <Text>{price}</Text>
        </View>
    );
}

export default Menu;