import { Button, Icon } from '@rneui/themed';
import {React} from 'react';
import { StyleSheet, Text, View,Image, Dimensions, ScrollView } from 'react-native';


const styles = StyleSheet.create({
  imageContainer: {
    width: '100%', 
    paddingHorizontal: 10, 
    paddingTop: 10, 
    borderRadius: 10,
    overflow: 'hidden',
  },
  stretch: {
    width: '100%', 
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  buttonContainer: {
    width: '50%',
    padding: 10,
  },
});

const mapImage = require('../../assets/CafèProfileImages/map.png')

const Map = () => {
  return(
    <View style={styles.imageContainer}>
          <Image
            style={styles.stretch}
            source={mapImage}
          />
          <View style={styles.buttonContainer}>
          <Button
            onPress={() => alert('Opening Google Maps...')}
            title="Open in Google Maps"
            color="#3895d3"
          />
        </View>
    </View>
  )
};

export default Map;