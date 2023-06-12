import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {primaryColor, subColor, textColor} from './color';
type CardProductComponentPros = {
  imageSource: any;
  title: string;
  subtitle: string;
  price: number;
  // typecomponent: string;
};
const CardProductComponent: React.FC<CardProductComponentPros> = ({
  subtitle,
  imageSource,
  title,
  price,
}) => {
  return (
    <View style={{paddingHorizontal:8, width: "50%",}}>
      <View
      style={{
        // marginRight: 10,
        // paddingHorizontal: 10,
        // 
        backgroundColor: 'white',
        borderRadius: 16,
      }}>
      <Image style={styles.image} source={imageSource} />
      <View style={{padding: 16}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View
          style={{
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.price}>{`$${price}`}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: primaryColor,
              borderRadius: 100,
              width: 32,
              height: 32,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{ height: 18, alignItems:'stretch'}}
              source={require('../images/IconPlus.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: textColor,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: subColor,
  },
  price: {
    fontSize: 20,
    fontWeight: '800',
    color: textColor,
  },
  image: {
    borderRadius: 8,
    width:'100%'
  },
});
export default CardProductComponent;
