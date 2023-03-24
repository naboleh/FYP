/*
Page 8E
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
import Page8Gif from '../backgrounds/p8BG.gif';
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
var read = new Sound('p8e.m4a', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // when loaded successfully
  console.log('loaded successfully');
});

///////////////////

export default Page8E = ({navigation}) => {
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
        <ImageBackground source={Page8Gif} style={styles.landingBG}>
          <Text style={styles.P8text}>
          The people started celebrating with joy. At last Singapore has been saved from the attack of the swordfishes. The King praised Hang Nadim for his brilliance and invited him to the palace to receive an award as a token of appreciation.
          </Text>
          <View>
          <TouchableOpacity style={styles.AudioBtnP8E} 
            onPress={playPause}>
              <Text style={styles.AudioText}>
              Read
              </Text>
          </TouchableOpacity>
          </View>          
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn8} 
            onPress={() => navigation.navigate('Page9E')}>
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