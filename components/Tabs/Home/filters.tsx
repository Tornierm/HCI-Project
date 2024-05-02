import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './home';
import { Button, Chip } from '@rneui/base';
import { useState } from 'react';
import { Features, IFilterConfig, Rating, Restrictions, Price, Distance } from '../../types';
import Slider from '@react-native-community/slider';
import React from 'react';
//import { ScrollView } from 'react-native';


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
    verticalChip:{
      flex: 1,
      flexDirection: "row",
      alignItems: "center", 
      justifyContent:"space-between"
    },
  title:{
      margin: 10,
      fontWeight: "bold",
      justifyContent: "flex-start"
    },
  });
  
  const Filters: React.FC<Props> = ({ route, navigation }) => {
      
      const [tmpFilterConfig, setTmpFilterConfig] = useState<IFilterConfig>(route.params.filterConfig);
      const [sliderState, setSliderState] = React.useState<number>(1);
      const [distanceSliderState, setDistanceSliderState] = useState<number>(0);

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

      const setPrice = (value: number) => {
        let newPrice: Price;

        // Determine the Price based on the slider value
        if (value < 30) {
          newPrice = Price.cheap;
        } else if (value < 60) {
          newPrice = Price.medium;
        } else {
          newPrice = Price.expensive;
        }
        const tmpPrices = [...tmpFilterConfig.prices];

        // Update the prices array with the new price
        tmpPrices.push(newPrice);

        // update our config
        //updateFilterConfig({prices: tmpPrices}); -> it prints everything
        updateFilterConfig({prices:[newPrice]}); //replace prices with a new array that has the latest selected
        //console.log("PRICE TMP: ", tmpPrices)
      }

      const setDistance = (value: number) => {
        let newDistance: Distance;

        // Determine the km category based on the slider value
        if (value < 4) {
          newDistance = Distance.near;
        } else if (value < 8) {
          newDistance = Distance.normal;
        } else {
          newDistance = Distance.far;
        }
        const tmpDistances = [...tmpFilterConfig.distances];

        // Update the distances array with the new distance
        tmpDistances.push(newDistance);

        // update our config
        updateFilterConfig({distances:[newDistance]}); //replace prices with a new array that has the latest selected
        //console.log("Distance TMP: ", tmpDistances)
        
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
        <Text style={styles.title}>Price (€)</Text>
        <Slider
        style={{width: 300 , height: 40}}
        value={sliderState}
        onValueChange={(value) => {
          setSliderState(value);
          setPrice(value);
        }}
        minimumValue={0}
        maximumValue={80}
        minimumTrackTintColor="#blue"
        maximumTrackTintColor="#cbd5e1"
        />
        <Text style={{fontSize: 12, fontWeight: "bold"}}>{sliderState.toFixed().slice(0,2)}</Text>

        {/* This is for the Distance Slider*/}
        <Text style={styles.title}>Distance (0 km - 10 km)</Text>
        <Slider
        style={{width: 300 , height: 40}}
        value={distanceSliderState}
        onValueChange={(value) => {
          setDistanceSliderState(value);
          setDistance(value);
        }}
        //onValueChange={(value) => setDistanceSliderState(value)}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#blue"
        maximumTrackTintColor="#cbd5e1"
        />
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{Math.round(distanceSliderState)} km</Text>

   

        {/* This is for the Reviews*/}
        <Text style={styles.title}>Reviews</Text>
          <View style={styles.verticalChip}>
          
            {
              (Object.keys(Rating) as Array<keyof typeof Rating>).map((ratings) => {
                return <Chip
                    type={tmpFilterConfig.rating.includes(Rating[ratings]) ? 'outline' : "solid"}
                    onPress={() => setReviews(ratings)}
                    style={{ marginVertical: 5 }}
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