import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './home';
import { Button, Chip } from '@rneui/base';
import { useState } from 'react';
import { IFilterConfig, Restrictions } from '../../types';


type Props = NativeStackScreenProps<RootStackParamList, "Filters">

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    chipContainer: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  const Filters: React.FC<Props> = ({ route, navigation }) => {
      
      const [tmpFilterConfig, setTmpFilterConfig] = useState<IFilterConfig>(route.params.filterConfig);

      const applyFilters = () => {
        route.params.setFilter(tmpFilterConfig)
        navigation.goBack()
      }

      // this function takes a partial filter config and updates the existing filter config
      function updateFilterConfig(update: Partial<IFilterConfig>) {
        setTmpFilterConfig({ ...tmpFilterConfig, ...update });
      }

      const toggleRestriction = (restriction) => {
        //create a tmp copy of the restrictions
        const tmpRestrictions = [...tmpFilterConfig.restrictions];
        //if the restriction we want to toggle is not in the restriction -> add it
        if(!tmpFilterConfig.restrictions.includes(Restrictions[restriction])){
          tmpRestrictions.push(Restrictions[restriction])
        } 
        //otherwise -> remove it
        else {
          const index = tmpRestrictions.indexOf(Restrictions[restriction]);
          if (index > -1) { 
            tmpRestrictions.splice(index, 1);
          }
        }
        //update our config
        updateFilterConfig({restrictions: tmpRestrictions})
      }

      /*
      
      To-do
      use the "toggleRestriction" function as a blueprint
      */

      const toggleFeatures = () => {

      }

      const setPrice = () => {
        
      }

      const setDistance = () => {
        
      }

      const setReviews = () => {
        
      }
      
      return <View style={styles.container}>

        {/* This is for the Restriction Chips*/}
        <View style={styles.chipContainer}>
          {
            (Object.keys(Restrictions) as Array<keyof typeof Restrictions>).map((restriction) => {
              return <Chip
                  type={tmpFilterConfig.restrictions.includes(Restrictions[restriction]) ? 'outline' : "solid"}
                  onPress={() => toggleRestriction(restriction)}
                >
                  {restriction}
                </Chip>
             })
          }
        </View>

        {/*
      
          To-do
          
          implement all the UI components 
        */}

        {/* This is for the Feature Chips*/}

        {/* This is for the Price Slider*/}

        {/* This is for the Distance Slider*/}

        {/* This is for the Reviews*/}
        
          <Button
            onPress={() => applyFilters()}
          >
            Submit
          </Button>
      </View>
  }

  export default Filters;