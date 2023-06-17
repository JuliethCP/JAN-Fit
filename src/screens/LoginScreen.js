import React, {useState} from 'react';
import {
  SafeAreaView, ScrollView, View, Text, TextInput, Platform, TouchableOpacity,Pressable} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SvgLogin from '../assets/images/SvgLogin.js';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import md5 from 'md5';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Encriptar la contraseña ingresada por el usuario con MD5
      const encryptedPassword = md5(password);

      // Verificar si ya existe un registro con el mismo nombre de usuario y contraseña
      const existingUser = await axios.get('https://f47b-190-211-119-6.ngrok.io/api/usuarios', {
        params: {
          correo: email,
          contrasena: encryptedPassword, // Utilizar la contraseña encriptada
        },
      });

      if (existingUser.data.length > 0) {
        const userExists = existingUser.data.some(
          (user) => user.correo === email && user.contrasena === encryptedPassword
        );
        if (userExists) {
          alert('Inicio de sesión exitoso.');
          navigation.navigate('Tabs'); // Navigate to the Tabs screen
          return;
        }
      }else{
        alert('Usuario o contraseña incorrectos. Intente nuevamente o regístrese');
        return;
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
            height={400} // Ajusta la altura deseada
            width={700} // Ajusta el ancho deseado

            style={{ transform: [{ rotate: '-5deg' }] }}
          />

        </View>

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
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={(handleLogin)} />

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