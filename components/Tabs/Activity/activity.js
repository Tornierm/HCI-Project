import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Cafeprofile from '../../Cafe profile/cafeprofile';
import Steven1 from '../../../assets/CafèProfileImages/Steven1.jpeg';
import Steven2 from '../../../assets/CafèProfileImages/Steven2.jpeg';
import Steven3 from '../../../assets/CafèProfileImages/Steven3.jpg';
import Steven4 from '../../../assets/CafèProfileImages/Steven4.jpg';


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
  
  const image ='../../../assets/CafèProfileImages/Steven2.jpeg';

  export default function Activity() {
    return (
      <View>
        <Cafeprofile name="Steven Cafè" address="Calle de Berenguela, 19" image={image}/>
        <StatusBar style="auto" />
      </View>
    );
  }