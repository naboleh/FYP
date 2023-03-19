/*
Page 7E
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

export default Page7E = ({navigation}) => {
    return (
    <View style={styles.container}>
      <FadeInView>
        <ImageBackground source={require('../backgrounds/p7BG.gif')} style={styles.landingBG}>
          <Text style={styles.P7text}>
          One after another, the swordfishes started getting stuck to the banana tree and eventually, the attacks stopped.          
          </Text>
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn7} 
            onPress={() => navigation.navigate('Page8E')}>
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