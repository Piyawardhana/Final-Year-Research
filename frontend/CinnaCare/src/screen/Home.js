import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Linking, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const FourButtons = ({navigation}) => {

  const phoneNumber = ' +94 41 2245407';

  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <LinearGradient colors={['#C4A484', '#fff']} style={{flex: 1}}>
    <View style={{ height: 10 }} />
    <View style={styles.container}>
      <Image source={require('../assets/images/cin.jpg')} style={{ width: 140 , height: 140, borderRadius: 60, borderWidth: 5, borderColor: '#C4A484'}} />
      <Text style={{fontStyle: 'italic', fontFamily: 'Georgia', fontSize: 18, fontWeight: 'bold', color: '#5C4033'}}>Caregiver of your Cinnamon cultivation</Text>
      <View style={{ height: 60 }} />
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('#')}>
          {/*<Image source={require('../assets/images/RBD.png')} style={styles.card}/>*/}
          <Text style={styles.buttonText}>Identify Rough Bark Disease</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('#')}>
          {/*<Image source={require('../assets/images/RBD.png')} style={styles.card}/>*/}
          <Text style={styles.buttonText}>Identify Gall Mite Disease</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 20 }} />
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('#')}>
          {/*<Image source={require('../assets/images/RBD.png')} style={styles.card}/>*/}
          <Text style={styles.buttonText}>Identify Nutrient Deficiencies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('#')}>
          {/*<Image source={require('../assets/images/RBD.png')} style={styles.card}/>*/}
          <Text style={styles.buttonText}>Identify Mature Cinnamon</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 60 }} />
        <TouchableOpacity style={styles.button} onPress={handleCall}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesomeIcon icon={ faPhone } style={{color: "#FFFFFF"}} />
            <View style={{ width: 5 }} />
            <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>Contact Cinnamon Research Institute</Text>
          </View>
        </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#C4A484',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#228B22',
    borderRadius: 10,
    padding: 13,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    height: 120,
    width: 120,
    backgroundColor: '#5C4033',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default FourButtons;