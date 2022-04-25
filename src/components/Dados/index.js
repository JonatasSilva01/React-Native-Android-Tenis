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

  {/* esse aquivo eu utilizei para testes. Não tem nada a ver com o projeto */}
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