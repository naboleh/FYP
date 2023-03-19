/*
Page 5E
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
import Page5Gif from '../backgrounds/p5BG.gif';
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

export default Page5E = ({navigation}) => {
    return (
    <View style={styles.container}>
      <FadeInView>
        <ImageBackground source={Page5Gif} style={styles.landingBG}>
          <Text style={styles.P5text}>
          However a bright young boy named Hang Nadim came forward to give the King a suggestion. He suggested that it would be wise to line a row of chopped down banana trees along the coast to build a barrier instead.          </Text>
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn5E} 
            onPress={() => navigation.navigate('Page6E')}>
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

