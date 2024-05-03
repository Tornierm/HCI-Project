import React from 'react'
import { ICafe } from '../types'
import { StyleSheet,Text, View} from 'react-native';
import { Button, Chip, Icon } from '@rneui/themed';
import { AirbnbRating } from '@rneui/themed';
import { determinePriceText, enumToNumber } from '../Tabs/Home/helpers';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"100%",
      //justifyContent: 'space-between'
      /*alignItems: 'center',
      justifyContent: 'center',*/
    },
    headerContainer: {
        flexDirection: 'row',   // Aligns children in a row
        alignItems: 'center',   // Centers children vertically in the container
        justifyContent: 'space-between', // Distributes children evenly with space between them
        padding: 5,            // Adds some padding around the container
        backgroundColor: '#fff', // Sets a background color
        height: 45,  // Sets a fixed height for the header          
    },
    headerContainerReviews: {
        flexDirection: 'row',   // Aligns children in a row
        alignItems: 'center',   // Centers children vertically in the container
        //justifyContent: 'space-between', // Distributes children evenly with space between them
        padding: 10,            // Adds some padding around the container
        backgroundColor: '#fff', // Sets a background color
        height: "auto",             // Sets a fixed height for the header
    },
    btnRadius: {
        borderColor: 'black',
        borderRadius: 10,
    },
    btnText: {
        color: 'black',  // Ensures the text color is black
        fontSize: 12 
    },
    tagContainer:{
        padding:8,
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    tags:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        gap:12,
    }, 
})

interface IOwnProps{
    cafe: ICafe
    createReview: () => void,
}

export default function Info(props: IOwnProps) {
  return (
    <View style={styles.container}>
        <HeaderReviews
            rating={enumToNumber(props.cafe.rating)}
            createReview={props.createReview}
        />
        <View
            style={styles.tagContainer}
        >
            <Text>Features:</Text>
            <View
                style={styles.tags}
            >
                {props.cafe.features.map((feature) => {
                    return <Chip>{feature}</Chip>
                })}
            </View>
        </View>
        <View
            style={styles.tagContainer}
        >
            <Text>Price:</Text>
            <View
                style={styles.tags}
            >
            <Chip>{determinePriceText(props.cafe.price)}</Chip>
            </View>
        </View>

        <View
            style={styles.tagContainer}
        >
            <Text>Restrictions:</Text>
            <View
                style={styles.tags}
            >
            {props.cafe.restrictions.map((restriction) => {
                return <Chip>{restriction}</Chip>
            })}
         </View>
        </View>

        
    </View>
  )
}

interface IHeaderProps{
    rating: number,
    createReview: () => void,
}

const HeaderReviews = (props: IHeaderProps) => {
    return(
        <View style={styles.headerContainer}>
            <AirbnbRating
                size={20}
                defaultRating={props.rating}
                showRating={false}
            />
            <Button style={styles.btnRadius}
                titleStyle={styles.btnText}
                onPress={props.createReview}
                title="Leave a review!"
                color="#000000"
                type='outline'
            />
    </View>
    )
}

