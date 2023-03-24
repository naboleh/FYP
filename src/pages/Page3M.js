/*
Page 3M
*/
import React, {useRef,useEffect} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Button,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import styles from '../components/styles';
import Sound from 'react-native-sound';

/*fade in to landing page when loading*/
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

 React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000, //in millisec
        useNativeDriver: true, // Add this line
      }
    ).start();
  }, [fadeAnim])

  return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

//Audio Component//

Sound.setCategory('Playback');
var read = new Sound('p3m.m4a', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // when loaded successfully
  console.log('loaded successfully');
});

///////////////////

export default Page3M = ({navigation}) => {
  useEffect(() => {
    read.setVolume(1);
    return () => {
      read.release();
    };
  }, []);

  const playPause = () => {
    read.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };

    return (
    <View style={styles.container}>
      <FadeInView>
        <ImageBackground source={require('../backgrounds/p3BG.gif')} style={styles.landingBG}>
          <Text style={styles.P3textM}>
          Peristiwa itu memeranjatkan Raja Singapura kerana ramai telah terbunuh. Baginda pun menaiki gajah dan menuju ke pantai untuk melihat sendiri tragedi yang telah menimpa negeri itu. Pantai permai putih yang indah kini bertempiaran dengan mayat dan darah-darah rakyat. Baginda telah mula berasa amat sedih.
          </Text>
          <View>
          <TouchableOpacity style={styles.AudioBtnP3M} 
            onPress={playPause}>
              <Text style={styles.AudioText}>
              Baca
              </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn3} 
            onPress={() => navigation.navigate('Page4M')}>
              <Text style={styles.btnText}>
              {">"}
              </Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </FadeInView>
    </View>
    );
  }

