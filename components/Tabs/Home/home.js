import { StyleSheet, Text, View, Image } from 'react-native';
import map from "../Home/map"
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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

  export default function Home() {
    return (
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Map" component={map} />
          <Stack.Screen name="Map" component={map} />
        </Stack.Navigator>
    );
  }