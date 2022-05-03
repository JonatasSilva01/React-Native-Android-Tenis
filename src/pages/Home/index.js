import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import Tenis from '../../components/Tenis';

const LISTSHOES = require('../../mock/Dados')

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


export default function Home() {

  const navigation = useNavigation();
  const LISTADETENIS = LISTSHOES.map((item) => (
    <Tenis img={item.img} cost={item.preco} onClick={() => navigation.navigate('Detail')}>{item.titulo}</Tenis>    
  ))

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
          {LISTADETENIS}
        </ScrollView>
      </View>
     </View>
  );
}