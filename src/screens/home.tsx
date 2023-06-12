import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import UserComponent from '../assets/components/UserComponent';
import {subColor, textColor} from '../assets/components/color';
import TitleSectionComponent from '../assets/components/TitleSectionComponent';
import CardProductComponent from '../assets/components/CardProductComponent';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MyIconComponent from '../assets/components/IconComponent';
// import {SvgUri} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';
const HomeScreen = () => {
  return (
    <View style={{marginTop: 30}}>
      <UserComponent textHi="Welcome!" userName="Trung Tuyến" />
      <Text style={styles.titleText}>Lets find your best favorite food!</Text>
      <View style={{height: 170}}>
        <Image
          style={styles.imgHome}
          source={require('../assets/images/IMGHOME.png')}
        />
      </View>
      <TitleSectionComponent title="Hot Food" />
      <Text style={{color: subColor, fontSize: 14}}>
        See the most popular food on order
      </Text>
      <View style={{marginTop: 16, flexDirection: 'row', marginHorizontal: -8}}>
        <CardProductComponent
          title="Special Pizza"
          subtitle="With tommato sauce"
          price={12.55}
          imageSource={require('../assets/images/ImgCard.png')}
        />
        <CardProductComponent
          title="Special Dimsum "
          subtitle="With meat filling"
          price={8.95}
          imageSource={require('../assets/images/ImgCard2.png')}
        />
      </View>
      <TitleSectionComponent title="New Menu" />
      <Text style={{color: subColor, fontSize: 14}}>
        See the most popular food on order
      </Text>
      <View style={{marginTop: 16, flexDirection: 'row'}}>
        <CardProductComponent
          title="Special Pizza"
          subtitle="With tommato sauce"
          price={12.55}
          imageSource={require('../assets/images/ImgCard.png')}
        />
        <CardProductComponent
          title="Special Dimsum "
          subtitle="With meat filling"
          price={8.95}
          imageSource={require('../assets/images/ImgCard2.png')}
        />

        <CardProductComponent
          title="Special Dimsum "
          subtitle="With meat filling"
          price={8.95}
          imageSource={require('../assets/images/ImgCard2.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 26,
    fontWeight: '800',
    width: 266,
    color: textColor,
    marginTop: 30,
    marginBottom: 16,
  },
  imgHome: {
    height: '100%',
    width: '100%',
  },
});
export default HomeScreen;
