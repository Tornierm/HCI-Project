import { Button, Icon } from '@rneui/base';
import { useEffect, useState } from 'react';
import { ICafe, IFilterConfig } from '../../types';
import { enumToNumber, priceIsSmaller } from './helpers';

import { getCaffees } from '../../Api';

import { StyleSheet, Text, View, Image, ScrollView, Modal } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './home';
import { openCafeProfile, openActivity } from './helpers';
import CafeProfile from './cafeProfile';
import { TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


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
      padding: 20, // Adjust as needed
      borderRadius: 4,
      maxWidth: '90%', // Limit the maximum width to 90% of the screen width
      maxHeight: '90%', // Limit the maximum height to 90% of the screen height
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
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
    const [cafes, setCafes] = useState<ICafe[]>(getCaffees())
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [selectedCafe, setSelectedCafe] = useState<ICafe>()
    const [filterConfig, setTmpFilterConfig] = useState<IFilterConfig>(route.params.filterConfig);
    const [numGuests, setNumGuests] = useState(1);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [mode, setMode] = useState('date');
    

    const rootNavigation = useNavigationContainerRef();

    const showMode = (newMode) => {
      if(newMode == 'date'){
        setShowDatePicker(true);
      }
      else {
      setShowTimePicker(true);
      }
      const currentMode =  newMode;
      setMode(currentMode);
    };

    const onIconPress = (cafe: ICafe) => {
      setSelectedCafe(cafe)
      setShowOverlay(!showOverlay);
    }

    const handleDateChange = (event, newDate) => {
      /*if (newDate !== undefined) {
        setSelectedDate(newDate);
      }*/
      console.log(newDate);
      const currentDate = newDate;
      console.log(currentDate);
      setShowDatePicker(false);
      setSelectedDate(currentDate);
    }
    const handleTimeChange = (event, newTime) => {
      /*if (newDate !== undefined) {
        setSelectedDate(newDate);
      }*/
      const currentTime = newTime;
      setShowTimePicker(false);
      setSelectedTime(currentTime);
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
        <ScrollView
          horizontal={true}
        >
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
      
        <View style={{...styles.overlay, ...styles.popup, ...styles.modalContent,display: showOverlay? "flex" : "none"}}>
        
        {/* Cafe Name */}
        <Text style={styles.titleText} onPress={() => openCafeProfile(selectedCafe, navigation)}>{selectedCafe ? selectedCafe.name : 'Loading...'}</Text>
        
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
            {selectedCafe && selectedCafe.restrictions.map((restriction, index) => (
              <View key={index} style={styles.featureChip}>
                <Text style={styles.featureChipText}>{restriction}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Include the Date Picker :) */}
        {/*<Text style={styles.dateHeaderText}>Date: {selectedDate.getDate()}/{selectedDate.getMonth()+1}/{selectedDate.getFullYear()}</Text>
        <Button onPress={() => showMode('date')} title="Select the day" />
        {showDatePicker && <DateTimePicker 
          value={selectedDate}
          mode="date"
          is24Hour={true} 
          display="default" 
          onChange={handleDateChange}
          style={{ backgroundColor: 'lightgray' , borderRadius: 10}}
          // themeVariant="light"
          {...(DateTimePicker as any)}
        />}
        <Text style={styles.dateHeaderText}>Time: {selectedTime.getHours()<10 ? '0' + selectedTime.getHours(): selectedTime.getHours()}:{selectedTime.getMinutes()<10 ? '0' + selectedTime.getMinutes(): selectedTime.getMinutes()}</Text>
        <Button onPress={() => showMode('time')} title="Select the time" />
        {showTimePicker && <DateTimePicker 
          value={selectedTime}
          mode={mode}
          is24Hour={true} 
          display="default" 
          onChange={handleTimeChange}
          style={{ backgroundColor: 'lightgray' , borderRadius: 10}}
          // themeVariant="light"
          {...(DateTimePicker as any)}
        />}
        
        {/* <Text style={styles.buttonText}>Guests: 2</Text> */}

          {/* <Text>Number of Guests: </Text>
        <View style={{...styles.buttonText}}>
          <Button  style={styles.plusButton} onPress={decrementGuests}>-</Button>
          <Text > {numGuests} </Text>
          <Button style={styles.plusButton} onPress={incrementGuests}>+</Button>
        </View> */}

          
          {/*<Text style={styles.dateHeaderText}>Number of Guests:</Text>
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
          </View>*/}

        <View style={{...styles.buttons}}>
        <TouchableOpacity style={styles.grayButton} onPress={() => onIconPress(null)}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.blueButton} onPress={() => openCafeProfile(selectedCafe, navigation)}>
          <Text style={styles.buttonText}>Visit</Text>
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