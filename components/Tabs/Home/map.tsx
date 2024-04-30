import { Button, Icon } from '@rneui/base';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Modal } from 'react-native';
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
    },
    popup: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
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
    text:{
      color: 'white',
    }
  });

  type Props = NativeStackScreenProps<RootStackParamList, "Map">
  
  const Map: React.FC<Props> = ({ route, navigation }) => {
    const [cafes, setCafes] = useState<ICafe[]>(route.params.cafes)
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [selectedCafe, setSelectedCafe] = useState<ICafe>()

    const onIconPress = (cafe: ICafe) => {
      setSelectedCafe(cafe)
      setShowOverlay(!showOverlay);
    }

    // const closeModal = () => {
    //   setSelectedCafe(null)
    //   setShowOverlay(showOverlay)
    // };
    

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

        {/* <Modal 
        animationType="slide"
        transparent={true}
        >
            
          {/* {selectedCafe && (
            <>
            <View style={{...styles.popup}}>
            <View style={styles.modalContent}> 
        
              <Button
                onPress={() => openCafeProfile(selectedCafe, navigation)}
              >open profile</Button>
              <Button
                onPress={() => closeModal()}
             >close</Button>
              <Text>{selectedCafe.name}</Text>
              <Text>Number of Guests: 1</Text>
              <Text>Date: Today</Text>
              <Button
                onPress={() => openCafeProfile(selectedCafe, navigation)}
              >open profile</Button>
              <Button
                onPress={() => onIconPress(null)}
             >close</Button>
            </>
          )} */}
        {/* </View>
        </View> */}
        {/* </View> */}
      {/* </Modal> */}


      
        <View style={{...styles.overlay, ...styles.popup, ...styles.modalContent, ...styles.text, display: showOverlay? "flex" : "none"}}>
            
        {/* <Text>{selectedCafe.name}</Text>  */}
              <Text>Number of Guests: 1</Text>
              <Text>Date: Today</Text>
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