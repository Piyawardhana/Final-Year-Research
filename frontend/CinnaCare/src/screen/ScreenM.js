import React from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ScreenM = ({navigation})=>{

    return (
      <LinearGradient colors={['#C4A484', '#fff']} style={{flex: 1}}>
        <ScrollView>
        <View style={{ height: 20 }} />
        <View style={styles.container}>
        <View style={styles.row}>
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Identify Disease Stage')}>
                <Text style={styles.buttonText}>Single Prediction</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MultipleImg')}>
                <Text style={styles.buttonText}>Multi Prediction</Text>
              </TouchableOpacity>
        </View>
        </View>
        <View style={{ height: 10 }} />
        <View style={styles.card1}>
        <View style={styles.cardContent}>
        <Text style={styles.title1}>රළු පොතු රෝගය</Text>
        <Text style={styles.description}>කුරුදු ගසේ පොත්තට වැළදෙන මෙම රෝගී තත්ත්වය ශ්‍රී ලංකාවේ කුරුදු වගා කරන සෑම 
                ප්‍රදේශයකම ව්‍යාප්ත වී ඇත. කදන්වල ඉතා කුඩා තද කළු පැහැති පැල්ලම් ලෙස ආරම්භ වී පසුව කළු දාරයක් සහිත 
                විශාල දුඹුරු ලප බවට පත් වේ. පසුව එම ස්ථානවල පොත්තේ වියළි දික් පැලුම් ඇති වේ. රෝගයේ අවසාන අවස්ථාවේදී 
                ආසාදිත කදන්වලට ඉහළින් ඇති පත්‍රවල නාරටි අතර කහ පැහැති වීම දක්නට ලැබෙන අතර පසුව පත්‍ර වියළි හැළී ශාකය 
                මිය යා හැක. සමහර අවස්ථාවල දී ආසාදනය වූ ප්‍රදේශයට පහළින් කදේ හරස් අතු විශාල ප්‍රමාණයක් හට ගැනීම සිදුවෙයි.
                නාරටි අතර කහ පැහැති වීම නිසා කුරුදු ගස් මිය යන අතර එසේ නොවූ ගස් මේරූ විට පොත්තෙහි වියළි දික් පැලුම් 
                සහිත ගොරහැඩි ඇතිවේ. මේ නිසා කුරුදු පොතු සැකසීම අපහසු වන අතර සැකසූ පොතුවල ගුණාත්මක භාවය ද 
                අඩු වේ.</Text>
        </View>
        </View>
        </ScrollView>
      </LinearGradient>
      );

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#C4A484',
      overflow: 'hidden',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      backgroundColor: '#013220',
      borderRadius: 10,
      padding: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    card: {
      height: 80,
      width: 150,
      backgroundColor: '#5C4033',
      borderRadius: 30,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 3.84,
      elevation: 10,
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
    card1: {
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 5,
      marginHorizontal: 20,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    cardContent: {
      padding: 20,
    },
    title1: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'black'
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
    },
  });

  export default ScreenM;