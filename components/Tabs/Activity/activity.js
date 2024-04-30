import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Cafeprofile from '../../Cafe profile/cafeprofile';


/*const styles = StyleSheet.create({
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
  });*/
  
  export default function Activity() {
    return (
      <View>
        <Cafeprofile name="steven"/>
        <StatusBar style="auto" />
      </View>
    );
  }