import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Tenis from  '../Tenis/index'

const style = StyleSheet.create({
    M_tenis: {
      marginHorizontal: 10,
    },
    title: {
      fontFamily: 'Anton_400Regular',
      fontSize: 24,
      marginVertical: '2%',
      paddingHorizontal: '2%',
    },
});

    const NomeTenis = 
    [
      {
        nome: "Nike1",
        preco: "110,00",
      },
      {
        nome: "Nike2",
        preco: "110,00",
      },
      {
        nome: "Nike3",
        preco: "110,00",
      },
      {
        nome: "Nike4",
        preco: "110,00",
      },
    ]


export default function Footer() {
 return (
   <View>
      <Text style={style.title}>QUE TAL ESSES AQUI!</Text>
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={style.M_tenis}>
            <Tenis img={require('../../assets/1.png')} cost={NomeTenis[0].preco} >
              {NomeTenis[0].nome}
            </Tenis>
          </View>
          <View style={style.M_tenis}>
            <Tenis img={require('../../assets/5.png')} cost={NomeTenis[1].preco} >
              {NomeTenis[1].nome}
            </Tenis>
          </View>
          <View style={style.M_tenis}>
            <Tenis img={require('../../assets/3.png')} cost={NomeTenis[2].preco} >
              {NomeTenis[2].nome}
            </Tenis>
          </View>
          <View style={style.M_tenis}>
            <Tenis img={require('../../assets/6.png')} cost={NomeTenis[3].preco} >
              {NomeTenis[3].nome}
            </Tenis>
          </View>
        </ScrollView>
      </View>
   </View>
  );
}

{/*
    Nesse aquivo eu aprendi a fazer um ScrollView Horizontal para trazer uma lista de Tenis e Reaproveitando
    Código da pasta Tenis. para fazer esse scroll Horizontal tive que colocar dentro do componente do react native
    "ScrollView" uma propriedade que já vem com ele que é chamada de "horizontal".

    E ainda nesse arquivo apendi a ocutar a barra de Scroll da lista, a  propriedade que ja vem com ele é
    chamada "showsHorizontalScrollIndicator={}" que se voce colocar "false" ele esconde a barra de scroll
    do seu projeto.
*/}