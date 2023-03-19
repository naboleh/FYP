/*
Page 6E
*/
import React, {useRef} from 'react';
import {
  ImageBackground,
  View,
  Text,
  Button,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import Page6Gif from '../backgrounds/p6BG.gif';
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

export default Page6E = ({navigation}) => {
    return (
    <View style={styles.container}>
      <FadeInView>
        <ImageBackground source={Page6Gif} style={styles.landingBG}>
          <Text style={styles.P6text}>
          When the King heard that suggestion, he immediately instructed people to cut down banana trees and asked them to line them up along the coast. Within hours, a row of chopped banana trees can be seen lined along the shoreline.          
          </Text>
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn6} 
            onPress={() => navigation.navigate('Page7E')}>
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