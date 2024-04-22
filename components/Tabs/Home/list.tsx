import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RootStackParamList } from './home';
import { useState } from 'react';
import { ICafe } from '../../types';
import { Button } from '@rneui/base';
import { openCafeProfile } from './helpers';

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

  type Props = NativeStackScreenProps<RootStackParamList, "List">

  const List: React.FC<Props> = ({ route, navigation }) => {

    const [cafes, setCafes] = useState<ICafe[]>(route.params.cafes)

    return (
      <View style={styles.container}>
        {/* The searchbar goes here */}

        
        {cafes.map((cafe) => {
          //The items for all the cafes in the area go here
          return <View>
            <Button
              onPress={() => openCafeProfile(cafe, navigation)}
            >{cafe.name}</Button>
          </View>
        })}
      </View>
    );
  }

  export default List;