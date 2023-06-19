import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const RutinasEjercicio = () => {
  const rutinasData = [
    {
      nombrerutina: "Rutina de entrenamiento de abdominales",
      ejercicios_asociados:
        "- Crunch de abdominales (Repeticiones: N/A, Tiempo: 00:01:00)\n- Sentadillas sumo (Repeticiones: N/A, Tiempo: 00:01:00)\n- Plancha lateral (Repeticiones: N /A, Tiempo: 00:01:00)\n- Mountain Climbers (Repeticiones: N/A, Tiempo: 00:01:00)\n- Plancha con elevación de pierna (Repeticiones: N/A, Tiempo: 00:01:00)\n- Plancha con rotación (Repeticiones: N/A, Tiempo: 00:01:00)\n- Caminata del oso (Repeticiones: N/A, Tiempo: 00:01:00)",
    },
    {
      nombrerutina: "Rutina de entrenamiento de pecho",
      ejercicios_asociados:
        "- Press militar (Repeticiones: 15, Tiempo: N/A)\n- Dominadas (Repeticiones: 15, Tiempo: N/A)\n- Flexiones de pecho (Repeticiones: 15, Tiempo: N/A)\n - Flexiones declinadas (Repeticiones: 20, Tiempo: N/A)\n- Fondos en paralelas (Repeticiones: 15, Tiempo: N/A)\n- Elevaciones laterales (Repeticiones: 15, Tiempo: N/A)\n- Plancha abdominal (Repeticiones: 15, Tiempo: N/A)",
    },
  ];

  const renderRutina = ({ item }) => {
    const ejercicios = item.ejercicios_asociados.split("\n");
    return (
      <TouchableOpacity
        style={styles.rutinaContainer}
        onPress={() => handleRutinaPress(item.id)}
      >
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
        style={{ alignSelf: "stretch" }}
      />
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
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
  },
  rutinaName: {
    fontSize: 18,
    fontWeight: "bold",
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
