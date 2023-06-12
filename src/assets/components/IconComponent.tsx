import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Hoặc chọn một thư viện icon khác
type MyIconComponentPros = {
    name: string,
    size:number,
    color: string
}
const MyIconComponent:React.FC<MyIconComponentPros> = ({ name, size, color }) => {
  return (
    <View>
      <Icon name={name} size={size} color={color} />
    </View>
  );
}

export default MyIconComponent;
