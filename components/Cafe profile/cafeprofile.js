import { StyleSheet, Text, View, Image } from 'react-native';

import { Button, Icon } from '@rneui/themed';
import {React, useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { SliderBox } from "react-native-image-slider-box";

import { createNativeStackNavigator } from '@react-navigation/native-stack';


/*const styles = StyleSheet.create({
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
  });*/

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
        <Tab.Navigator
        initialRouteName = "Map"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: 'powderblue' },
          }}
        >
          <Tab.Screen name="Map" component={Map}/>
          <Tab.Screen name="Schedule" component={Schedule}/>
          <Tab.Screen name="Features" component={Features} />
          <Tab.Screen name="Menu" component={Menu} />
          <Tab.Screen name="Reviews" component={Reviews} />
        </Tab.Navigator>
    );
  }

  const Header = ({name}) => {
    return(
      <div className="container d-inline-flex">
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
        <Icon
              name="favorite-outline"
              size={15}
              color="#000000"
        />
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
  return (
    <View>
      <Text>Map</Text>
    </View>
  );
    //tab
    //reuse milan map
    //show myposition compared to cafe position
  }

  const Schedule = () => {
    //not implementing for the tasks  
    return (
      <div>
        <h1>Work in progress!</h1>
        <h3>This page is under construction.</h3>
      </div>
    );
  }

  const Features = () => {
    //not implementing for the tasks  
    return (
      <div>
        <h1>Work in progress!</h1>
        <h3>This page is under construction.</h3>
      </div>
      );
  }

  const Menu = () => {
    //not implementing for the tasks  
    return (
    <div>
      <h1>Work in progress!</h1>
      <h3>This page is under construction.</h3>
    </div>);
  }

  const Reviews = () => {
    //tab
    //stars and comments
    //leave a review
    return (
      <View>
        <Text>Reviews</Text>
      </View>
    );
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
  