import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Ejercicios = ({ route }) => {
  const { ejercicios } = route.params;
  const [exerciseInfo, setExerciseInfo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchExerciseInfo();
  }, []);

  const fetchExerciseInfo = async () => {
    try {
      const response = await axios.get('https://105a-190-211-119-6.ngrok.io/api/ejercicios');
      const data = response.data;

      // Filtrar los ejercicios que coinciden con los nombres recogidos
      const filteredExercises = data.filter((ejercicio) =>
        ejercicios.includes(ejercicio.ejercicio)
      );
      setExerciseInfo(filteredExercises);
    } catch (error) {
      console.error(error);
    }
  };

  const handleExercisePress = (ejercicio) => {
    navigation.navigate('InfoEjercicios', { ejercicio });
  };

  const handleRefresh = () => {
    fetchExerciseInfo();
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
      <Button title="Refrescar" onPress={handleRefresh} />
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