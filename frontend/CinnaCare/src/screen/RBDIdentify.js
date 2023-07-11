import React, { useState } from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker'
import Tflite from 'tflite-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCameraRetro, faUpload } from '@fortawesome/free-solid-svg-icons';

const Home = ({navigation})=>{

  let tflite = new Tflite();
  const [imageUri, setImageUri] = useState(null);
  const [imageSte, setImageSte] = useState(null);

  tflite.loadModel({
    model: 'MobileNet-Modi.tflite',
    labels: 'Stem_Model.txt',
    numThreads: 1,
  }, (err, res) => {
    if (err) console.log(err);
    else console.log(res);
  });

  const runModel = () => {
    if (!imageUri) {
      alert('Upload an image first');
      return;
    }
  
    tflite.runModelOnImage({
      path: imageUri,
      inputShape: [1, 224, 224, 3],
      imageMean: 128,
      imageStd: 128,
      outputType: 'float32',
    }, (err, res) => {
      if (err) console.log(err);
      else {
        console.log(res);
        setImageSte(res[0].label);
      } 
    });
  }

  const selectImage = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'back' }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = response.assets[0].uri;
        setImageUri(source);
      }
    });

    clear()

  };

  const launchImageLibraryHandler  = () => {
    console.log('launching image library...');
    launchImageLibrary({mediaType: 'photo'}, (response) => {
      console.log('image library response:', response);
      if (response.assets && response.assets.length > 0) { // added condition to check if response.assets is not empty
        const source = response.assets[0].uri;
        if (source) {
          setImageUri(source);
          console.log('setting imageUri:', source);
        }
      } else {
        console.log('User did not select an image.');
      }
    });

    clear()
  };

  const clear = () => {
    setImageSte(null);
    setImageUri(null);
  };

const DisplayText = () => {

  if(imageSte === 'Final Stage'){
    return (
      <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>රෝගය අවසාන අදියරෙහි පවතින කුරුදු කදක් වේ</Text>
        <Text style={styles.description}>මෙම අදියරෙහි පවතින කුරුදු කන්දන් කිසිදු කුරුදු නිශ්පාදන 
          කටයුත්තක් සදහා භාවිතා කල නොහැකි වේ. මෙවැනි කන්දන් ශාකයෙන් කපා ඉවත් කල යුතු වේ. </Text>
      </View>
      </View>
    );
  }else if(imageSte === 'Healthy Stage'){
    return (
      <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>නීරෝගී තත්වයෙහි පවතින කුරුදු කදක් වේ</Text>
        <Text style={styles.description}>මෙම අදියරෙහි පවතින කුරුදු කන්දන් හොදම තත්වයේ කුරුදු නිශ්පාදන නිපදවීම සදහා 
          භාවිතා කල හැකි වේ. හොද තත්වයේ කුරුදු කූරු නිශ්පාදනය සදහා මෙම කුරුදු කදන් භාවිත කල හැකි වේ.</Text>
      </View>
      </View>
    );
  }
  else if(imageSte === 'Initial Stage'){
    return (
      <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>රෝගය මුල් අදියරෙහි පවතින කුරුදු කදක් වේ</Text>
        <Text style={styles.description}>මෙම අදියරෙහි පවතින කුරුදු කන්දන් සහිත ශාක සදහා</Text>
      </View>
      </View>
    );
  }
  else if(imageSte === 'Middle Stage'){
    return (
      <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>රෝගය මධ්‍යස්ථ අදියරෙහි පවතින කුරුදු කදක් වේ</Text>
        <Text style={styles.description}>Middle Stage</Text>
      </View>
      </View>
    );
  }
  else if(imageSte === 'Not a Cinnamon Stem'){
    return (
      <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>කුරුදු කදක් නොවේ</Text>
        <Text style={styles.description}>කුරුදු කදක රූපයක් ඇතුලත් කරන්න.</Text>
      </View>
      </View>
    );
  }
}

console.log('imageUri:', imageUri);

    return (
      <LinearGradient colors={['#C4A484', '#fff']} style={{flex: 1}}>
        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}} >
            <TouchableOpacity onPress={launchImageLibraryHandler} style={styles.uploadButton}>
              <FontAwesomeIcon icon={ faUpload } style={{color: "#FFFFFF"}} />
              <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Upload</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cameraButton} onPress={selectImage}>
              <FontAwesomeIcon icon={ faCameraRetro } style={{color: "#FFFFFF"}} />
              <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Capture</Text>
            </TouchableOpacity>
          </View>
            <View style={{ flex: 1, alignItems: 'center'}}>
                <View style={{ height: 30 }} />
                {imageUri ? 
                  <Image source={{uri: imageUri}} style={{ width: 300 , height: 300, borderRadius: 10, borderWidth: 5, borderColor: '#C4A484'}} />
                : 
                  <Image source={require('../assets/images/Wiki_no_image.png')} style={{ width: 300 , height: 300}} />
                }
                <View style={{ height: 10 }} />
                  <TouchableOpacity style={styles.button} onPress={runModel}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Predict</Text>
                  </TouchableOpacity>
                <View style={{ height: 10 }} />
                  {imageSte ? 
                    <DisplayText />
                  : 
                    null
                  }
                {console.log('rendering Image component...')}
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
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight:20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    //textAlign: 'center',
  },
  card: {
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  uploadButton: {
    //position: 'absolute',
    top: 20,
    left: 20,
    width: 80,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5C4033',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraButton: {
    //position: 'absolute',
    top: 20,
    right: 20,
    width: 80,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5C4033',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;