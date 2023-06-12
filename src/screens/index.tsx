import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {textColor} from '../assets/components/color';
import {subColor} from '../assets/components/color';
import ElementSlide from '../assets/components/ElementSlide';
import ButtonConponent from '../assets/components/ButtonComponent';
import {primaryColor} from '../assets/components/color';
const WelcomeScreen = () => {
  return (
    <View
      style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: 355, height: 420, marginBottom: 16}}
        source={require('../assets/images/welcome.png')}
      />
      <ElementSlide />
      <View>
        <View style={{marginBottom: 40, width: 300}}>
          <Text style={styles.titleText}>
            Dont Wanna Make You Have A Bad Day
          </Text>
          <Text style={styles.subText}>
            Our job is delivering a delicious food with fast , free delivery and
            easy.
          </Text>
        </View>
        <ButtonConponent
          text="Get Started"
          textOnPress="Hoàn tất"
          textTolorCode="white"
          colorCode={primaryColor}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    fontSize: 26,
    fontWeight: '600',
    // width: 285,
    textAlign: 'center',
    color: textColor,
    marginTop: 30,
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    fontWeight: '500',
    // width: 285,
    textAlign: 'center',
    color: subColor,
  },
});

export default WelcomeScreen;
