import { StyleSheet, Text, View, Image } from 'react-native';
import { RootStackParamList } from './home';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

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

    return (
      <View style={styles.container}>
        <Text>CafeProfil</Text>
        <Text>{JSON.stringify(route.params.cafe)}</Text>
      </View>
    );
  }
export default CafeProfile;