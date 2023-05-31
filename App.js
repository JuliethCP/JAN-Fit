import React, { useState, useEffect} from 'react';
import { View, Text, Button, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import * as Font from 'expo-font';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
  

function HomeScreen() {
  const { colors } = useTheme();
  const textColor = colors.text;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: textColor }}>¡Esto es la página principal!</Text>
    </View>
  );
}

function Categorias() {
  const { colors } = useTheme();
  const textColor = colors.text;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: textColor }}>¡Esto es la pestaña 1!</Text>
    </View>
  );
}

function Buscar() {
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
      <Text style={{ color: textColor }}>¡Esto es la pestaña 3!</Text>
      <Button title={isDarkMode ? 'Modo Claro' : 'Modo Oscuro'} onPress={toggleDarkMode} />
    </View>
  );
}


const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#009188',
    text: '#000000', // Set the text color to black in light mode
    // Other custom colors in light mode...
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#009188',
    text: '#ffffff', // Set the text color to white in dark mode
    // Other custom colors in dark mode...
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

  const [fontsLoaded] = Font.useFonts({
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Opcionalmente, puedes mostrar un indicador de carga mientras se cargan las fuentes
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} /*options={{ headerShown: false }}*/ />
        <Stack.Screen
          name="Tabs"
          options={{ headerShown: false }}
        >
          {() => <Tabs setIsDarkMode={setIsDarkMode} isDarkMode={isDarkModeState} />}
        </Stack.Screen>
      </Stack.Navigator>
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
          } else if (route.name === 'Buscar') {
            iconName = 'search-outline';
          } else if (route.name === 'Categorias') {
            iconName = 'list-outline';
          } else if (route.name === 'Perfil') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Buscar" component={Buscar} />
      <Tab.Screen name="Categorias" component={Categorias} />
      <Tab.Screen
        name="Perfil"
      >
        {() => <Perfil setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}