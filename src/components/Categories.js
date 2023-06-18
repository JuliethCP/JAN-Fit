import React from 'react';
import { View, Text, Image } from 'react-native';

const Categories = (  ) => {
 
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>
        hola
      </Text>
      <Image
        source={{ uri: 'https://i.imgur.com/YFS5Z2r.gif' }}
        style={{ width: 500, height: 500 }}
      />
      {/* Aquí puedes mostrar los ejercicios específicos para el tipo seleccionado */}
    </View>
  );
};

export default Categories;
