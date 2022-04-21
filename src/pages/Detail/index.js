import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  title: {
    fontFamily: 'Anton_400Regular',
    padding: '2%',
  },
  image: {
    height: 300,
    width: '100%',
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingVertical: '2%',
    textAlign: 'center',
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%',
  },  
  textList: {
    fontSize: 16,
    lineHeight: 25,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});



export default function Detail({navigation}){

  navigation.setOptions({
    headerTitle: 'Compras',
  });


 return (
   <ScrollView style={style.container}>
     <Image 
        source={require('../../assets/detail.png')}
        style={style.image}
        resizeMode={"cover"}
      />

      <View>

        <View>
          <Text style={[style.title, { fontSize: 24 }]}>R$280,00[valor do produto]</Text>
        </View>

        <View style={{opacity: 0.4}}>
          <Text style={[style.title, { fontSize: 30 }]}>Nome do produto</Text>
        </View>

        <View style={style.dotContainer}>
          <Dot color="#2379f4" />         
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />         
          <Dot color="#000" />         
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <SizeButton bgColor="#17181a" Color="#FFF">43</SizeButton>
              <SizeButton>39</SizeButton>
              <SizeButton>36</SizeButton>
              <SizeButton>34</SizeButton>
            </ScrollView> 
        </View>

        <View style={style.textContent}>
          <Text style={style.textTitle}>
            Nike Force 90 fortHart
          </Text>
          <Text style={style.textContent}>
            O brilho perdura no Nike Air Force 1 '07 LV8, o original do basquete que dá um toque renovado naquilo que você conhece bem: sobreposições costuradas, cores vibrantes e o nível certo de estilo do basquete para chamar a atenção. O couro polido acrescenta uma textura fina, enquanto o bolso oculto mantém os seus objetos seguros.
          </Text>
          <Text style={style.textList}>
            - Categoria: Amortecer seu caminhar e sua corrida nos dias de treino.
          </Text>
          <Text style={style.textList}>
            - Mateiral: flexivel e duradouro para pessoas que amam esportes.
          </Text>
        </View>

       <Button />

        <View style={style.line} />

        <Footer />

      </View>
   </ScrollView>
  );
}