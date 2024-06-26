import { StyleSheet, Text, View, Image } from 'react-native';
import { RootStackParamList } from './home';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Cafeprofile from '../../Cafe profile/cafeprofile';
import React from 'react';

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
        <Cafeprofile cafe={route.params.cafe} goBack={() => navigation.goBack()}/>
      </View>
    );
  }
export default CafeProfile;