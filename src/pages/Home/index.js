import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import Tenis from '../../components/Tenis';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  header: {
    marginBottom: 8
  },
  image:{
    width: '100%',
    height: 150,
  },
  text: {
    fontSize: 26,
    fontFamily: 'Anton_400Regular',
    marginHorizontal: '1%',
    padding: 5
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  },
});

const screenAndText = 
[
  {
    nome: "ASDJASJDNASLKDNLASNDALSNDLKASNDLAKSNDLKASNDALKSNDALSKNFLANFELLASNA",
    img: require('../../assets/1.png'),
  },
  {
    nome: "Nike 2",
    img: require('../../assets/2.png'),
  },
  {
    nome: "Nike 3",
    img: require('../../assets/3.png'),
  },
  {
    nome: "Nike 4",
    img: require('../../assets/4.png'),
  },
  {
    nome: "Nike 5",
    img: require('../../assets/5.png'),
  },
  {
    nome: "Nike 6",
    img: require('../../assets/6.png'),
  },
]


export default function Home() {

  const navigation = useNavigation();

 return (
   <View style={estilos.container}>
     
     <View style={estilos.header}>
        <Image 
            source={require('../../assets/banner.png')}
            style={estilos.image}
        /> 

        <View style={estilos.textContainer}>
          <Text style={estilos.text}>TENIS</Text>
          <Text style={[estilos.text, {color:'#CECECF'}]}>•</Text>
          <Text style={[estilos.text, {color:'#CECECF'}]}>MASCULINO</Text>
          <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
            <MaterialIcons 
              name='filter-list'
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <View style={estilos.line}/>
        <ScrollView>
          <Text style={estilos.text}>LANÇAMENTOS</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Tenis img={screenAndText[0].img} cost="R$140" onClick={() => navigation.navigate('Detail')}>
              {screenAndText[0].nome}
            </Tenis>
            <Tenis img={screenAndText[1].img} cost="R$1880" onClick={() => navigation.navigate('Detail')}>
              {screenAndText[1].nome}
            </Tenis>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Tenis img={screenAndText[2].img} cost="R$99,80" onClick={() => navigation.navigate('Detail')}>
             {screenAndText[2].nome}
            </Tenis>
            <Tenis img={screenAndText[3].img} cost="R$130,00" onClick={() => navigation.navigate('Detail')}>
              {screenAndText[3].nome}
            </Tenis>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Tenis img={screenAndText[4].img} cost="R$150,00" onClick={() => navigation.navigate('Detail')}>
              {screenAndText[4].nome}
            </Tenis>
            <Tenis img={screenAndText[5].img} cost="R$80" onClick={() => navigation.navigate('Detail')}>
              {screenAndText[5].nome}
            </Tenis>
          </View>

        </ScrollView>
      </View>

        

     </View>
  );
}

{
  /*
    A pagina home tem como objetivo de rederizar as imgens e os tituilos.
    A funcionalidade principal da Home é na hora de clicar no botão touchopacity


    fala tbm do root que ele fala sobre rotas.
  */
}