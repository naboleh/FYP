/*
Page 4M
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
var read = new Sound('p4m.m4a', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // when loaded successfully
  console.log('loaded successfully');
});

///////////////////

export default Page4M = ({navigation}) => {
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
        <ImageBackground source={require('../backgrounds/p4BG.gif')} style={styles.landingBG}>
          <Text style={styles.P4textM}>
          Maka Raja Singapura mengarahkan orang untuk berbaris di pantai, untuk membuat pendinding dari serangan ikan todak. Namun usahanya gagal dan semakin ramai lagi rakyat mati ditikam oleh ikan todak. Keadaan ini membuatkan Raja Singapura bertambah marah.          
          </Text>
          <View>
          <TouchableOpacity style={styles.AudioBtnP4E} 
            onPress={playPause}>
              <Text style={styles.AudioText}>
              Baca
              </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn4} 
            onPress={() => navigation.navigate('Page5M')}>
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

