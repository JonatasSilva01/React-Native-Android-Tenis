import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        marginHorizontal: 10,
    },
    text: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

export default function SizeButton(props) {
 return (
   <TouchableOpacity style={[style.container, {backgroundColor: props.bgColor || '#FFF'}]}>
    <Text style={[style.text, {color: props.color || '#ddd'}]}>{props.children}</Text>
   </TouchableOpacity>
  );
}