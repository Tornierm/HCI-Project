import { StyleSheet, Text, View, Image } from 'react-native';
import Map from "./map"
import Filters from "./filters"
import List from "./list"
import cafeProfile from "./cafeProfile"

import { Button, Icon } from '@rneui/themed';
import React, { useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ICafe, IFilterConfig, Restrictions } from '../../types';


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

  const defaultFilter: IFilterConfig = {
    restrictions: [],
    features: [],
    rating: [],
    distances: [],
    prices: [],
  }

  export type RootStackParamList = {
    Home: undefined;
    Map: undefined;
    List: undefined;
    Filters: {
      filterConfig: IFilterConfig;
      setFilter: React.Dispatch<React.SetStateAction<IFilterConfig>>;
    };
    CafeProfile: {
      cafe: ICafe;
    };
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  export default function Home({ navigation }) {

    const [filterConfig, setFilterConfig] = useState(defaultFilter)

    return (
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Map" 
            component={Map} 
            
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
          <Stack.Screen 
            name="Filters"
            component={Filters} 
            initialParams={{ 
              filterConfig: filterConfig,
              setFilter: setFilterConfig
            }}
           />
          <Stack.Screen 
            name="CafeProfile"
            component={cafeProfile} 
           />
          <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
    );
  }