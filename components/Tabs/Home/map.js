import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



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
  
  export default function Home() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../assets/S.png')}/>
        <Text>Welcome to Sitdown you fuckers.</Text>
        <StatusBar style="auto" />
      </View>
    );
  }