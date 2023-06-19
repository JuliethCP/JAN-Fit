import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../components/UserContext';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SvgLogin from '../assets/images/SvgLogin.js';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import md5 from 'md5';
import axios from 'axios';

import DatosUsuario from '../components/DatosUsuario.js' // Importa el componente DatosUsuario

const LoginScreen = () => {
  const navigation = useNavigation();
  const { userData, setUserData } = useContext(UserContext);
  const [datosUsuario, setDatosUsuario] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Verificar si se han obtenido los datos del usuario
    if (userData) {
      navigation.navigate('Tabs'); // Navegar a la pantalla de Tabs
    }
  }, [userData, navigation]);

  const handleLogin = async () => {
    try {
      // Encriptar la contraseña ingresada por el usuario con MD5
      const encryptedPassword = md5(password);

      // Verificar si ya existe un usuario con el mismo correo electrónico y contraseña
      const existingUser = await axios.get(
        'https://d0eb-190-211-119-6.ngrok.io/api/usuarios',
        {
          params: {
            correo: email,
            contrasena: encryptedPassword, // Utilizar la contraseña encriptada
          },
        }
      );
      
      if (existingUser.data.length > 0) {
        const userExists = existingUser.data.find(
          (user) =>
            user.correo === email && user.contrasena === encryptedPassword
        );
       
        if (userExists) {
          alert('Inicio de sesión exitoso.');

          // Assign user info to userData
          const userInfo = {
            id: userExists.id,
            nombre: userExists.nombre,
            correo: userExists.correo,
            fechanacimiento: userExists.fechanacimiento,
            // Add other user data fields as needed
          };
          console.log(userInfo);
          //<DatosUsuario userInfo={userInfo} /> // Agrega el componente DatosUsuario
          setDatosUsuario(userInfo);
          navigation.navigate('Tabs'); // Navigate to the Tabs screen
          return;
        }
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
            <View style={{alignItems: 'center'}}>
              <SvgLogin
                height={400} // Ajustar la altura deseada
                width={700} // Ajustar el ancho deseado
                style={{ transform: [{ rotate: '-5deg' }] }}
              />
            </View>
            {datosUsuario && <DatosUsuario userInfo={datosUsuario} />}
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 28,
                fontWeight: '500',
                color: '#333',
                marginBottom: 30,
              }}>
              Login
            </Text>

            <InputField
              label={'Email'}
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
             
              fieldButtonFunction={() => {}}
            />

            <CustomButton label={'Login'} onPress={handleLogin} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <Text>New to the app?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{color: '#009188', fontWeight: '700'}}> Register</Text>
              </TouchableOpacity>
            </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
