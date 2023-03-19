/*
Page 10M
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

export default Page10E = ({navigation}) => {
    return (
    <View style={styles.container}>
      <FadeInView>
        <ImageBackground source={require('../backgrounds/p10BG.gif')} style={styles.landingBG}>
          <Text style={styles.P10Mtext}>
          Raja Singapura yang mudah percaya akan hasutan para pembesar tersebut, mengarahkan pembesar supaya membatalkan acara istiadat penganugerahan dan diganti dengan pelaksanaan hukuman mati dikenakan ke atas Hang Nadim. 
          </Text>          
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn10M} 
            onPress={() => navigation.navigate('Page11M')}>
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