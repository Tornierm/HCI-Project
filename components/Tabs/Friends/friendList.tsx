import { StyleSheet, View, Text} from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { FriendsParamList } from './friends';
import { useState } from 'react';
import { Button } from '@rneui/base';
import { IUser } from '../../types';

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

  type Props = NativeStackScreenProps<FriendsParamList, "FriendList">
  
  export default function FriendList({ route, navigation }) {

    const [friends, setFriends] = useState<IUser[]>(route.params.friends)

    const openFriendsProfile = (friend: IUser) => {
      navigation.navigate( 
        "FriendProfile",
        { friend: friend }
      )
    }

    return (
        <View>
            <Text>
              {JSON.stringify(friends)}
              {friends.map((friend) => {
                return <Button
                  onPress={() => openFriendsProfile(friend)}
                  >{friend.name}
                </Button>
              })}
            </Text>
        </View>
    );
  }