import { Button, Icon } from '@rneui/base';
import { useEffect, useState } from 'react';

import { StyleSheet, Text, View, Image, ScrollView, Modal } from 'react-native';
import { getCaffees } from '../../Api';
import { Features, ICafe, Restrictions } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './home';
import { openCafeProfile, openActivity } from './helpers';
import CafeProfile from './cafeProfile';
import { TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


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
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
    },
     modalContent: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 20, // Adjust as needed
      borderRadius: 4,
      maxWidth: '90%', // Limit the maximum width to 90% of the screen width
      maxHeight: '90%', // Limit the maximum height to 90% of the screen height
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
      marginLeft: 50,
      
    },
    titleText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20, 
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      marginTop: 10,
    },
    buttons:{
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop:15,
      
    },
    blueButton: {
      backgroundColor: '#3895d3',
      fontWeight: 'bold',
      marginLeft: 50,
      padding:5,
      borderRadius: 5,
      textAlign: 'center', 
    },
    grayButton: {
      backgroundColor: 'gray',
      fontWeight: 'bold',
      marginRight: 5,
      padding:5,
      borderRadius: 5,
      textAlign: 'center', 
    },
    plusButton: {
      backgroundColor: 'gray',
      fontWeight: 'bold',
      flexDirection: 'row',
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
    dateHeaderText: {
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 5,
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
    offerChipText: {
      fontSize: 8,
    },
    rowcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    counterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor: 'gray',
      textAlign:'center',
      justifyContent: 'center',
      height: 40,
    },
    button: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 20,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    counter: {
      paddingHorizontal: 10,
      color: 'white',
      fontWeight: 'bold',
    },
  });

  type Props = NativeStackScreenProps<RootStackParamList, "Map">
  
  const Map: React.FC<Props> = ({ route, navigation }) => {
    const [cafes, setCafes] = useState<ICafe[]>(route.params.cafes)
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [selectedCafe, setSelectedCafe] = useState<ICafe>()
    const [numGuests, setNumGuests] = useState(1);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    

    const onIconPress = (cafe: ICafe) => {
      setSelectedCafe(cafe)
      setShowOverlay(!showOverlay);
    }

    const handleDateChange = (event, newDate) => {
      if (newDate !== undefined) {
        setSelectedDate(newDate);
      }
    };
  
    

    const incrementGuests = () => {
     setNumGuests(numGuests + 1);
     };

     const decrementGuests = () => {
       if (numGuests > 1) {
         setNumGuests(numGuests - 1);
       }
     };
    

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.mapContainer}>
            <Image style={styles.map} source={require('../../../assets/Map.png')}>
            </Image>
            <View style={styles.iconContainer}>
              {cafes.map((cafe, i) => {
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
      
      
        <View style={{...styles.overlay, ...styles.popup, ...styles.modalContent,display: showOverlay? "flex" : "none"}}>
        {/* Cafe Name */}
        <Text style={styles.titleText}>{selectedCafe ? selectedCafe.name : 'Loading...'}</Text>
        {/* Include the Offer */}
        <View style={styles.featureChips}>
          {selectedCafe && selectedCafe.offers.map((offer, index) => (
            <View key={index} style={styles.featureChip}>
              <Text style={styles.offerChipText}>{offer.description}</Text>
            </View>
          ))}
        </View>
         {/* Include the Features */}
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

        {/* Include the Date Picker :) */}
        <Text style={styles.dateHeaderText}>Select date</Text>
        <DateTimePicker 
          value={selectedDate}
          mode="datetime"
          is24Hour={true} 
          display="default" 
          onChange={handleDateChange}
          style={{ backgroundColor: 'lightgray' , borderRadius: 10}}
          // themeVariant="light"
          {...(DateTimePicker as any)}
        />
      
        
        {/* <Text style={styles.buttonText}>Guests: 2</Text> */}

          {/* <Text>Number of Guests: </Text>
        <View style={{...styles.buttonText}}>
          <Button  style={styles.plusButton} onPress={decrementGuests}>-</Button>
          <Text > {numGuests} </Text>
          <Button style={styles.plusButton} onPress={incrementGuests}>+</Button>
        </View> */}

          
          <Text style={styles.dateHeaderText}>Number of Guests:</Text>
          <View style={styles.rowcontainer}>
            <View style={styles.counterContainer}>
              <TouchableOpacity style={styles.button} onPress={decrementGuests}>
                <Text style={[styles.buttonText, { lineHeight: 10 }]}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counter}>{numGuests}</Text>
              <TouchableOpacity style={styles.button} onPress={incrementGuests}>
                <Text style={[styles.buttonText, { lineHeight: 10 }]}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

        <View style={{...styles.buttons}}>
        <TouchableOpacity style={styles.grayButton} onPress={() => onIconPress(null)}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.blueButton} onPress={() => openActivity(navigation)}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
        </View>

            </View>
      </View>
     

    );
  }

  export default Map;