import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


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
    <TouchableOpacity style={[style.pontosCoresContainer, {backgroundColor: props.color}]} />
  );
}

{/*
    Nesse arquivo eu importei TouchableOpacity para fazer os botãozinhos de cores dos tenis que estarão
    disponiveis na loja para que eles possam ser clicavel. eu importei do react native o Dimensions para
    pegar a largura, altura da tela vezes um numero menor para deixar esses botões pequenos, para arredondar
    tive que pegar a largura e dividir por 2 para arrendodar para metade que seria 50%

    eu aprendi isso no "youtube".
*/}