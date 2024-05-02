import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import friendList from "./friendList"
import friendProfile from "./friendProfile"
import { useState } from 'react';
import { getFriends } from '../../Api';
import { IUser } from '../../types';
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
  });

  const Stack = createNativeStackNavigator();

  export type FriendsParamList = {
    FriendList: {
      friends: IUser[],
    };
    FriendProfile: {
      friend: IUser;
    };
  };
  
  export default function Friends() {
    const [friends, setFriends] = useState(getFriends())

    return (
        <Stack.Navigator initialRouteName="Friends">
          <Stack.Screen 
            name="FriendList" 
            component={friendList} 
            initialParams={{ 
              friends: friends,
            }}
          />
          <Stack.Screen name="FriendProfile" component={friendProfile} />
        </Stack.Navigator>
    );
  }