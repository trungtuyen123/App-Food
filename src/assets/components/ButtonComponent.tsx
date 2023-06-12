import React from "react";
import { TouchableOpacity,Text, Alert, StyleSheet } from "react-native";

type ButtonConponentPros = {
    text : string,
    textOnPress: string,
    colorCode:string,
    textTolorCode:string
}

const ButtonConponent: React.FC<ButtonConponentPros> = ({text,textTolorCode, textOnPress,colorCode}) => {
    const handlePress = () => {
        Alert.alert(textOnPress)
    }
    return (
    <TouchableOpacity style={{backgroundColor: colorCode,
        alignItems: 'center',
        padding: 8,
        height: 50,
        marginHorizontal: 0,
        borderRadius: 30,
        }} onPress={ handlePress}>
        <Text style={{color:textTolorCode,
        fontSize: 16,
        textAlign:'right',
        marginTop:4,
        fontWeight: '500',}}>{text}</Text>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create ({
    Button: {
        backgroundColor: 'colorCode',
        alignItems: 'center',
        padding: 8,
        height: 50,
        marginHorizontal: 20,
        borderRadius: 30,
        // marginTop: 30
        
    },
    textButton: {
        color: 'white',
        fontSize: 16,
        textAlign:'right',
        marginTop:4,
        fontWeight: '500',
    },
})
export default ButtonConponent;     