import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { FriendsParamList } from './friends';
import { IUser } from '../../types';
import { useState } from 'react';

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

  type Props = NativeStackScreenProps<FriendsParamList, "FriendProfile">
  
  export default function FriendProfile({ route, navigation }) {
    const [friend, setFriend] = useState<IUser>(route.params.friend)
    return (
        <View>
            <Text>
              {JSON.stringify(friend)}
            </Text>
        </View>
    );
  }