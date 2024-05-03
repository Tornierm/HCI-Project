import { Button, Icon } from '@rneui/themed';
import {React} from 'react';
import { StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
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
    btnRadius: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5
    },
    btnText: {
        color: 'black',  // Ensures the text color is black
        fontSize: 12 
    },
    starContainer: {
        flexDirection: 'row',   // Aligns children in a row
        alignItems: 'center',   // Centers children vertically in the container
        backgroundColor: '#fff', // Sets a background color
        //height: 60,             // Sets a fixed height for the header
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

const Reviews = (reviews) => {
    return(
        <View>
            <HeaderReviews totalReviews={reviews.lenght}/>
            <View style={styles.horizontalLine}/>
            <PreviewReviews/>
            <UserReviews comment="Best coffee in town!" userName={"PippoFranco"}/>
            <UserReviews comment="They do have plugs for everyone!" userName={"Juliopaz65"}/>
            <UserReviews comment="No booths but tables are big" userName={"IleniaMariposa"}/>
        </View>
    );
}

const HeaderReviews = ({totalReviews}) => {
    return(
        <View style={styles.headerContainer}>
            <View style={styles.headerContainerReviews}>
                <Text>{totalReviews}</Text>
                <ReviewRate/>
            </View>
            <Button buttonStyle={styles.btnRadius}
                titleStyle={styles.btnText}
                onPress={() => alert("Sorry! Page under construction...") }
                title="Leave a review!"
                color="#000000"
                type='outline'
            />
    </View>
    )
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

const UserReviews = ({comment, userName}) => {
    return(
        <View style={{backgroundColor:'#ffffff'}}>
            <View style={styles.headerContainer}>   
                <View style={styles.headerContainer}>
                    <Icon buttonStyle={styles.iconButton}
                        name="account-circle"
                        size={24}
                        color="#000000"
                    />
                    <Text>{userName}</Text>
                </View>
                <ReviewRate/>
            </View>
            <Text style={styles.commentReviews}>{comment}</Text>
            <View style={styles.horizontalLine}/>
        </View>
    );
}

const PreviewReviews = () => {
    return(
        <View style={styles.headerContainer}>
            <Text>90 Reviews</Text>
            <Button buttonStyle={styles.btnRadius}
                titleStyle={styles.btnText}
                onPress={() => alert("Sorry! Page under construction...") }
                title="See More"
                color="#000000"
                type='outline'
            />
        </View>
    );
    
}

export default Reviews;