import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Rutinas = ({ route }) => {
  const { titulo } = route.params;

  const rutinasData = [
    {
      "id": 2,
      "nombrerutina": "Rutina de cardio",
      "duracion": "00:30:00",
      "tiempodescanso": "00:02:00",
      "tipo": "cardio",
      "nivel": "principiante"
    },
    {
      "id": 3,
      "nombrerutina": "Rutina de entrenamiento funcional",
      "duracion": "00:40:00",
      "tiempodescanso": "00:00:40",
      "tipo": "entrenamiento funcional",
      "nivel": "principiante"
    },
    {
      "id": 4,
      "nombrerutina": "Rutina de tonificación muscular",
      "duracion": "00:40:00",
      "tiempodescanso": "00:01:00",
      "tipo": "tonificación muscular",
      "nivel": "principiante"
    },
    {
      "id": 5,
      "nombrerutina": "Rutina de entrenamiento de resistencia",
      "duracion": "00:40:00",
      "tiempodescanso": "00:00:40",
      "tipo": "resistencia",
      "nivel": "principiante"
    },
    {
      "id": 6,
      "nombrerutina": "Rutina de entrenamiento de cuerpo completo",
      "duracion": "00:50:00",
      "tiempodescanso": "00:01:00",
      "tipo": "cuerpo completo",
      "nivel": "principiante"
    },
    {
      "id": 7,
      "nombrerutina": "Rutina de entrenamiento de piernas",
      "duracion": "00:40:00",
      "tiempodescanso": "00:01:00",
      "tipo": "piernas",
      "nivel": "principiante"
    },
    {
      "id": 8,
      "nombrerutina": "Rutina de entrenamiento de brazos",
      "duracion": "00:40:00",
      "tiempodescanso": "00:00:40",
      "tipo": "brazos",
      "nivel": "principiante"
    },
    {
      "id": 9,
      "nombrerutina": "Rutina de entrenamiento de espalda",
      "duracion": "00:40:00",
      "tiempodescanso": "00:01:00",
      "tipo": "espalda",
      "nivel": "principiante"
    },
    {
      "id": 10,
      "nombrerutina": "Rutina de entrenamiento de pecho",
      "duracion": "00:40:00",
      "tiempodescanso": "00:01:00",
      "tipo": "pecho",
      "nivel": "principiante"
    }

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
