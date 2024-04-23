import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './home';
import { Button, Chip } from '@rneui/base';
import { useState } from 'react';
import { Features, IFilterConfig, Rating, Restrictions } from '../../types';
import { Slider, Icon } from '@rneui/themed';


type Props = NativeStackScreenProps<RootStackParamList, "Filters">
type SlidersComponentProps = {};

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
    verticalChip:{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "baseline"
    },
  title:{
      flex: 1,
      margin: 5,
      fontWeight: "bold",
      justifyContent: "flex-start"
    },
    subHeader: {
      backgroundColor : "#2089dc",
      color : "white",
      textAlign : "center",
      paddingVertical : 5,
      marginBottom : 10
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

      const toggleFeatures = (feature) => {
        const tmpFeatures = [...tmpFilterConfig.features];
        //if the restriction we want to toggle is not in the restriction -> add it
        if(!tmpFilterConfig.features.includes(Features[feature])){
          tmpFeatures.push(Features[feature])
        } 
        //otherwise -> remove it
        else {
          const index = tmpFeatures.indexOf(Features[feature]);
          if (index > -1) { 
            tmpFeatures.splice(index, 1);
          }
        }
        //update our config
        updateFilterConfig({features: tmpFeatures})

      }

      const setPrice = () => {
        
      }

      const setDistance = (distances) => {
        
        
      }

      const setReviews = (ratings) => {
        const tmpRating = [...tmpFilterConfig.rating];
        //const selectedRating = parseInt(ratings, 5) as Rating;
        //if the restriction we want to toggle is not in the restriction -> add it
        if(!tmpFilterConfig.rating.includes(Rating[ratings])){
          tmpRating.push(Rating[ratings])
        } 
        //otherwise -> remove it
        else {
          const index = tmpRating.indexOf(Rating[ratings]);
          if (index > -1) { 
            tmpRating.splice(index, 1);
          }
        }
        //update our config
        updateFilterConfig({rating: tmpRating})
        
      }
          
      return <View style={styles.container}>

        {/* Restriction Chips*/}
        <View style={styles.chipContainer}>
        <Text style={styles.title}>Restrictions</Text>
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

        {/* Feature Chips*/}
        <View style={styles.chipContainer}>
        <Text style={styles.title}>Feature</Text>
          {
            (Object.keys(Features) as Array<keyof typeof Features>).map((feature) => {
              return <Chip
                  type={tmpFilterConfig.features.includes(Features[feature]) ? 'outline' : "solid"}
                  onPress={() => toggleFeatures(feature)}
                >
                  {feature}
                </Chip>
             })
          }
        </View>

        {/* This is for the Price Slider*/}

        {/* This is for the Distance Slider
        <Text style={styles.subHeader}>Distance Slider</Text>

    <View style={[styles.contentView]}>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={10}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 5, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color={color()}
            />
          ),
        }}
      />
      <Text style={{ paddingTop: 20 }}>Value: {value}</Text>*}
    </View>

        {/* This is for the Reviews*/}
        
        <View style={styles.verticalChip}>
        <Text style={styles.title}>Reviews</Text>
        
          {
            (Object.keys(Rating) as Array<keyof typeof Rating>).map((ratings) => {
              return <Chip
                  type={tmpFilterConfig.rating.includes(Rating[ratings]) ? 'outline' : "solid"}
                  onPress={() => setReviews(ratings)}
                >
                  {ratings}
                </Chip>
             })
          }
        </View>

        
          <Button
            onPress={() => applyFilters()}
          >
            Submit
          </Button>
      </View>
  }

  export default Filters;