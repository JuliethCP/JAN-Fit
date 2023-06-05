import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

const DatosUsuario = () => {
  const [peso, setPeso] = useState('');
  const [alturaMetros, setAlturaMetros] = useState('');
  const [alturaCentimetros, setAlturaCentimetros] = useState('');
  const [imc, setIMC] = useState(0);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const theme = useTheme();

  const handleCalcularIMC = () => {
    if (peso && alturaMetros && alturaCentimetros) {
      const pesoKg = parseFloat(peso);
      const alturaTotal = parseFloat(alturaMetros) + parseFloat(alturaCentimetros) / 100;
      const imcCalculado = pesoKg / (alturaTotal * alturaTotal);
      setIMC(imcCalculado.toFixed(2));
      setMostrarResultados(true);
    } else {
      setIMC(0);
      setMostrarResultados(false);
    }
  };

  const guardarDatosEnDB = async () => {
    const datos = {
      peso: parseFloat(peso),
      altura: parseFloat(alturaMetros) + parseFloat(alturaCentimetros) / 100,
      imc: parseFloat(imc),
    };

    // Guardar los datos en la base de datos utilizando la función executeQuery
    try {
      const query = `INSERT INTO DatosIMC (peso, altura, imc) VALUES (${datos.peso}, ${datos.altura}, ${datos.imc})`;
      await executeQuery(query);
      alert('Los datos se han guardado correctamente en la base de datos.');
    } catch (error) {
      console.error('Error al guardar los datos en la base de datos:', error);
      alert('Ha ocurrido un error al guardar los datos en la base de datos.');
    }
  };

  const renderTablaItem = ({ item }) => (
    <View style={[styles.tablaItem, { backgroundColor: theme.colors.card }]}>
      <Text style={[styles.tablaItemTexto, { color: theme.colors.text }]}>{item.imc}</Text>
      <Text style={[styles.tablaItemTexto, { color: theme.colors.text }]}>{item.nivelPeso}</Text>
    </View>
  );

  const tablaData = [
    { imc: '< 18.5', nivelPeso: 'Bajo peso' },
    { imc: '18.5 - 24.9', nivelPeso: 'Peso saludable' },
    { imc: '25.0 - 29.9', nivelPeso: 'Sobrepeso' },
    { imc: '30.0 - 34.9', nivelPeso: 'Obesidad grado 1' },
    { imc: '35.0 - 39.9', nivelPeso: 'Obesidad grado 2' },
    { imc: '>= 40.0', nivelPeso: 'Obesidad grado 3' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.label, { color: theme.colors.text }]}>Peso (kg)</Text>
      <TextInput
        style={[styles.input, { backgroundColor: theme.colors.card, color: theme.colors.text }]}
        value={peso}
        onChangeText={(text) => setPeso(text)}
        keyboardType="numeric"
      />

      <Text style={[styles.label, { color: theme.colors.text }]}>Altura (m y cm)</Text>
      <View style={styles.alturaContainer}>
        <TextInput
          style={[styles.inputAltura, { backgroundColor: theme.colors.card, color: theme.colors.text }]}
          value={alturaMetros}
          onChangeText={(text) => setAlturaMetros(text)}
          keyboardType="numeric"
        />
        <Text style={[styles.alturaText, { color: theme.colors.text }]}>m</Text>
        <TextInput
          style={[styles.inputAltura, { backgroundColor: theme.colors.card, color: theme.colors.text }]}
          value={alturaCentimetros}
          onChangeText={(text) => setAlturaCentimetros(text)}
          keyboardType="numeric"
        />
        <Text style={[styles.alturaText, { color: theme.colors.text }]}>cm</Text>
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={handleCalcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      {mostrarResultados && (
        <React.Fragment>
          <Text style={[styles.resultadoIMC, { color: theme.colors.text }]}>IMC: {imc}</Text>

          <Text style={[styles.label, { color: theme.colors.text, marginTop: 24 }]}>Tabla de IMC</Text>
          <FlatList
            data={tablaData}
            renderItem={renderTablaItem}
            keyExtractor={(item) => item.imc}
            style={{ marginTop: 8 }}
          />

          <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={guardarDatosEnDB}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </React.Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  alturaContainer: {
    width: '80%', // Ajustar el ancho al 100%
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  inputAltura: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 1,

  },
  alturaText: {
    fontSize: 16,
    paddingHorizontal: 8,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  resultadoIMC: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tablaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  tablaItemTexto: {
    flex: 1,
    fontSize: 16,
  },
});

export default DatosUsuario;