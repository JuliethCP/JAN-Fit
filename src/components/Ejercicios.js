import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Ejercicios = ({ route }) => {
  const { ejercicios } = route.params || {}; // Asigna un objeto vacío como valor predeterminado si route.params es undefined
  const [exerciseInfo, setExerciseInfo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchExerciseInfo();
  }, []);

  const fetchExerciseInfo = async () => {
    try {
      const response = await axios.get('https://eaea-190-211-119-6.ngrok.io/api/ejercicios');
      const data = response.data;

      // Verificar si ejercicios está definido y no es undefined
      if (ejercicios && Array.isArray(ejercicios)) {
        // Filtrar los ejercicios que coinciden con los nombres recogidos
        const filteredExercises = data.filter((ejercicio) =>
          ejercicios.includes(ejercicio.ejercicio)
        );
        setExerciseInfo(filteredExercises);
      }
    } catch (error) {
      alert('Error.');
      console.error(error);
    }
  };

  const handleExercisePress = (ejercicio) => {
    navigation.navigate('InfoEjercicios', { ejercicio });
  };

  const renderExercise = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.exerciseContainer}
        onPress={() => handleExercisePress(item)}
      >
        <Text style={styles.exerciseName}>{item.ejercicio}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicios</Text>
      <FlatList
        data={exerciseInfo}
        renderItem={renderExercise}
        keyExtractor={(item) => item.uuid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exerciseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
  },
  exerciseName: {
    fontSize: 16,
  },
});

export default Ejercicios;
