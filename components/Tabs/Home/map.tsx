import { Button, Icon } from '@rneui/base';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { ICafe, IFilterConfig, Price } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './home';
import { enumToNumber, openCafeProfile, priceIsSmaller } from './helpers';

import { getCaffees } from '../../Api';
import React from 'react';

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
    }
  });

  type Props = NativeStackScreenProps<RootStackParamList, "Map">
  
  const Map: React.FC<Props> = ({ route, navigation }) => {
    const [cafes, setCafes] = useState<ICafe[]>(getCaffees())
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [selectedCafe, setSelectedCafe] = useState<ICafe>()
    const [filterConfig, setTmpFilterConfig] = useState<IFilterConfig>(route.params.filterConfig);

    const onIconPress = (cafe: ICafe) => {
      setSelectedCafe(cafe)
      setShowOverlay(!showOverlay)
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
        <View style={{...styles.overlay, display: showOverlay? "flex" : "none"}}>
          <Button
            onPress={() => openCafeProfile(selectedCafe, navigation)}
          >open profile</Button>
          <Button
            onPress={() => onIconPress(null)}
          >close</Button>
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
