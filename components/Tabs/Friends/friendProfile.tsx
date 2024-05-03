import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { FriendsParamList } from './friends';
import { IUser } from '../../types';
import { useState } from 'react';
import {Card} from 'react-native-paper';
import {Icon, Button} from '@rneui/themed';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
    headerContainerReviews: {
      flexDirection: 'row',   // Aligns children in a row
      alignItems: 'center',   // Centers children vertically in the container
      //justifyContent: 'space-between', // Distributes children evenly with space between them
      padding: 10,            // Adds some padding around the container
      backgroundColor: '#fff', // Sets a background color
      height: 60,             // Sets a fixed height for the header
    },
    headerContainerStars: {
      flexDirection: 'row',   // Aligns children in a row
      alignItems: 'center',   // Centers children vertically in the container
      //justifyContent: 'space-between', // Distributes children evenly with space between them
      //padding: 10,            // Adds some padding around the container
      backgroundColor: '#fff', // Sets a background color
      height: 60, 
      marginRight: 5            // Sets a fixed height for the header
    },
    iconButton: {
      margin:0,
      //marginLeft: 10,
      padding: 0
    }, 
    centerText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight:'bold',
      fontSize: 24,
      margin: 10
    },
    cardContainer: {
      margin:10,
    }
  });

  const Stack = createNativeStackNavigator();

  type Props = NativeStackScreenProps<FriendsParamList, "FriendProfile">
  
  export default function FriendProfile({ route, navigation }) {
    const [friend, setFriend] = useState<IUser>(route.params.friend)
    return (
        <ScrollView>
          <Text style={styles.centerText}>
            {friend.name}
          </Text>
          <Card style={styles.cardContainer}>
            <Card.Cover source={{ uri: '../../../assets/CafèProfileImages/Steven1.jpeg' }} />
            <Card.Content>
              <Text  style={styles.centerText}>Sukis Cafè</Text>
              <Text>I love Sukis Cafe. They have the best halal food in town.</Text>
            </Card.Content>
            <View style={styles.headerContainerReviews}>
                <Text>4</Text>
                <ReviewRate/>
            </View>
            <Card.Actions>
              <Button
              onPress={() => alert('Booked!')}
              title="Visit"
              color="#333"
              >Visit</Button>
            </Card.Actions>
          </Card>
          <Card style={styles.cardContainer}>
            <Card.Cover source={{ uri: '../../../assets/CafèProfileImages/Steven2.jpeg' }} />
            <Card.Content>
              <Text  style={styles.centerText}>Stevens Cafè</Text>
              <Text>I love Stevens Cafe. They have the best waitresses in town.</Text>
            </Card.Content>
            <View style={styles.headerContainerReviews}>
                <Text>4</Text>
                <ReviewRate/>
            </View>
            <Card.Actions>
              <Button
              onPress={() => alert('Booked!')}
              title="Visit"
              color="#333"
              >Visit</Button>
            </Card.Actions>
          </Card>
          <Card style={styles.cardContainer}>
            <Card.Cover source={{ uri: '../../../assets/CafèProfileImages/Steven3.jpg' }} />
            <Card.Content>
              <Text  style={styles.centerText}>Federal Cafè</Text>
              <Text>Perfect to work with friends.</Text>
            </Card.Content>
            <View style={styles.headerContainerReviews}>
                <Text>4</Text>
                <ReviewRate/>
            </View>
            <Card.Actions>
              <Button
              onPress={() => alert('Booked!')}
              title="Visit"
              color="#333"
              >Visit</Button>
            </Card.Actions>
          </Card>
        </ScrollView>
    );
  }

  

  const ReviewRate = () => {
    return(
        <View style={styles.headerContainerStars}>
            <Icon style={styles.iconButton}
                name="star"
                size={24}
                color="#000000"
            />
            <Icon style={styles.iconButton}
                name="star"
                size={24}
                color="#000000"
            />
            <Icon style={styles.iconButton}
                name="star"
                size={24}
                color="#000000"
            />
            <Icon style={styles.iconButton}
                name="star"
                size={24}
                color="#000000"
            />
            <Icon style={styles.iconButton}
                name="star-outline"
                size={24}
                color="#000000"
            />
        </View>
    )
}