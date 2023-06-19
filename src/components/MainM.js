import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { useNavigation, useTheme } from '@react-navigation/native';

const MainM = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [muscleGroups, setMuscleGroups] = useState([]);

  useEffect(() => {
    fetchMuscleGroups();
  }, []);

  const fetchMuscleGroups = async () => {
    try {
      const response = await axios.get('https://105a-190-211-119-6.ngrok.io/api/grupos_musculares');
      const data = response.data;
      const sortedGroups = data.sort((a, b) => a.grupomuscular.localeCompare(b.grupomuscular)); // Ordenar los grupos alfabéticamente
      setMuscleGroups(sortedGroups);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGroupPress = (grupoMuscular) => {
    const group = muscleGroups.find((group) => group.grupomuscular === grupoMuscular);
    const groupExercises = group ? group.ejerciciosasociados : [];
    navigation.navigate('Ejercicios', { ejercicios: groupExercises });
  };

  const handleRefresh = () => {
    fetchMuscleGroups();
  };

  const renderMuscleGroup = ({ item }) => {
    const { grupomuscular, ejerciciosasociados } = item;

    // Verificar si el objeto tiene las propiedades adecuadas
    if (grupomuscular && ejerciciosasociados) {
      return (
        <TouchableOpacity
          style={[styles.groupContainer, { backgroundColor: colors.card }]}
          onPress={() => handleGroupPress(grupomuscular)}
        >
          <Text style={[styles.groupTitle, { color: colors.text }]}>{grupomuscular}</Text>
        </TouchableOpacity>
      );
    }

    // Si el objeto no tiene las propiedades adecuadas, se muestra un componente vacío
    return null;
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Button title="Refrescar" onPress={handleRefresh} />
      <FlatList
        data={muscleGroups}
        renderItem={renderMuscleGroup}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  groupContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  groupTitle: {
    fontSize: 16,
  },
});

export default MainM;
