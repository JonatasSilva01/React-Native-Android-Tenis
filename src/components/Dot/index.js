import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


const style = StyleSheet.create({
    pontosCoresContainer: {
        width: Dimensions.get('window').width * 0.050,
        height: Dimensions.get('window').width * 0.050,
        borderRadius: Dimensions.get('window').width * 0.050 / 2,
        marginHorizontal:'2.5%',
        elevation: 5,
    }
});


export default function Dot(props) {
 return (
    <View style={[style.pontosCoresContainer, {backgroundColor: props.color}]} />
  );
}