import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, Icon } from '@rneui/themed';
import {React} from 'react';
//import Map from './map';
import Reviews from './reviews';

//import { NavigationContainer } from '@react-navigation/native';
//import { SliderBox } from "react-native-image-slider-box";
//import Slider from 'react-slick';


const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
      padding: 10,  // Makes it easier to press the icon
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
});


  const Cafeprofile = ({name, address, image}) => {
    return (
      <View style= {styles.container}>
        <Header name={name} address={address} />
        <View style={styles.imageContainer}>
          <Image
            style={styles.stretch}
            source={{uri:image}}
          />
        </View>
        <Tabs/>
        <Button
          onPress={() => bookNow}
          title="Book Now"
          color="#000000"
        />
      </View>
    );
  };

  const Header = ({name, address}) => {
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
              name="favorite-outline"
              size={24}
              color="#ffffff"
              onPress={() => alert('Added to my favourities!')}
        />
      </View>
    )
  }
  
  const Tabs = () => {
    const Tab = createMaterialTopTabNavigator();
    return(
        <Tab.Navigator
        initialRouteName="Map"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'white' },
          tabBarIndicatorStyle: { backgroundColor: 'black' },
        }}>
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Schedule" component={Schedule} />
        <Tab.Screen name="Features" component={Features} />
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Reviews" component={Reviews} />
      </Tab.Navigator>
    );
  }
  const goBack = () => {
    //goback
  }

  const bookNow = () => {
    return <p>booked!</p>
  }

  
  //const Tab = createMaterialTopTabNavigator();
  
  // Define the components for each tab
  const Map = () => (
    <View>
      <Text>Map View</Text>
    </View>
  );
  
  const Schedule = () => (
    <View style={styles.workInProgress}>
      <Text h2>Work in progress!</Text>
      <Text h2>This page is under construction...</Text>
    </View>
  );
  
  const Features = () => (
    <View style={styles.workInProgress}>
      <Text h2>Work in progress!</Text>
      <Text h2>This page is under construction...</Text>
    </View>
  );
  
  const Menu = () => (
    <View style={styles.workInProgress}>
      <Text h2>Work in progress!</Text>
      <Text h2>This page is under construction...</Text>
    </View>
  );
  
  /*const Reviews = () => (
    <View>
      <Text>Reviews</Text>
    </View>
  );  */

  export default Cafeprofile;

  