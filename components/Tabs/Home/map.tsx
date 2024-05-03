import { Button, Icon } from '@rneui/base';
import { useEffect, useState } from 'react';
import { ICafe, IFilterConfig } from '../../types';
import { enumToNumber, openCafeProfile, priceIsSmaller } from './helpers';

import { getCaffees } from '../../Api';

import { StyleSheet, Text, View, Image, ScrollView, Modal } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './home';
import { TouchableOpacity } from 'react-native';

import React from 'react';
import { useNavigationContainerRef } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapContainer: {
      flex: 1, 
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 66,
      height: 58,
    },
    map: {
      width: 1000,
      height: 1000,      
    },
    iconContainer: {
      position: 'absolute',
      width:1000,
      height:1000,
      top:0,
      left:0,
      display: "flex",
      flexDirection: 'row',
      zIndex: 2,
    },
    icon: {
      position: 'absolute',
    },
    overlay:{
      flex:1,
      justifyContent:"center",
      alignItems: "center",
      ...StyleSheet.absoluteFillObject, // Takes the entire space of its container
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
    },
    label: {
      backgroundColor: "black",
      color: "white",
    },
    header: {
      width: "100%",
      padding: 4,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    popup: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
    },
     modalContent: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 80,
      marginLeft: 40,
      marginTop: 140,
      borderRadius: 4,
      width: '80%',
      alignItems: 'center',
      height: '40%',
      shadowOpacity: 0.25,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20, 
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    buttons:{
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop:10,
    },
    blueButton: {
      backgroundColor: '#3895d3',
      fontWeight: 'bold',
      marginLeft: 40,
      padding:10,
      borderRadius: 5,
    },
    grayButton: {
      backgroundColor: 'gray',
      fontWeight: 'bold',
      marginRight: 5,
      padding:10,
      borderRadius: 5,
    },
    featureContainer: {
      marginBottom: 10,
    },
    featureHeaderText: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'white',
    },
    featureChips: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    featureChip: {
      backgroundColor: 'lightgray',
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: 10,
      marginBottom: 10,
    },
    featureChipText: {
      fontSize: 14,
    },
  });

  type Props = NativeStackScreenProps<RootStackParamList, "Map">
  
  const Map: React.FC<Props> = ({ route, navigation }) => {
    const [cafes, setCafes] = useState<ICafe[]>(getCaffees())
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [selectedCafe, setSelectedCafe] = useState<ICafe>()
    const [filterConfig, setTmpFilterConfig] = useState<IFilterConfig>(route.params.filterConfig);
    const [numGuests, setNumGuests] = useState(1);

    const rootNavigation = useNavigationContainerRef();

    const onIconPress = (cafe: ICafe) => {
      setSelectedCafe(cafe)
      setShowOverlay(!showOverlay);
    }

    useEffect(() => {
      setTmpFilterConfig(route.params.filterConfig)
      const tmpCafes = applyFilter(getCaffees(), route.params.filterConfig)
      setCafes(tmpCafes)
      console.log(route.params.filterConfig)
      console.log(tmpCafes.length)
    },[route.params])

    function openList(): void {
      navigation.navigate('CafeList', {cafes: cafes});
    }

    

    function openFilters(): void {
      navigation.navigate('Filters', {filterConfig: filterConfig})
    }
    const incrementGuests = () => {
      setNumGuests(numGuests + 1);
    };

    const decrementGuests = () => {
      if (numGuests > 1) {
        setNumGuests(numGuests - 1);
      }
    };
    

    function book(selectedCafe: ICafe): void {
      throw new Error('Function not implemented.');
      //we need to go to activities here
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button
            onPress={openList}
            type="outline"
            radius={"md"}
          >
              Search
              <Icon 
                name="search"
                color="blue"
              />
          </Button>
          <Button
            onPress={openFilters}
            type="outline"  
            radius={"md"}
          >
              Filter
              <Icon 
                name="filter-alt"
                color="blue"
              />
          </Button>
        </View>
        <ScrollView>
          <View style={styles.mapContainer}>
            <Image style={styles.map} source={require('../../../assets/Map.png')}>
            </Image>
            <View style={styles.iconContainer}>
              {cafes.map((cafe, i) => {
                  return <View
                    key={i}
                    style={{...styles.icon, marginTop:cafe.location.top, marginLeft:cafe.location.left}}
                  >
                    <Text 
                      style={{...styles.label}}
                      onPress={() => onIconPress(cafe)}

                    >{cafe.name}</Text>
                  <Icon
                    size={40} 
                    name="location-on"
                    color="red"
                    onPress={() => onIconPress(cafe)}
                  /></View>
              })}
            </View>
          </View>
        </ScrollView>
      
        <View style={{...styles.overlay, ...styles.popup, ...styles.modalContent, display: showOverlay? "flex" : "none"}}>
        
        <Text 
          style={styles.titleText}
          onPress={() => openCafeProfile(selectedCafe, navigation)}
        >{selectedCafe ? selectedCafe.name : 'Loading...'}</Text>

        <View style={styles.featureContainer}>
          <Text style={styles.featureHeaderText}>Features Available</Text>
          <View style={styles.featureChips}>
            {selectedCafe && selectedCafe.features.map((feature, index) => (
              <View key={index} style={styles.featureChip}>
                <Text style={styles.featureChipText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* <View style={{...styles.buttons}}>

          <Button onPress={decrementGuests}>-</Button>
          <Text>Number of Guests {numGuests}</Text>
          <Button onPress={incrementGuests}>+</Button>
        </View> */}

        <View style={{...styles.buttons}}>
        <TouchableOpacity style={styles.grayButton} onPress={() => onIconPress(null)}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.blueButton} onPress={() => book(selectedCafe)}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
        </View>

            </View>
      </View>
    );
  }

  export default Map;

function applyFilter(cafes: ICafe[], filterConfig: IFilterConfig) {
  let tmp = cafes;

  tmp = tmp.filter((cafe) => {
    return enumToNumber(filterConfig.rating) <= enumToNumber(cafe.rating)
  })

  tmp = tmp.filter((cafe) => {
    let returnVal = true;
      filterConfig.features.map((feature) => {
        if (!cafe.features.includes(feature)){
          returnVal = false;
        } 
      }) 
    return returnVal;
  })
  tmp = tmp.filter((cafe) => {
    let returnVal = true;
      filterConfig.restrictions.map((restriction) => {
        if (!cafe.restrictions.includes(restriction)){
          returnVal = false;
        } 
      }) 
    return returnVal;
  })
  tmp = tmp.filter((cafe) => {
    return priceIsSmaller(filterConfig, cafe.price)
  })
  console.log(tmp.length)
  return tmp;
}
