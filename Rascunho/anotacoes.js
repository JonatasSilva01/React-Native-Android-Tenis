{/*
<FlatList
                data={produtos}
                keyExtractor={item=>item.id}
                renderItem={({item}) => 
                    <View>
                        <Image 
                            source={item.img}
                            style={style.ShoesImg}
                        />
                        <Text>{filterDesc(item.titulo)}</Text>
                        <View style={{opacity: 0.4}}>
                            <Text style={style.shoesText}>{item.cost}</Text>
                        </View>
                    </View>}
        />

        /*
            eu utilizei o flat list porem ele apareceu como se fosse um botão inteiro.
            ele não pegou cada elemento da lista.
        

import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;


import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

const style = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ShoesImg: {
        width: 175,
        height: 175
    },
    shoesText:{
        fontSize: 16
    },
})

const produtos = [
    {
        id: '01',
        img: require('../../assets/1.png'),
        titulo: 'nike1',
        cost: "50",
    },
    {
        id: '02',
        img: require('../../assets/2.png'),
        titulo: 'nike2',
        cost: "50",
    },
    {
        id: '03',
        img: require('../../assets/3.png'),
        titulo: 'nike3',
        cost: "40",
    },
    {
        id: '04',
        img: require('../../assets/4.png'),
        titulo: 'nike4',
        cost: "20",
    },
    {
        id: '05',
        img: require('../../assets/5.png'),
        titulo: 'nike5',
        cost: "10",
    },
    {
        id: '06',
        img: require('../../assets/6.png'),
        titulo: 'nike6',
        cost: "10",
    },
]

export default function Tenis(props) {
    function filterDesc(desc){
        if(desc.length < 27){
            return desc
        }
  
        return `${desc.substring(0, 15)}...`
    }
    
 return (
   <TouchableOpacity style={style.container} onPress={props.onClick}>
        <FlatList
                data={produtos}
                keyExtractor={item=>toString(item.id)}
                renderItem={({item}) => 
                    <View>
                        <Image 
                            source={item.img}
                            style={style.ShoesImg}
                        />
                        <Text>{filterDesc(item.titulo)}</Text>
                        <View style={{opacity: 0.4}}>
                            <Text style={style.shoesText}>{item.cost}</Text>
                        </View>
                    </View>}
        />
   </TouchableOpacity>
  );
}


    Nesse arquivo eu fiz um botão com a Imagem do Tenis, Titulo do Tenis e quanto ele custa.
    Para que ele apareça na tela tive que criar as propriedades e passar a referencia da Imagem,
    titulo e quanto ele custa, as propriedades que eu criei foi:
        - img
        - cost
    eu coloquei 2 porque "children" é a referencia de <Text> quando escrevemos algo dentro dele.
    e para pegar esse valor temos que chamar a propriedade e passar children seria assim:
        "props.children".

    Nesse arquivo ainda fiz uma função chamada filterDesc que ele pega a descrição do titulo.
    se o numero de caracter do titulo for menor do que 27 ele vai retornar a desc se não a descrição
    vai retornar descrição com a subtring ("O método substring() retorna o trecho de uma string de acordo
    com os números informados por parâmetro") entre 0 a 22 caractere. e no final dessa string ele retorna
    tres pontinhos"..." dizendo que pode continuar.
*/}
{/*
    Eu consegui renderizar o FlatList só que houve um problema na hora que eu clico ele retorna a lista
    inteira e não um objeto da lista eu tenho que descobrir como posso renderizar somente o id do objeto
    sem eu redenrizar o objeto interio.
*/}