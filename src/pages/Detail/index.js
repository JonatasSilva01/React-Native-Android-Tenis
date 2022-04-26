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

const NameAndPrice =
[
  {
    preco: "280,00",
    nome: "Nike 1",
    img: require('../../assets/detail.png'),
    desc: "O brilho perdura no Nike Air Force 1 '07 LV8, o original do basquete que dá um toque renovado naquilo que você conhece bem: sobreposições costuradas, cores vibrantes e o nível certo de estilo do basquete para chamar a atenção. O couro polido acrescenta uma textura fina, enquanto o bolso oculto mantém os seus objetos seguros.",
    Categoria: "Amortecer seu caminhar e sua corrida nos dias de treino.",
    Mateiral: "flexivel e duradouro para pessoas que amam esportes.",
  },
]

const TamanhosDosTenis = ["40","39","36","31"]

export default function Detail({navigation}){

  navigation.setOptions({
    headerTitle: 'Compras',
  });


 return (
   <ScrollView style={style.container}>
     <Image
        source={NameAndPrice[0].img}
        style={style.image}
        resizeMode={"cover"}
      />

      <View>

        <View>
          <Text style={[style.title, { fontSize: 24 }]}>R${NameAndPrice[0].preco}</Text>
        </View>

        <View style={{opacity: 0.4}}>
          <Text style={[style.title, { fontSize: 30 }]}>{NameAndPrice[0].nome}</Text>
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
            {/*
              para eu aplicar o estiolo de auto clicavel passando o estilo de uma propriedade para a outra
              sendo que eu tenha que desativar o estilo da anterior, assim eu possa fazer uma condição de 
              if e else para aplicar essa regra de estilização.
            */}
        </View>

        <View style={style.textContent}>
          <Text style={style.textTitle}>
            {NameAndPrice[0].nome}
          </Text>
          <Text style={style.textContent}>
            {NameAndPrice[0].desc}
          </Text>
          <Text style={style.textList}>
            {NameAndPrice[0].Categoria}
          </Text>
          <Text style={style.textList}>
            {NameAndPrice[0].Mateiral}
          </Text>
        </View>

       <Button clicou={() => alert('Comprou!')} />

        <View style={style.line} />

        <Footer />

      </View>
   </ScrollView>
  );
}

{/*
  Esse arquivo é a pagina de Detalhes dos produto é aonde que o usuario vai visualisar o "produto" com mais
  tranquilidade, e escolher as opições de cores e tamanho,e tbm é onde que vai ler a descrição desse "produto".
  Dentro desse arquivo é onde vai alocar todas as funcionalidades que o aplicativo vai conter como botões e
  Lista.
*/}
 {
   /*
      Eu não fiz cada pagina para cada tipo de tenis porque acho que vou precisar de mais tempo para fazer o
      back end e pensar em uma forma de utilizar alguma funcionalidade semelhante que quando eu aperto em um
      botão de cada tenis eu mude a referencia das props do componente Tenis e de Detail mudando a imamgem,
      Titulo, descrição e preço, porque assim eu deixo meu código muito limpo e favoravel a minha aplicação,
      e aprendendo tbm a reaproveitar código. 
   */
 }
 {
   // Fazer a SIMULADO DE 2 PONTOS DE MATEMATICA E PORTUGUÊS
 }
