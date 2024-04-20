import { StyleSheet, Text, View, Image } from 'react-native';
import map from "../Home/map"
import filters from "../Home/filters"
import list from "../Home/list"

import { Button, Icon } from '@rneui/themed';
import React from 'react';

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

  export default function Home({ navigation }) {

    return (
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
    );
  }