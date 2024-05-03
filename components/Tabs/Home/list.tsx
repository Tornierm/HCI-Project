import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RootStackParamList } from './home';
import { useState } from 'react';
import { ICafe } from '../../types';
import { Button, Icon, ListItem, SearchBar } from '@rneui/base';
import { openCafeProfile } from './helpers';
import React from 'react';

const styles = StyleSheet.create({
    container: {
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
    ListItem: {
      borderWidth: 2,
      borderColor: '#20232a',
      borderRadius: 6,
      marginTop: 8,
      marginLeft: 8,
      marginRight: 8,
    }
  });

  type Props = NativeStackScreenProps<RootStackParamList, "CafeList">

  const CafeList: React.FC<Props> = ({ route, navigation }) => {

    const [cafes, setCafes] = useState<ICafe[]>(route.params.cafes)
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
      setSearch(search);
      searchCafes(search)
    };

    const searchCafes = (search) =>{
      if(search == ""){
        setCafes(route.params.cafes)
      } else {
        const tmp = cafes.filter(obj => obj.name.includes(search))
        setCafes(tmp)
      }
    } 

    return (
      <ScrollView>
        {/* The searchbar goes here */}
        <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          value={search}
          platform='ios'
          searchIcon={<Icon name='search'/>}
        />
        
        {cafes.map((cafe, i) => {
          //The items for all the cafes in the area go here
          return <ListItem
                  key={i}
                  onPress={() => openCafeProfile(cafe, navigation)}
                  style={styles.ListItem}
                >
                  <ListItem.Content>
                    <ListItem.Title>{cafe.name}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
          })}
      </ScrollView>
    );
  }

  export default CafeList;