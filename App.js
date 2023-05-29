import React, { useState } from 'react';
import { View, Text, Button, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

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

export default function App() {
  const deviceColorScheme = useColorScheme(); // Get the device's color scheme
  const isDarkMode = deviceColorScheme === 'dark'; // Set the initial mode based on the device's color scheme
  const [isDarkModeState, setIsDarkMode] = useState(isDarkMode);
  const theme = isDarkModeState ? darkTheme : lightTheme;

  return (
    <NavigationContainer theme={theme}>
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
        <Tab.Screen name="Perfil">
          {() => <Perfil setIsDarkMode={setIsDarkMode} isDarkMode={isDarkModeState} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
