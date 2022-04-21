import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button() {
 return (
   <View style={style.container}>
       <TouchableOpacity style={style.btnContainer}>
            <Text style={style.title}>COMPRAR</Text>
       </TouchableOpacity>
   </View>
  );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        width: '90%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',     
    },
    title: {
        fontSize: 17,
        color: '#FFF',
    },
});