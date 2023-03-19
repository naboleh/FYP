/*
End Page E
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

export default Page14E = ({navigation}) => {
    return (
    <View style={styles.container}>
      <FadeInView>
        <ImageBackground source={require('../backgrounds/endEBG.gif')} style={styles.landingBG}>
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.HomeBtn} 
            onPress={() => navigation.navigate('LandingPage')}>
              <Text style={styles.btnText}>
              Back To Start
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.QuizBtn} 
            onPress={() => navigation.navigate('QuizE')}>
              <Text style={styles.btnText}>
              Quiz
              </Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </FadeInView>
    </View>
    );
  }