import { StyleSheet,Text, View,Image, ScrollView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, Icon } from '@rneui/themed';
import React from 'react';
import Map from './map';
import Reviews from './reviews';
import Header from './header';
import Features from './features';
import Schedule from './schedule';
import Menu from './menu';
import MilansReviews from './milansReviews';

import Info from './info';
import { ICafe } from '../types';

const images = {
  steven: require('../../assets/CafèProfileImages/Steven1.jpeg'),
  souki: require('../../assets/CafèProfileImages/Steven2.jpeg'),
  other: require('../../assets/CafèProfileImages/Steven3.jpg'),
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    width:'100%',
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
    flexDirection: 'column',
  },
  iconButton: {
      padding: 10,
  }, 
  imageContainer: {
    width: '100%',       // Full width of the screen
    height: 250,         // Fixed height
    padding: 8,
    overflow: 'hidden',  // Hide overflow
  },
  stretch: {
    width: '100%',       // Full width of the container
    height: '100%',      // Full height of the container
    resizeMode: 'cover', // Cover to maintain aspect ratio
    borderRadius: 10,    // Rounded corners
  },
  buttonContainer: {
    width: '100%', // Full width
    padding: 10, // Padding inside the button container
    //position:'absolute'
  },
  h1:{
    width: '100%',
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  }
});

const determineImage = (image) => {
  if(image == "steven"){
    return images.steven
  } else if(image == "souki"){
    return images.souki
  } else {
    return images.other
  }
}

interface IOwnProps{
  cafe: ICafe
}

  const Cafeprofile = (props: IOwnProps) => {

    return (
      <ScrollView style= {styles.container}>
        <Header name={props.cafe.name} address={props.cafe.address} />
        <View style={styles.imageContainer}>
          <Image
            source={determineImage(props.cafe.image)}
            style={styles.stretch}
          />
        </View>
        <Text style={styles.h1}>Info</Text>
        <Info cafe={props.cafe}/>
        <Text style={styles.h1}>Reviews</Text>
        <MilansReviews reviews={props.cafe.reviews}></MilansReviews>
        {/* <Tabs/> */}
        {/* <Reviews reviews={props.cafe.reviews}></Reviews> */}
        <Text style={styles.h1}>Schedule</Text>
        <Schedule></Schedule>
        <Text style={styles.h1}>Directions</Text>
        <Map/>
        {/* <Features></Features>
        <Menu></Menu> */}
      <View style={styles.buttonContainer}>
          <Button
            onPress={() => alert('Booked!')}
            title="Book Now"
            color="#333"
          />
        </View>
      </ScrollView>
    );
  };

  /*const Header = ({name, address}) => {
    const [isActive, setIsActive] = useState(false);
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
              name={isActive ? 'favourite' : "favorite-outline"}
              size={24}
              color="#ffffff"
              onPress={setIsActive(!isActive)}
        />
      </View>
    )
  }*/

  // const Tabs = () => {
  //   const Tab = createMaterialTopTabNavigator();
  //   return(
  //       <Tab.Navigator
  //       initialRouteName="Map"
  //       screenOptions={{
  //         tabBarActiveTintColor: '#000000',
  //         tabBarLabelStyle: { fontSize: 12 },
  //         tabBarStyle: { backgroundColor: 'white' },
  //         tabBarIndicatorStyle: { backgroundColor: 'black' },
  //       }}>
  //       <Tab.Screen name="Map" component={Map} 
  //       options={{
  //         tabBarIcon: ({ color, size }) => (
  //         <Icon name="location-pin" color={color} size={size} />
  //         )
  //       }}/>
  //       <Tab.Screen name="Schedule" component={Schedule} 
  //       options={{
  //         tabBarIcon: ({ color, size }) => (
  //         <Icon name="schedule" color={color} size={size} />
  //         )
  //       }}/>
  //       <Tab.Screen name="Features" component={Features} 
  //       options={{
  //         tabBarIcon: ({ color, size }) => (
  //         <Icon name="settings" color={color} size={size} />
  //         )
  //       }}/>
  //       <Tab.Screen name="Menu" component={Menu} 
  //       options={{
  //         tabBarIcon: ({ color, size }) => (
  //         <Icon name="fastfood" color={color} size={size} />
  //         )
  //       }}/>
  //       <Tab.Screen name="Reviews" component={Reviews} initialParams={{ totalReviews: '4.0' }}
  //       options={{
  //         tabBarIcon: ({ color, size }) => (
  //         <Icon name="star" color={color} size={size} />
  //         )
  //       }}/>
  //     </Tab.Navigator>
  //   );
  // }

  const bookNow = () => {
    return <p>booked!</p>
  }

  
  //const Tab = createMaterialTopTabNavigator();
  
  // Define the components for each tab
  
  
  /*const Schedule = () => (
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
  );*/
  
  /*const Reviews = () => (
    <View>
      <Text>Reviews</Text>
    </View>
  );  */

  export default Cafeprofile;

  