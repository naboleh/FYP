/*
The landing page that leads to page 1
*/
import React, {useRef} from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';

import styles from '../components/styles';

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

export default function LandingPage ({navigation}) {
    return (
    <View style={styles.container}>
      <FadeInView>
        <ImageBackground source={require('../backgrounds/landingBG.gif')} style={styles.landingBG}>
          <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.startBtn} 
            onPress={() => navigation.navigate('Page1M')}>
              <Text style={styles.btnText}>
                Melayu
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.startBtn} 
            onPress={() => navigation.navigate('Page1E')}>
              <Text style={styles.btnText}>
                English
              </Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </FadeInView>
    </View>
    );
  }

