import { Button, Icon } from '@rneui/base';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getCaffees } from '../../Api';
import { ICafe } from '../../types';

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
      top: 20,
      left: 20,
      flexDirection: 'row',
      zIndex: 2,
    },
    icon: {
      position: 'relative',
    },
    overlay:{
      flex:1,
      justifyContent:"center",
      alignItems: "center",
      ...StyleSheet.absoluteFillObject, // Takes the entire space of its container
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
    }
  });

  
  
  export default function Map({navigation}) {
    const [cafes, setCafes] = useState<ICafe[]>([])
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [selectedCafe, setSelectedCafe] = useState<ICafe>()

    useEffect(() => {
      setCafes(getCaffees())
    }, [])

    const openCafeProfile = (cafe: ICafe) => {
      navigation.navigate( 
        "CafeProfile",
        { cafe: cafe }
      )
    }

    const onIconPress = (cafe: ICafe) => {
      setSelectedCafe(cafe)
      setShowOverlay(!showOverlay)
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.mapContainer}>
            <Image style={styles.map} source={require('../../../assets/Map.png')}>
            </Image>
            <View style={styles.iconContainer}>
              {cafes.map((cafe, i) => {
                console.log(cafe)
                  return <Icon
                    key={i}
                    style={{...styles.icon, marginTop:cafe.location.top, marginLeft:cafe.location.left}}
                    size={40} 
                    name="location-on"
                    color="red"
                    onPress={() => onIconPress(cafe)}
                  />
              })}
            </View>
          </View>
        </ScrollView>
        <View style={{...styles.overlay, display: showOverlay? "flex" : "none"}}>
              
          <Button
            onPress={() => openCafeProfile(selectedCafe)}
          >open profile</Button>
          <Button
            onPress={() => onIconPress(null)}
          >close</Button>
        </View>
      </View>
    );
  }