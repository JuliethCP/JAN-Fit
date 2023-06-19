import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TiposRutinas = () => {
  const tiposRutinas = [
    'cardio',
    'entrenamiento funcional',
    'tonificación muscular',
    'resistencia',
    'fuerza',
    'por musculos'
  ];

  const screenWidth = Dimensions.get('window').width;
  const squareSize = screenWidth / 2 - 20; // Dividir en dos columnas y restar el margen

  const navigation = useNavigation();

  const handleTipoRutinaPress = (tipo) => {
    navigation.navigate('Rutinas', { tipo });
  };

  return (
    <View style={styles.container}>
  

      <View style={styles.gridContainer}>
        {tiposRutinas.map((tipo, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.square, { width: squareSize, height: squareSize }]}
            onPress={() => handleTipoRutinaPress(tipo)}
          >
            <AntDesign name="right" size={24} color="black" />
            <Text style={styles.tipoText}>{tipo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: 'lightblue',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  tipoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'black',
  },
});

export default TiposRutinas;
