import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ShoesImg: {
        width: 175,
        height: 175
    },
    shoesText:{
        fontSize: 16
    },
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default function Tenis(props) {

  function filterDesc(desc){
      if(desc.length < 27){
          return desc
      }

      return `${desc.substring(0, 15)}...`
  }

 return (
   <TouchableOpacity style={styles.container} onPress={props.onClick}>
       <Image 
            source={props.img}
            style={styles.ShoesImg}
       />
       <Text style={styles.shoesText}>
            {filterDesc(props.children)}
        </Text>
       <View style={{opacity: 0.4}}>
            <Text style={styles.shoesText}>{props.cost}</Text>
       </View>
   </TouchableOpacity>
  );
}

{/*
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