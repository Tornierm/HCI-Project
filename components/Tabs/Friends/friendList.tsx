import { StyleSheet, View, Text} from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { FriendsParamList } from './friends';
import { useState } from 'react';
import { Button, Icon, SearchBar } from '@rneui/base';
import { IUser } from '../../types';
import React from 'react';
import { ListItem } from '@rneui/themed';
import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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

  const Stack = createNativeStackNavigator();

  type Props = NativeStackScreenProps<FriendsParamList, "FriendList">
  
  export default function FriendList({ route, navigation }) {

    const [friends, setFriends] = useState<IUser[]>(route.params.friends)
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
      setSearch(search);
      searchFriends(search)
    };

    const searchFriends = (search) =>{
      if(search == ""){
        setFriends(route.params.friends)
      } else {
        const tmp = friends.filter(obj => obj.name.includes(search))
        setFriends(tmp)
      }
    } 

    const openFriendsProfile = (friend: IUser) => {
      navigation.navigate( 
        "FriendProfile",
        { friend: friend }
      )
    }

    return (
        <View>
          <SearchBar
            placeholder="Search"
            onChangeText={updateSearch}
            value={search}
            platform='ios'
            searchIcon={<Icon name='search'/>}
          />
              {friends.map((friend, i) => {
                return <ListItem
                  key={i}
                  onPress={() => openFriendsProfile(friend)}
                  style={styles.ListItem}
                >
                  <ListItem.Content>
                    <ListItem.Title>{friend.name}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              })}
        </View>
    );
  }