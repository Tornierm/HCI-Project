import { StyleSheet, Text, View, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, Icon } from '@rneui/themed';
import {React} from 'react';

//import { NavigationContainer } from '@react-navigation/native';
//import { SliderBox } from "react-native-image-slider-box";
import Slider from 'react-slick';


const styles = StyleSheet.create({
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
  iconButton: {
      padding: 10,  // Makes it easier to press the icon
  },
});

  const Cafeprofile = ({name, images}) => {
    return (
      <View>
        <Header name={name} />
        <ImageSlider images={images}/>
        <Tabs/>
        <Button
          onPress={() => bookNow}
          title="Book Now"
          color="#000000"
          accessibilityLabel="Go to book now section"
        />
      </View>
    );
  };

  const Header = ({name}) => {
    return(
      <View style={styles.headerContainer}>
      <Icon style={styles.iconButton}
            name="chevron-left"
            size={24}
            color="#ffffff"
        />
        <Text style={styles.headerTitle}>{name}</Text>
        <Icon style={styles.iconButton}
              name="favorite-outline"
              size={24}
              color="#ffffff"
              onPress={() => alert('Added to my favourities!')}
        />
      </View>
    )
  }

  const ImageSlider = ({ images }) => {
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        cssEase: "linear"
    };
    console.log(images);
    return (
        <div style={{ margin: '0 20px' }}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} style={{ width: '100%', height: 300 }}>
                        <Image source={image} style={{ width: '100%', height: '100%' }} resizeMode="contain"/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

  const Tabs = () => {
    const Tab = createMaterialTopTabNavigator();
    return(
      <Tab.Navigator
      initialRouteName="Map"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarIndicatorStyle: { backgroundColor: 'black' },
      }}>
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Features" component={Features} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Reviews" component={Reviews} />
    </Tab.Navigator>
    );
  }
  const goBack = () => {
    //goback
  }

  const bookNow = () => {
    return <p>booked!</p>
  }

  
  const Tab = createMaterialTopTabNavigator();
  
  // Define the components for each tab
  const Map = () => (
    <View>
      <Text>Map View</Text>
    </View>
  );
  
  const Schedule = () => (
    <View>
      <Text h2>Work in progress!</Text>
      <Text h2>This page is under construction...</Text>
    </View>
  );
  
  const Features = () => (
    <View>
      <Text>Features List</Text>
    </View>
  );
  
  const Menu = () => (
    <View>
      <Text h2>Work in progress!</Text>
      <Text h2>This page is under construction...</Text>
    </View>
  );
  
  const Reviews = () => (
    <View>
      <Text>Reviews</Text>
    </View>
  );  

  export default Cafeprofile;

  