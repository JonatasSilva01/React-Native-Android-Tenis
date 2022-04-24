import React from 'react';
import { View, Text } from 'react-native';

export default function Dados() {
  const NomeTenis = 
  [
    {
      nome: "Nike",
      descricao: "asdasdaksdasdasdasdasdasdasdasd."
    },
  ];

  function NomesDosTenis(){
    return (
      <View>
        <Text>{NomeTenis[0].nome}</Text>
        <Text>{NomeTenis[0].descricao}</Text>
      </View>
    );
  }

 return (
    <View>
      {NomesDosTenis}
    </View> 
  );
}