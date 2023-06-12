import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {primaryColor, textColor} from './color';

type TitleSectionComponentPros = {
  title: string;
};
const TitleSectionComponent: React.FC<TitleSectionComponentPros> = ({
  title,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.buttonAll}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
    textDecorationLine: "underline",
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',

    color: textColor,
  },
  buttonAll: {
    fontSize: 16,
    fontWeight: '600',
    color: primaryColor,
  },
});

export default TitleSectionComponent;
