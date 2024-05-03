import { StyleSheet, Text, View, Image } from 'react-native';
import Map from "./map"
import Filters from "./filters"
import CafeList from "./list"
import cafeProfile from "./cafeProfile"

import React from 'react';
import { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ICafe, IFilterConfig, Restrictions } from '../../types';
import { getCaffees } from '../../Api';


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

  export type RootStackParamList = {
    Home: {
      filterConfig: IFilterConfig;
    };
    Map: {
      filterConfig: IFilterConfig;
    };
    CafeList: {
      cafes: ICafe[];
    };
    Filters: {
      filterConfig: IFilterConfig;
    };
    CafeProfile: {
      cafe: ICafe;
    };
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  export default function Home({route, navigation }) {

    const [filterConfig, setFilterConfig] = useState<IFilterConfig>(route.params.filterConfig)
    const [cafes, setCafes] = useState<ICafe[]>([])

    useEffect(() => {
      setFilterConfig(route.params.filterConfig)
      setCafes(getCaffees())
    }, [route.params])

   

    return (
      <Stack.Navigator>
          <Stack.Screen 
            name="Map" 
            component={Map} 
            initialParams={{filterConfig: filterConfig}}
            // options={{
            //   headerRight: () => (
            //     <Button
            //       onPress={() => navigation.navigate('Filters', {filterConfig: filterConfig})}
            //       type="outline"  
            //       radius={"md"}
            //     >
            //         Filter
            //         <Icon 
            //           name="filter-alt"
            //           color="blue"
            //         />
            //     </Button>
            //   ),
            //   headerLeft: () => (
            //     <Button
            //       onPress={() => openList()}
            //       type="outline"
            //       radius={"md"}
            //     >
            //         Search
            //         <Icon 
            //           name="search"
            //           color="blue"
            //         />
            //     </Button>
            //   ),
            // }}
          />
          <Stack.Screen 
            name="Filters"
            component={Filters} 
           />
          <Stack.Screen 
            name="CafeProfile"
            component={cafeProfile} 
           />
          <Stack.Screen 
            name="CafeList" 
            component={CafeList} 
          />
        </Stack.Navigator>
    );
  }
