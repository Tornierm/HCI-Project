import { StyleSheet, Text, View, Image } from 'react-native';

import { Button, Icon } from '@rneui/themed';
import {React, useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { SliderBox } from "react-native-image-slider-box";

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const styles = StyleSheet.create({
    searchContainer: {
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

  const Stack = createNativeStackNavigator();
  
  //Cafe name, Picture, Tags with essentials, Reviews, Hours, Price, 
  //Breakfast, Lunch, Dinner, Extras (lightning, noise, etc), Map Section of where the cafe is, 
  //Button: Book Now
  //1- header -> back and title
  //2- picture
  //3- cafe info (tags, hours, price, food), using popups as social interaction prototype
  //4- reviews
  //5- map & location
  //6- book button (maybe put it above)
  const Cafeprofile = ({name, ...images}) => {
    const [activeTab, setActiveTab] = useState('Map');

    const renderTabContent = () => {
      switch (activeTab) {
        case 'Map':
          return <Map />;
        case 'Schedule':
          return <Schedule />;
        case 'Features':
          return <Features />;
        case 'Menu':
          return <Menu />;
        case 'Reviews':
          return <Reviews />;
        default:
          return null;
      }
    };

    return (
      <div>
        <Header name={name} />
        <Tabs/>
        <Button
          onPress={() => bookNow}
          title="Book Now"
          color="#000000"
          accessibilityLabel="Go to book now section"
        />
      </div>
    );
  };

  const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return(
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Schedule" component={Schedule} />
          <Tab.Screen name="Features" component={Features} />
          <Tab.Screen name="Menu" component={Menu} />
          <Tab.Screen name="Reviews" component={Reviews} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  const Header = ({name}) => {
    return(
      <div>
      <Button
          icon={
            <Icon
              name="chevron-left"
              size={15}
              color="white"
            />
          }
          title="Go back"//implement go back
        />
        <h2>{name}</h2>
        <hline></hline>
      </div>
    )
  }

  const goBack = () => {
    //goback
  }

  const bookNow = () => {
    return <p>booked!</p>
  }

  const Map = () => {
  return <h1>Map</h1>;
    //tab
    //reuse milan map
    //show myposition compared to cafe position
  }

  const Schedule = () => {
    //tab
    return (
      <div>
        <h1>Schedule</h1>
      </div>
    );
  }

  const Features = () => {
    //tab
  
    return (
      <div>
        <h1>Features</h1>
      </div>
      );
  }

  const Menu = () => {
    //tab
    return <h1>Menu</h1>;
  }
  const Reviews = () => {
    //tab
    //stars and comments
    //leave a review
    return <h1>Reviews</h1>;
  }

  export default Cafeprofile;

    /*return (
      <Stack.Navigator  initialRouteName="Home">
          <Stack.Screen 
            name="Map" 
            component={map} 
            
            options={{
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Filters')}
                  type="outline"  
                  radius={"md"}
                >
                    Filter
                    <Icon 
                      name="filter-alt"
                      color="blue"
                    />
                </Button>
              ),
              headerLeft: () => (
                <Button
                  onPress={() => navigation.navigate('List')}
                  type="outline"
                  radius={"md"}
                >
                    Search
                    <Icon 
                      name="search"
                      color="blue"
                    />
                </Button>
              ),
            }}
          />
          <Stack.Screen name="Filters" component={filters} />
          <Stack.Screen name="List" component={list} />
        </Stack.Navigator>
    );*/
  