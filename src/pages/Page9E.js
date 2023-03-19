/*
Page 9E
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
          However, back at the palace, the state officials envy Hang Nadim’s brilliance. They were afraid Hang Nadim would take their place as the King’s advisors and would eventually have more influence and power than them. The envious state officials manage to convince the King that Hang Nadim would one day take over him and the King would lose all his power.
          </Text>          
          <View style={styles.nextBtnContainer}>
          <TouchableOpacity style={styles.nextBtn9} 
            onPress={() => navigation.navigate('Page10E')}>
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