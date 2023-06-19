import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

const Rutinas = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { tipo } = route.params;
  
  const [rutinasData, setRutinasData] = useState([]);

  useEffect(() => {
    fetch(`https://896e-190-211-119-6.ngrok.io/api/rutinas/tipo/${tipo}`)
      .then(response => response.json())
      .then(data => {
        setRutinasData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [tipo]);

  const handleRutinaPress = (nombre) => {
    navigation.navigate('EjercicioRutinas', { nombre });
  };

  const renderRutina = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.rutinaContainer}
        onPress={() => handleRutinaPress(item.nombrerutina)}>
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
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tipo}</Text>
      <FlatList
        data={rutinasData}
        renderItem={renderRutina}
        keyExtractor={(item) => item.id.toString()}
        style={{ alignSelf: 'stretch' }}
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
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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
