import React, { useState, useEffect } from 'react';
import { View, Text, Button, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MainM from './src/components/MainM';
import Cronometro from './src/components/Cronometro';
import * as Font from 'expo-font';
import DatosUsuario from './src/components/DatosUsuario';
import Ejercicios from './src/components/Ejercicios';
import Informacion from './src/components/Informacion';
import { useNavigation } from '@react-navigation/native';
import UserContext from './src/components/UserContext';
import TiposRutinas from './src/components/TipoRutinas';
import Rutine from './src/components/Rutinas';
import EjerciciosRutinas from './src/components/RutinasEjercicio';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
   <Stack.Navigator>
      <Stack.Screen name="Home" component={MainM}  />
      <Stack.Screen name="Ejercicios" component={Ejercicios} />
      <Stack.Screen name="Informacion" component={Informacion} />
    </Stack.Navigator>
  );
}

function RutinasScreen() {
  const { colors } = useTheme();
  const textColor = colors.text;

  return (
    <Stack.Navigator>
    <Stack.Screen name="TiposRutinas" component={TiposRutinas} />
    <Stack.Screen name="Rutinas" component={Rutine} />
    <Stack.Screen name="EjercicioRutinas" component={EjerciciosRutinas} />
  </Stack.Navigator>
  );
}

function EntrenamientoScreen() {
  const { colors } = useTheme();
  const textColor = colors.text;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Cronometro />
    </View>
  );
}

function Perfil({ setIsDarkMode, isDarkMode }) {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const { colors } = useTheme();
  const textColor = colors.text;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DatosUsuario />
      <Button title={isDarkMode ? 'Modo Claro' : 'Modo Oscuro'} onPress={toggleDarkMode} />
    </View>
  );
}

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    text: '#000000',
    card: '#E5E5E5',
    primary: '#009188',
    statusBarStyle: 'dark-content',
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
    text: '#FFFFFF',
    card: '#212121',
    primary: '#009188',
    statusBarStyle: 'light-content',
  },
};

async function loadCustomFonts() {
  await Font.loadAsync({
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
  });
}

export default function App() {
  const deviceColorScheme = useColorScheme();
  const isDarkMode = deviceColorScheme === 'dark';
  const [isDarkModeState, setIsDarkMode] = useState(isDarkMode);
  const theme = isDarkModeState ? darkTheme : lightTheme;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    loadCustomFonts();
  }, []);

  const { colors } = useTheme();

  const containerStyle = {
    flex: 1,
    backgroundColor: colors.background,
  };

  const [fontsLoaded] = Font.useFonts({
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Opcionalmente, puedes mostrar un indicador de carga mientras se cargan las fuentes
  }

//      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//<Stack.Screen name="Register" component={RegisterScreen} /*options={{ headerShown: false }}*/ />

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
    <NavigationContainer theme={theme}>
      <View style={containerStyle}>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} /*options={{ headerShown: false }}*/ />
          <Stack.Screen name="Tabs" options={{ headerShown: false }}>
            {() => <Tabs setIsDarkMode={setIsDarkMode} isDarkMode={isDarkModeState} />}
          </Stack.Screen>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
    </UserContext.Provider>
  );
}

function Tabs({ setIsDarkMode, isDarkMode }) {
  const { colors } = useTheme();
  const textColor = colors.text;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = 'home-outline';
          } else if (route.name === 'Entrenamiento') {
            iconName = 'fitness-outline';
          } else if (route.name === 'Rutinas') {
            iconName = 'list-outline';
          } else if (route.name === 'Perfil') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen}options={{ headerShown: false }} />
      <Tab.Screen name="Entrenamiento" component={EntrenamientoScreen} />
      <Tab.Screen name="Rutinas" component={RutinasScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil">
        {() => <Perfil setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}