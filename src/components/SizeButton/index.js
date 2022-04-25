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

{/*
    Nesse arquivo eu fiz um botão dos tamanhos disponiveis de Tenis para escolher. A funcionalidade desse
    arquivo tem como objetivo de pegar a propriedade passada para o SizeButton para estilizar esse botão
    eu tive que fazer a propriedade "bgColor" e passar a referencia de uma cor qualquer a que eu peguei foi
    um "preto". um exemplo
                "props"
     <SizeButton bgColor="#17181a">
*/}