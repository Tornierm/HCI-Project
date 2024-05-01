import { Button, Icon } from '@rneui/themed';
import {React} from 'react';
import { StyleSheet, Text, View,Image, Dimensions, ScrollView } from 'react-native';


const styles = StyleSheet.create({
  iconButton: {
      padding: 10,
  }, 
  centerText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'gray',
    width: '100%',
    marginVertical: 10
  },
});

const mapImage = '../../../assets/CafèProfileImages/map.png';

const Features = () => {
  return(
    <View style={styles.imageContainer}>
        <View>
        <Icon style={styles.iconButton}
              name="laptop"
              size={24}
              color="#000"
        />
            <Text style={styles.centerText}>Laptops allowed from Monday to Friday, not allowed on weekends</Text>
        </View>
        <View>
        <Icon style={styles.iconButton}
              name="wifi"
              size={24}
              color="#000"
        />
            <Text style={styles.centerText}>Strong free wifi</Text>
        </View>
        <View>
        <Icon style={styles.iconButton}
              name="bolt"
              size={24}
              color="#000"
        />
            <Text style={styles.centerText}>One socket per table</Text>
        </View>
    </View>

  )
};

export default Features;