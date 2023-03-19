/*
Page 9M
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

export default Page9E = ({navigation}) => {
    return (
    <View style={styles.container}>
      <FadeInView>
        <ImageBackground source={require('../backgrounds/p9BG.png')} style={styles.landingBG}>
          <Text style={styles.P9text}>
          Pada masa yang sama, para pembesar Singapura berasa sangat iri hati dan dengki dengan kecerdasan Hang Nadim. Mereka risau Hang Nadim akan mengambil tempat mereka sebagai penasihat di-Raja dan beliau akan menjadi lebih berpengaruh dan berkuasa berbanding mereka.
          </Text>          
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn9M} 
            onPress={() => navigation.navigate('Page10M')}>
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