import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Informacion = ({ route }) => {
  const { ejercicio } = route.params;
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.title, { color: colors.text }]}>{ejercicio.ejercicio}</Text>
      <Image source={{ uri: ejercicio.gif }} style={styles.image} resizeMode="contain" />
      <Text style={[styles.description, { color: colors.text }]}>{ejercicio.descripcion}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 375,
    height: 375,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'justify', // Añade esta línea para justificar el texto
  },
});

export default Informacion;