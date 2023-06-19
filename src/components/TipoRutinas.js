import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TiposRutinasComponent = () => {
  const tiposRutinas = [
    'Cardio',
    'Entrenamiento Funcional',
    'Tonificación Muscular',
    'Resistencia',
    'Fuerza',
    'Por Músculos'
  ];

  const screenWidth = Dimensions.get('window').width;
  const squareSize = screenWidth / 2 - 20; // Dividir en dos columnas y restar el margen

  const navigation = useNavigation();

  const handleTipoRutinaPress = (tipo) => {
    navigation.navigate('Rutinas', { titulo: tipo });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipos de Rutinas</Text>
      <View style={styles.gridContainer}>
        {tiposRutinas.map((tipo, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.square, { width: squareSize, height: squareSize }]}
            onPress={() => handleTipoRutinaPress(tipo)}
          >
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: 'lightblue',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TiposRutinasComponent;
