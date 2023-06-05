import React from 'react';
import { View, Text } from 'react-native';

const Categories = ({ route }) => {
  const { type } = route.params;

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>
        Exercises for {type.name}
      </Text>
      {/* Aquí puedes mostrar los ejercicios específicos para el tipo seleccionado */}
    </View>
  );
};

export default Categories;
