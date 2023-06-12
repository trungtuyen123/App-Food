import React from "react";
import { StyleSheet, View } from "react-native";
import {primaryColor} from './color'

const ElementSlide = () => {
    return(
        <View style={{flexDirection: "row", justifyContent: 'center'}}>
            <View style={styles.ofElement}/>
            <View style={styles.ofElement}/>
            <View style={styles.onElement}/>
        </View>
    )
}
const styles = StyleSheet.create({
    onElement: { width: 10,
        height:10,
        borderRadius: 10,
        backgroundColor: primaryColor,
        marginHorizontal: 4
    },
    ofElement: { width: 10,
        height:10,
        borderRadius: 10,
        backgroundColor: '#C5C4CB',
        marginHorizontal: 4
    }
})

export default ElementSlide