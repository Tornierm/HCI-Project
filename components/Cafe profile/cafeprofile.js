import { StyleSheet, View,Image, ScrollView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, Icon } from '@rneui/themed';
import React from 'react';
import Map from './map';
import Reviews from './reviews';
import Header from './header';
import Features from './features';
import Schedule from './schedule';
import Menu from './menu';

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
    height: 100,
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
  buttonContainer: {
    width: '100%', // Full width
    padding: 10, // Padding inside the button container
    //position:'absolute'
  },
});


  const Cafeprofile = ({name, address, image}) => {
    
    return (
      <ScrollView style= {styles.container}>
        <Header name={name} address={address} />
        <View style={styles.imageContainer}>
          <Image
            style={styles.stretch}
            source={{uri:image}}
          />
        </View>
        {/* <Tabs/> */}
        <Map/>
        <Schedule></Schedule>
        <Features></Features>
        <Menu></Menu>
        <Reviews totalReviews={'4.0'}></Reviews>
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

  const Tabs = () => {
    const Tab = createMaterialTopTabNavigator();
    return(
        <Tab.Navigator
        initialRouteName="Map"
        screenOptions={{
          tabBarActiveTintColor: '#000000',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'white' },
          tabBarIndicatorStyle: { backgroundColor: 'black' },
        }}>
        <Tab.Screen name="Map" component={Map} 
        options={{
          tabBarIcon: ({ color, size }) => (
          <Icon name="location-pin" color={color} size={size} />
          )
        }}/>
        <Tab.Screen name="Schedule" component={Schedule} 
        options={{
          tabBarIcon: ({ color, size }) => (
          <Icon name="schedule" color={color} size={size} />
          )
        }}/>
        <Tab.Screen name="Features" component={Features} 
        options={{
          tabBarIcon: ({ color, size }) => (
          <Icon name="settings" color={color} size={size} />
          )
        }}/>
        <Tab.Screen name="Menu" component={Menu} 
        options={{
          tabBarIcon: ({ color, size }) => (
          <Icon name="fastfood" color={color} size={size} />
          )
        }}/>
        <Tab.Screen name="Reviews" component={Reviews} initialParams={{ totalReviews: '4.0' }}
        options={{
          tabBarIcon: ({ color, size }) => (
          <Icon name="star" color={color} size={size} />
          )
        }}/>
      </Tab.Navigator>
    );
  }

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

  