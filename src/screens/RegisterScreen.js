import React, {useState} from 'react';
import {
  SafeAreaView, ScrollView, View, Text, TextInput, Platform, TouchableOpacity,Pressable} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import InputField from '../components/InputField';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import RegistrationSVG from '../assets/images/registration.svg';
import CustomButton from '../components/CustomButton';
import axios from 'axios';


const RegisterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  //const [dobLabel, setDobLabel] = useState('Date of Birth');
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({type}, selectedDate) => {
    if (type === 'set') {
     const currentDate = selectedDate;
      setDate(currentDate);

      if(Platform.OS === 'android'){
        toggleDatePicker();
        setDateOfBirth(formatDate(currentDate));
        //setDobLabel(currentDate.toDateString());
      }

    }else{
      toggleDatePicker();
    }
  };

  const formatDate = (rawDate) => {
    let date = new Date(rawDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${day}/${month}/${year}`;
  };


  const handleRegister = async () => {
    try {
      if (!fullName || !email || !password || !confirmPassword || !dateOfBirth) {
        console.log(fullName, email, password, confirmPassword, dateOfBirth);
        alert('Faltan campos por completar.');
        return;
      }
  
      // Verificar que las contraseñas coincidan
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
  
       // Verificar si ya existe un registro con el mismo nombre y contraseña
    const existingUser = await axios.get('https://896e-190-211-119-6.ngrok.io/api/usuarios', {
      params: {
        nombre: fullName,
        correo: email
      }
    });

    if (existingUser.data.length > 0) {
      const userExists = existingUser.data.some(user => user.nombre === fullName && user.correo === email);
      if (userExists) {
        alert('Ya existe un usuario registrado con el mismo nombre y contraseña.');
        return;
      }
    }
  
      // Define el objeto de datos que se enviará en el cuerpo de la solicitud
      const data = {
        nombre: fullName,
        correo: email,
        contrasena: password,
        fechaNacimiento: dateOfBirth
      };
  
      axios.post(' https://1790-190-211-119-6.ngrok.io/api/usuarios', data)
        .then(response => {
          // Maneja la respuesta del servidor
        //  console.log(response.data);
          alert('Registro exitoso. ¡Te has registrado correctamente!');
        })
        .catch(error => {
          // Maneja el error de la solicitud
          if (error.response) {
            // El servidor respondió con un código de estado diferente de 2xx
            console.log('\nEl servidor respondió con un código de estado diferente de 2xx', error.response.data);
            console.log('\nEl servidor respondió con un código de estado diferente de 2xx', error.response.status);
          } else if (error.request) {
            // No se recibió ninguna respuesta del servidor
            console.log('\nNo se recibió ninguna respuesta del servidor', error.request);
          } else {
            // Ocurrió un error durante la configuración de la solicitud
            console.log('\nOcurrió un error durante la configuración de la solicitud', error.message);
          }
          console.log('otro error', error.config);
        });
  
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  


  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', paddingVertical: 20}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Register
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          value={fullName}
          onChangeText={setFullName}
        />

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          value={password}
          onChangeText={setPassword}
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />


        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />

            {showPicker && (
            <DateTimePicker
              mode='date'
              display='spinner'
              value={date}
              onChange={onChange}
              maximumDate={new Date('2005-01-01')}
              minimumDate={new Date('1980-01-01')}
              />
            )}

            {!showPicker && (
            <Pressable onPress={toggleDatePicker} >
                <TextInput
                  style={{flex: 1, marginLeft: 5}}
                  placeholder="Date of Birth"
                  placeholderTextColor="#666"
                  value={dateOfBirth}
                  onChangeText={setDateOfBirth}
                  editable={false}
                />
              </Pressable>
            )}
        </View>
   

        <CustomButton label={'Register'} onPress={handleRegister} />


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#009188', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
