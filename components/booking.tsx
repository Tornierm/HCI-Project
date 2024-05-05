import { StyleSheet,Text, View,Image, ScrollView, Platform} from 'react-native';
import { Button } from '@rneui/themed';
import React, { useState } from 'react';
import Header from './Cafe profile/header';
import DateTimePicker from '@react-native-community/datetimepicker';

import { ICafe, IReview, Rating } from './types';
import { AirbnbRating, Input } from '@rneui/base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Tabs/Home/home';

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
  iconButton: {
      padding: 10,
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
    marginVertical: 24,
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
  pickerContainer: {
    margin: 20,
  }
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

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [numberOfPeople, setNumberOfPeople] = useState(1);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
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
          <Text style={styles.h1}>Book a table</Text>
          <View style={styles.pickerContainer}>
          <Text style={styles.h2}>Date</Text>
          <Text>{date.toString()}</Text>
        <Button onPress={() => showMode('date')} title="Select a day" />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <View style={styles.pickerContainer}>
          <Text style={styles.h2}>Hour</Text>
          
        <Button onPress={() => showMode('time')} title="Select an hour" />
      </View>
      <View style={styles.pickerContainer}>
        <Text>Number of People: {numberOfPeople}</Text>
        <Button onPress={decrementPeople} title="-" />
        <Button onPress={incrementPeople} title="+" />
      </View>
        <View style={styles.buttonContainer}>
            <Button
              onPress={() => alert('Booked!')}
              title="Confirm"
              color="#333"
            />
          </View>
          
        </ScrollView>
    );
  };

  const bookNow = () => {
    return <p>booked!</p>
  }


  export default Booking;

  