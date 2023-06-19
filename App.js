import React, { useState, useEffect } from 'react';
import { View, Text, Button, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Home from './src/components/Home';
import Cronometro from './src/components/Cronometro';
import * as Font from 'expo-font';
import DatosUsuario from './src/components/DatosUsuario';
import Categories from './src/components/Categories';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Home />
      
    </View>
  );
}

function Categorias() {
  const { colors } = useTheme();
  const textColor = colors.text;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TiposRutinas />
    
    </View>
  );
}

function Ejercicios() {
  const { colors } = useTheme();
  const textColor = colors.text;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: textColor }}>¡Esto es la pestaña 2!</Text>
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
    <NavigationContainer theme={theme}>
      <View style={containerStyle}>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Ejercicios" component={Ejercicios} />
        <Stack.Screen name="InfoEjercicios" component={InfoEjercicios} />
          <Stack.Screen name="Tabs" options={{ headerShown: false }}>
            {() => <Tabs setIsDarkMode={setIsDarkMode} isDarkMode={isDarkModeState} />}
          </Stack.Screen>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
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

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Ejercicios') {
            iconName = 'search-outline';
          } else if (route.name === 'Rutinas') {
            iconName = 'list-outline';
          } else if (route.name === 'Perfil') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ejercicios" component={Ejercicios} />
      <Tab.Screen name="Rutinas" component={Rutinas} />
      <Tab.Screen name="Perfil">
        {() => <Perfil setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}