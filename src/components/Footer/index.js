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
      },
      {
        nome: "Nike2",
      },
      {
        nome: "Nike3",
      },
      {
        nome: "Nike4",
      },
    ]


export default function Footer() {
 return (
   <View>
      <Text style={style.title}>QUE TAL ESSES AQUI!</Text>
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={style.M_tenis}>
            <Tenis img={require('../../assets/1.png')} cost="110,00" >
              {NomeTenis[0].nome}
            </Tenis>
          </View>
          <View style={style.M_tenis}>
            <Tenis img={require('../../assets/5.png')} cost="110,00" >
              {NomeTenis[1].nome}
            </Tenis>
          </View>
          <View style={style.M_tenis}>
            <Tenis img={require('../../assets/3.png')} cost="110,00" >
              {NomeTenis[2].nome}
            </Tenis>
          </View>
          <View style={style.M_tenis}>
            <Tenis img={require('../../assets/6.png')} cost="110,00" >
              {NomeTenis[3].nome}
            </Tenis>
          </View>
        </ScrollView>
      </View>
   </View>
  );
}