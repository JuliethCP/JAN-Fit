import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Rutinas = ({ route }) => {
  const { titulo } = route.params;

  const rutinasData = [
    // Datos de las rutinas
  ];

  const renderRutina = ({ item }) => {
    return (
      <View style={styles.rutinaContainer}>
        <Text style={styles.rutinaName}>{item.nombrerutina}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailTitle}>Tiempo de la rutina:</Text>
          <View style={styles.detailItem}>
            <Icon name="clock-o" size={16} color="#888" />
            <Text style={styles.detailText}>{item.duracion}</Text>
          </View>
          <Text style={styles.detailTitle}>Tiempo de descanso:</Text>
          <View style={styles.detailItem}>
            <Icon name="clock-o" size={16} color="#888" />
            <Text style={styles.detailText}>{item.tiempodescanso}</Text>
          </View>
          <Text style={styles.detailTitle}>Tipo:</Text>
          <View style={styles.detailItem}>
            <Icon name="tag" size={16} color="#888" />
            <Text style={styles.detailText}>{item.tipo}</Text>
          </View>
          <Text style={styles.detailTitle}>Nivel:</Text>
          <View style={styles.detailItem}>
            <Icon name="star" size={16} color="#888" />
            <Text style={styles.detailText}>{item.nivel}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
      <FlatList
        data={rutinasData}
        renderItem={renderRutina}
        keyExtractor={(item) => item.id.toString()}
        style={{ alignSelf: 'stretch' }} // Agrega el estilo alignSelf
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    backgroundColor: '#fff',
    justifyContent: 'flex-start', // Alinea el contenido al principio del contenedor
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rutinaContainer: {
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 16,
  },
  rutinaName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsContainer: {
    marginTop: 8,
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 14,
    marginLeft: 4,
  },
});

export default Rutinas;
