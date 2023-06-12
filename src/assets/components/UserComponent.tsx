import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {subColor, textColor} from './color';

type UserComponentPros = {
  textHi: string;
  userName: string;
};
const UserComponent: React.FC<UserComponentPros> = ({textHi, userName}) => {
  return (
    <View style={styles.root}>
      <View style={styles.contaier}>
        <Image style={styles.avatar} source={require('../images/Avatar.png')} />
        <View style={{marginLeft: 8}}>
          <Text style={styles.textHi}>{textHi}</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      </View>
      <View style={styles.root}><Image style={styles.icon} source={require('../images/Notify.png')} />
      <Image style={styles.icon} source={require('../images/menu.png')} /></View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    // marginTop: 30
    // justifyContent: 'center',
    justifyContent: "space-between",
    alignItems: 'center'
    
  },
  contaier: {
    flexDirection: 'row',
    // marginTop: 30,
  },
  avatar: {
    width: 45,
    height: 45,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft:16
  },
  textHi: {
    fontSize: 16,
    color: subColor,
  },
  userName: {
    fontSize: 18,
    color: textColor,
    fontWeight: '600',
  },
});
export default UserComponent;
