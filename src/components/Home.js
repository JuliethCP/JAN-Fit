import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Home = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const response = await axios.get('https://wger.de/api/v2/exercise/', {
        headers: {
          'Authorization': '1234567890abcde'
        },
        params: {
          'language': 2,
          'limit': 10
        }
      });
      setExercises(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const renderExercise = ({ item }) => {
    return (
      
      <TouchableOpacity
        onPress={() => navigation.navigate('ExerciseDetail', { exercise: item })}
        style={styles.exerciseContainer}
      >
        <Text style={styles.exerciseName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise List</Text>
      <FlatList
        data={exercises}
        renderItem={renderExercise}
        keyExtractor={(item) => item.id.toString()}
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
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  exerciseName: {
    fontSize: 16,
  },
});

export default Home;