/*
Page 1M
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
import Page1Gif from '../backgrounds/p1BG.gif';

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

export default function Page1M ({navigation}) {
    return (
    <View style={styles.container}>
      <FadeInView>
        <ImageBackground source={Page1Gif} style={styles.landingBG}>
          <Text style={styles.P1text}>
          Singapura sebuah negara yang makmur. Ramai pedagang-pedagang yang berbilang bangsa datang ke Singapura untuk berdagang.
          </Text>
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn1} 
            onPress={() => navigation.navigate('Page2M')}>
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

