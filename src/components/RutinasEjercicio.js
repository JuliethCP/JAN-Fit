import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RutinasEjercicio = ({ nombre }) => {
  const [rutinasData, setRutinasData] = useState([]);

  useEffect(() => {
    fetch('https://884d-190-211-119-6.ngrok.io/api/rutina_ejercicios')
      .then(response => response.json())
      .then(data => {
        setRutinasData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderRutina = ({ item }) => {
    const ejercicios = item.ejercicios_asociados.split('\n');
    return (
      <TouchableOpacity style={styles.rutinaContainer}>
        <Text style={styles.rutinaName}>{item.nombrerutina}</Text>
        <View style={styles.ejerciciosContainer}>
          {ejercicios.map((ejercicio, index) => (
            <Text key={index} style={styles.ejercicioText}>
              {ejercicio}
            </Text>
          ))}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={rutinasData}
        renderItem={renderRutina}
        keyExtractor={(item, index) => index.toString()}
        style={{ alignSelf: 'stretch' }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  rutinaContainer: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  rutinaName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ejerciciosContainer: {
    marginLeft: 20,
  },
  ejercicioText: {
    marginBottom: 5,
  },
});

export default RutinasEjercicio;
