import React from 'react'
import { StyleSheet,Text, View} from 'react-native';
import { IReview } from '../types';
import Reviews from './reviews';
import { AirbnbRating, Icon, ListItem } from '@rneui/themed';
import { enumToNumber } from '../Tabs/Home/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListItem: {
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 6,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  headerContainer: {
    flexDirection: 'row',   // Aligns children in a row
    alignItems: 'center',   // Centers children vertically in the container
    justifyContent: 'space-between', // Distributes children evenly with space between them
    padding: 5,            // Adds some padding around the container
    backgroundColor: '#fff', // Sets a background color
    height: 45,  // Sets a fixed height for the header          
  },
  commentReviews: {
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
    marginVertical: 10
  },
});

interface IOwnProps {
 reviews: IReview[],
}

export default function MilansReviews(props: IOwnProps) {
  return (
    <View>
      {props.reviews.map((review, i) => {
        return <UserReviews
          review={review}
        >
        </UserReviews>
      })}
    </View>
  )
}
interface IReviewProps{
  review: IReview
}

const UserReviews = (props: IReviewProps) => {
  return(
      <View style={{backgroundColor:'#ffffff'}}>
        
          <View style={styles.headerContainer}>   
              <View style={styles.headerContainer}>
                  <Icon
                      name="account-circle"
                      size={24}
                      color="#000000"
                  />
                  <Text>{props.review.userName}</Text>
              </View>
              <AirbnbRating
                size={20}
                defaultRating={enumToNumber(props.review.rating)}
                showRating={false}
              />
          </View>
          <Text style={styles.commentReviews}>{props.review.comment}</Text>
          <View style={styles.horizontalLine}/>
      </View>
  );
}


