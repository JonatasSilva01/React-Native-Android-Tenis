import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import Tenis from '../../components/Tenis';
import Dados from '../../components/Dados';

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
            <Tenis img={require('../../assets/1.png')} cost="R$140" onClick={() => navigation.navigate('Detail')}>
              Nike nell blace do canada
            </Tenis>
            <Tenis img={require('../../assets/2.png')} cost="R$1880" onClick={() => navigation.navigate('Detail')}>
              Nike air max 90
            </Tenis>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Tenis img={require('../../assets/3.png')} cost="R$99,80" onClick={() => navigation.navigate('Detail')}>
             Adidas new year
            </Tenis>
            <Tenis img={require('../../assets/4.png')} cost="R$130,00" onClick={() => navigation.navigate('Detail')}>
              Adidas workout
            </Tenis>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Tenis img={require('../../assets/5.png')} cost="R$150,00" onClick={() => navigation.navigate('Detail')}>
              Adidas new blace for autiti
            </Tenis>
            <Tenis img={require('../../assets/6.png')} cost="R$80" onClick={() => navigation.navigate('Detail')}>
              Adidas for new friands
            </Tenis>
          </View>

        </ScrollView>
      </View>

        

     </View>
  );
}