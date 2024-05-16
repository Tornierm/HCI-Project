import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { RootStackParamList } from './home';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Cafeprofile from '../../Cafe profile/cafeprofile';
import React from 'react';
import { openBooking } from './helpers';

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
        <View style = {{margin: 10}}>
            <Button
              onPress={() => openBooking(route.params.cafe, navigation)}
              title="Book Now"
              color="#3895d3"
            />
            </View>
      </View>
    );
  }
export default CafeProfile;