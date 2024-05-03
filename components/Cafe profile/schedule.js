import { Button, Icon } from '@rneui/themed';
import {React} from 'react';
import { StyleSheet, Text, View} from 'react-native';


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
      //padding: 10,            // Adds some padding around the container
      backgroundColor: '#fff', // Sets a background color
      height: 20, 
      marginLeft:5,
      marginRight:5            // Sets a fixed height for the header
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
  scheduleContainer: {
    backgroundColor:'#fff',
    padding: 12,
  },
  weekDayText:{
    width: "33%",
  }
});


const Schedule = () => {
    return(
        <View style={styles.scheduleContainer} > 
            <View style={styles.headerContainer}>
                <Text style={styles.weekDayText}>Day</Text>
                <Text style={styles.weekDayText}>Hours</Text>
                <Text style={styles.weekDayText}>Affluence</Text>
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
        <Text style={styles.weekDayText}>{day}</Text>
        <Text style={styles.weekDayText}>{hours}</Text>
        <Text style={styles.weekDayText}>{affluence}</Text>
    </View>
    )
}


export default Schedule;