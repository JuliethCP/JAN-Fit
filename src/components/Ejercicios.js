import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useTheme } from '@react-navigation/native';

const Ejercicios = ({ route }) => {
  const { ejercicios } = route.params;
  const [exerciseInfo, setExerciseInfo] = useState(null);
  const navigation = useNavigation();
  const { colors } = useTheme();

  useEffect(() => {
    fetchExerciseInfo();
  }, []);

  const fetchExerciseInfo = async () => {
    try {
      const response = await axios.get('https://896e-190-211-119-6.ngrok.io/api/ejercicios');
      const data = response.data;

      // Filtrar los ejercicios que coinciden con los nombres recogidos
      const filteredExercises = data.filter((ejercicio) =>
        ejercicios.includes(ejercicio.ejercicio)
      );
      setExerciseInfo(filteredExercises);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleExercisePress = (ejercicio) => {
    navigation.navigate('Informacion', { ejercicio });
  };

  const handleRefresh = () => {
    fetchExerciseInfo();
  };

  const renderExercise = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.uuid} // Agrega la clave única aquí
        style={[styles.exerciseContainer, { backgroundColor: colors.card }]}
        onPress={() => handleExercisePress(item)}
      >
        <Text style={[styles.exerciseName, { color: colors.text }]}>{item.ejercicio}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Button title="Refrescar" onPress={handleRefresh} color={colors.primary} />
      <FlatList
        data={exerciseInfo}
        renderItem={renderExercise}
        keyExtractor={(item, index) => index.toString()} // Utiliza el índice como clave
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  exerciseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Ejercicios;