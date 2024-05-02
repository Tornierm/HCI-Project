import { Button, Icon } from '@rneui/base';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getCaffees } from '../../Api';
import { ICafe } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './home';
import { openCafeProfile } from './helpers';

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

  type Props = NativeStackScreenProps<RootStackParamList, "Map">
  
  const Map: React.FC<Props> = ({ route, navigation }) => {
    const [cafes, setCafes] = useState<ICafe[]>(route.params.cafes)
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [selectedCafe, setSelectedCafe] = useState<ICafe>()

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