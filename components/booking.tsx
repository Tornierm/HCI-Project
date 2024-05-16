import { StyleSheet,Text, View,Image, ScrollView, Platform} from 'react-native';
import { Button } from '@rneui/themed';
import React, { useState } from 'react';
import Header from './Cafe profile/header';
import DateTimePicker from '@react-native-community/datetimepicker';

import { ICafe, IReview, Rating } from './types';
import { AirbnbRating, Input } from '@rneui/base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Tabs/Home/home';
import { openActivity } from './Tabs/Home/helpers';

const images = {
  steven: require('../assets/CafèProfileImages/Steven1.jpeg'),
  souki: require('../assets/CafèProfileImages/Steven2.jpeg'),
  other: require('../assets/CafèProfileImages/Steven3.jpg'),
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    width:'100%',
  },
  headerContainer: {
      flexDirection: 'row',   // Aligns children in a row
      alignItems: 'center',   // Centers children vertically in the container
      justifyContent: 'space-between', // Distributes children evenly with space between them
      padding: 10,            // Adds some padding around the container
      backgroundColor: '#333', // Sets a background color
      height: 60,             // Sets a fixed height for the header
  },
  headerTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
  },
  headerAddress: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitleContainer: {
    flexDirection: 'column',
  },
  button: {
      padding: 10,
      backgroundColor: '#333'
  }, 
  imageContainer: {
    width: '100%',       // Full width of the screen
    height: 250,         // Fixed height
    padding: 8,
    overflow: 'hidden',  // Hide overflow
  },
  stretch: {
    width: '100%',       // Full width of the container
    height: '100%',      // Full height of the container
    resizeMode: 'cover', // Cover to maintain aspect ratio
    borderRadius: 10,    // Rounded corners
  },
  buttonContainer: {
    width: '100%', // Full width
    padding: 10, // Padding inside the button container
    //position:'absolute'
    
  },
  overlayButtonContainer: {
    display: "flex",
    flexDirection: "row",
    width:'100%',
    justifyContent:"space-between",
    gap:12,
  },
  h1:{
    width: '100%',
    fontSize: 24,
    textAlign: "center",
  },
  overlay:{
    flex:1,
    justifyContent:"center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject, // Takes the entire space of its container
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
    padding: 32,
  },
  reviewContainer:{
    width: "100%",
    height: "100%",
    display:"flex",
    justifyContent: "space-between",
    backgroundColor:"white",
    padding: 16,
  },
  h2:{
    width: '100%',
    fontSize: 20,
    textAlign: "center",
    marginVertical: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  pickerContainer: {
    margin: 20,
    width: '80%', // Adjust width as needed
  },
  datePicker: {
    width: '100%',
    backgroundColor: 'white',
  },
  timePicker: {
    width: '100%',
    backgroundColor: 'white',
  },
  bookingContainer: {
      flexDirection: 'row',   // Aligns children in a row
      alignItems: 'center',   // Centers children vertically in the container
      justifyContent: 'space-between', // Distributes children evenly with space between them
      padding: 10,            // Adds some padding around the container
      //backgroundColor: '#333', // Sets a background color
      height: 60,             // Sets a fixed height for the header
  },
});

const determineImage = (image) => {
  if(image == "steven"){
    return images.steven
  } else if(image == "souki"){
    return images.souki
  } else {
    return images.other
  }
}




interface IOwnProps{
  cafe: ICafe,
  goBack: () => void,
}

const initialReview: IReview = {
  userName: 'Loic',
  rating: undefined,
  comment: undefined,
  imageSrc: undefined
}

