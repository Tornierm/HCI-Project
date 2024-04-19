import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import friendList from "../Friends/friendList"
import friendProfile from "../Friends/friendProfile"

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

  
  export default function Friends() {
    return (
        <Stack.Navigator initialRouteName="Friends">
          <Stack.Screen name="FriendList" component={friendList} />
          <Stack.Screen name="FriendProfile" component={friendProfile} />
        </Stack.Navigator>
    );
  }