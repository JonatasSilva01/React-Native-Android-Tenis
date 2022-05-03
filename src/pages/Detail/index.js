import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const LISTSHOES = require('../../mock/Dados');

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
    headerTitle: 'Detalhes do Produto',
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
          <Text style={[style.title, { fontSize: 24 }]}>R${LISTSHOES[0].preco}</Text>
        </View>

        <View style={{opacity: 0.4}}>
          <Text style={[style.title, { fontSize: 30 }]}>{LISTSHOES[0].titulo}</Text>
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
            {LISTSHOES[0].titulo}
          </Text>
          <Text style={style.textContent}>
            {LISTSHOES[0].desc}
          </Text>
          <Text style={style.textList}>
            {LISTSHOES[0].category}
          </Text>
          <Text style={style.textList}>
            {LISTSHOES[0].material}
          </Text>
        </View>

       <Button onClick={() => alert('Comprou!')} />

        <View style={style.line} />

        <Footer />

      </View>
   </ScrollView>
  );
}