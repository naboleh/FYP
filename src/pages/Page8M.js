/*
Page 8M
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

export default Page8E = ({navigation}) => {
    return (
    <View style={styles.container}>
      <FadeInView>
        <ImageBackground source={require('../backgrounds/p8BG.gif')} style={styles.landingBG}>
          <Text style={styles.P8Mtext}>
          Rakyat Singapura disambut dengan penuh kegembiraan. Akhirnya, Singapura selamat dari serangan ikan todak. Baginda memuji-muji akan kecerdikan Hang Nadim. Lalu baginda menjemput Hang Nadim ke istana untuk kurniakan hadiah penganugerahan.
          </Text>          
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn8M} 
            onPress={() => navigation.navigate('Page9M')}>
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