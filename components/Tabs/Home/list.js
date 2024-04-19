import { StyleSheet, Text, View, Image } from 'react-native';

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
  });
  
  export default function List() {
    return (
      <View style={styles.container}>
        <Text>List</Text>
      </View>
    );
  }