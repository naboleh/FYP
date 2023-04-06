/*
Page 3E
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
import Page3Gif from '../backgrounds/p3BG.gif';
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
var read = new Sound('p3e.m4a', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // when loaded successfully
  console.log('loaded successfully');
});

///////////////////

export default Page3E = ({navigation}) => {
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
        <ImageBackground source={Page3Gif} style={styles.landingBG}>
          <Text style={styles.P3text}>
          That incident shocked the King as it caused many injuries. The King then went down to the beach to see the tragedy for himself. When the King arrived at the beach, the sight of his people hurt as a result of the incident made him feel very sorrowful.
          </Text>
          <View>
          <TouchableOpacity style={styles.AudioBtnP3} 
            onPress={playPause}>
              <Text style={styles.AudioText}>
              Read
              </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn3E} 
            onPress={() => navigation.navigate('Page4E')}>
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

