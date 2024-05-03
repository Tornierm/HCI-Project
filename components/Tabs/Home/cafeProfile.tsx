import { StyleSheet, Text, View, Image } from 'react-native';
import { RootStackParamList } from './home';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
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

  type Props = NativeStackScreenProps<RootStackParamList, "CafeProfile">
  
const CafeProfile: React.FC<Props> = ({ route, navigation }) => {
  console.log(route.params.cafe);
    return (
      <View style={styles.container}>
        <Cafeprofile name={route.params.cafe.name} address={route.params.cafe.address} image={route.params.cafe.image}/>
      </View>
    );
  }
export default CafeProfile;