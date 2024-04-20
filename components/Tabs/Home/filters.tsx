import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './home';
import { IFilterConfig, Restrictions } from '../../types';
import { Button } from '@rneui/base';
import { useState } from 'react';


type Props = NativeStackScreenProps<RootStackParamList, "Filters">

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
  
  const Filters: React.FC<Props> = ({ route, navigation }) => {
      
      const { filterConfig, setFilter } = route.params;
      const [tmpFilterConfig, setTmpFilterConfig] = useState(filterConfig);

      const applyFilters = () => {
        setFilter(filterConfig)
        navigation.goBack()
      }

      return <View style={styles.container}>
        <Text>{JSON.stringify(tmpFilterConfig)}</Text>
          <Button
            onPress={() => applyFilters()}
          >
            Submit
          </Button>
      </View>
  }

  export default Filters;