import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import Cafeprofile from '../../Cafe profile/cafeprofile';


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
  
  const image ='../../../assets/CafèProfileImages/Steven2.jpeg';

  export default function Activity() {
    return (
      <View style={styles.container}>
        <Cafeprofile name="Steven Cafè" address="Calle de Berenguela, 19" image={image}/>
        <StatusBar style="auto" />
      </View>
    );
  }