type Props = NativeStackScreenProps<RootStackParamList, "Booking">

  const Booking: React.FC<Props>  = ({route, navigation}) => {
    const [tmpReview, setTmpReview] = useState(initialReview)
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedStartTime, setSelectedStartTime] = useState(new Date());
    const [selectedEndTime, setSelectedEndTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [mode, setMode] = useState('date');

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
    const handleStartTimeChange = (event, newTime) => {
      console.log('start');
      /*if (newDate !== undefined) {
        setSelectedDate(newDate);
      }*/
      const isEnd = true;
      const currentTime = newTime;
      setShowTimePicker(false);
      setSelectedStartTime(currentTime);
    }
    const handleEndTimeChange = (event, newTime) => {
      console.log('end');
      /*if (newDate !== undefined) {
        setSelectedDate(newDate);
      }*/
      const currentTime = newTime;
      setShowTimePicker(false);
      setSelectedEndTime(currentTime);
    }
	
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

  const incrementPeople = () => {
    setNumberOfPeople(numberOfPeople + 1);
  };

  const decrementPeople = () => {
    if (numberOfPeople > 1) setNumberOfPeople(numberOfPeople - 1);
  };

    const updateTmpReview = (update: Partial<IReview>) => {
      setTmpReview({ ...tmpReview, ...update });
    }

    function updateRating(value: number): void {
      console.log(value)
      console.log(getRatingByKey(value))
      updateTmpReview({rating: Rating[getRatingByKey(value-1)]})    
    }


    function getRatingByKey(index: number): string | undefined {
      // Convert the numeric index to a string to match the enum value
      const value = String(index);
      // Iterate over the enum to find the key that matches the value
      for (const key in Rating) {
          if (Rating[key as keyof typeof Rating] === value) {
              return key;  // Return the matching enum key
          }
      }
      return undefined;  // If no match is found, return undefined
  }

    return (
        <ScrollView style= {styles.container}>
          <Header name={route.params.cafe.name} address={route.params.cafe.address} />
          <View style={styles.imageContainer}>
            <Image
              source={determineImage(route.params.cafe.image)}
              style={styles.stretch}
            />
          </View>
          <Text style={styles.h1}>Book now</Text>
          <Text style={styles.h2}>Select the day</Text>
          <View style={styles.pickerContainer}>
          <Text>Date: {selectedDate.getDate()}/{selectedDate.getMonth()+1}/{selectedDate.getFullYear()}</Text>
        <Button onPress={() => showMode('date')} color={'#3895d3'} title="Select the day" />
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
        <Text>From: {selectedStartTime.getHours()<10 ? '0' + selectedStartTime.getHours(): selectedStartTime.getHours()}:{selectedStartTime.getMinutes()<10 ? '0' + selectedStartTime.getMinutes(): selectedStartTime.getMinutes()}</Text>
        <Button onPress={() => showMode('time')} color={'#3895d3'} title="Select the time" />
        {showTimePicker && <DateTimePicker 
          value={selectedStartTime}
          mode={mode}
          is24Hour={true} 
          display="default" 
          onChange={handleStartTimeChange}
          style={{ backgroundColor: 'lightgray' , borderRadius: 10}}
          // themeVariant="light"
          {...(DateTimePicker as any)}
        />}
        <Text>To: {selectedEndTime.getHours()<10 ? '0' + selectedEndTime.getHours(): selectedEndTime.getHours()}:{selectedEndTime.getMinutes()<10 ? '0' + selectedEndTime.getMinutes(): selectedEndTime.getMinutes()}</Text>
        <Button onPress={() => showMode('time')} color={'#3895d3'} title="Select the time" />
        {showTimePicker && <DateTimePicker 
          value={selectedEndTime}
          mode={mode}
          is24Hour={true} 
          display="default" 
          onChange={handleEndTimeChange}
          style={{ backgroundColor: 'lightgray' , borderRadius: 10}}
          // themeVariant="light"
          {...(DateTimePicker as any)}
        />}
          </View>
      <View style={styles.bookingContainer}>
        <Text>Number of People: </Text>
        <Button color='#3895d3' onPress={decrementPeople} title="-" />
        <Text>{numberOfPeople}</Text>
        <Button color='#3895d3' onPress={incrementPeople} title="+" />
      </View>
        <View style={styles.buttonContainer}>
            <Button
              onPress={() => {
                alert('Booking successful!');
                openActivity(navigation)
              }}
              title="Confirm"
              color="#3895d3"
            />
          </View>
          
        </ScrollView>
    );
  };

  const bookNow = () => {
    return <p>booked!</p>
  }


  export default Booking;

  