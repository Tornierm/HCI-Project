import { Button, Icon } from '@rneui/themed';
import {React} from 'react';
import { StyleSheet, Text, View,Image, Dimensions, ScrollView } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:"100%",

    //justifyContent: 'space-between'
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
  headerContainer: {
      flexDirection: 'row',   // Aligns children in a row
      alignItems: 'center',   // Centers children vertically in the container
      justifyContent: 'space-between', // Distributes children evenly with space between them
      //padding: 10,            // Adds some padding around the container
      backgroundColor: '#fff', // Sets a background color
      height: 20, 
      marginLeft:5,
      marginRight:5            // Sets a fixed height for the header
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
  flex: 'column'
},
  iconButton: {
      padding: 10,
  }, 
  imageContainer: {
    width: '100%', // The container takes the full width of the screen
    paddingHorizontal: 10, // Apply horizontal padding to create margins on both sides
    paddingTop: 10, // Top padding for margin from elements above, if necessary
    borderRadius: 10, // Apply border radius to the container
    overflow: 'hidden', // Ensures the contents do not bleed outside the border radius
  },
  stretch: {
    width: '100%', // Fill the adjusted width considering paddingHorizontal
    height: 250, // Fixed height, adjust as necessary
    resizeMode: 'cover', // Cover to ensure the aspect ratio is maintained
    borderRadius: 10,
  },
  workInProgress: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',   // Centers children vertically in the container
    justifyContent: 'space-between',
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:'bold'
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
    marginVertical: 10
  },
});


const Schedule = () => {
    return(
        <View style={{backgroundColor:'#fff'}} > 
            <View style={styles.headerContainer}>
                <Text style={styles.centerText}>Day</Text>
                <Text style={styles.centerText}>Hours</Text>
                <Text style={styles.centerText}>Affluence</Text>
            </View>
            <View style={styles.horizontalLine}/>
            <WeekDay day='Monday' hours='9.00 - 20.00' affluence='Not crowded'/>
            <View style={styles.horizontalLine}/>
            <WeekDay day='Tuesday' hours='9.00 - 20.00' affluence='Not crowded'/>
            <View style={styles.horizontalLine}/>
            <WeekDay day='Wednesday' hours='9.00 - 20.00' affluence='Crowded'/>
            <View style={styles.horizontalLine}/>
            <WeekDay day='Thursday' hours='9.00 - 20.00' affluence='Not crowded'/>
            <View style={styles.horizontalLine}/>
            <WeekDay day='Friday' hours='9.00 - 22.00' affluence='Crowded'/>
            <View style={styles.horizontalLine}/>
            <WeekDay day='Saturday' hours='9.00 - 14.00' affluence='Crowded'/>
            <View style={styles.horizontalLine}/>
            <WeekDay day='Sunday' hours='Closed' affluence='/'/>
        </View>
    );
}
const WeekDay = ({day,hours, affluence}) => {
    return(
    <View style={styles.headerContainer}>
        <Text>{day}</Text>
        <Text>{hours}</Text>
        <Text>{affluence}</Text>
    </View>
    )
}


export default Schedule;