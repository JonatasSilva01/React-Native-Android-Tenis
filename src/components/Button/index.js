import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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


export default function Button(props) {
 return (
   <View style={style.container}>
       <TouchableOpacity style={style.btnContainer} onPress={props.clicou}>
            <Text style={style.title}>COMPRAR</Text>
       </TouchableOpacity>
   </View>
  );
}

{/*
    Nesse arquivo eu fiz um botão de compra na hora que o usuario apertar esse botão ele vai acionar
    a referencia da Propriedade do componente "onClick" e vai retornar uma menssagem de "comprou".

    Esse botão vem do react native chamado TouchableOpacity.
*/}