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