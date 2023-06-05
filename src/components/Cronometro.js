import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, StatusBar, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    color: '#fff',
    fontSize: 90,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  picker: {
    flex: 1,
    maxWidth: 100,
    ...Platform.select({
      android: {
        color: '#fff',
        backgroundColor: 'rgba(92, 92, 92, 0.206)',
        marginLeft: 10,
        marginRight: 10,
      },
    }),
  },
  pickerItem: {
    color: '#fff',
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    borderWidth: 3,
    borderColor: '#89AAFF',
    width: screen.width / 5,
    height: screen.width / 5,
    borderRadius: screen.width / 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#89AAFF',
    
  },
});

const Cronometro = () => {
    const [selectedMinutes, setSelectedMinutes] = useState('0');
    const [selectedSeconds, setSelectedSeconds] = useState('0');
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [showTimeSelection, setShowTimeSelection] = useState(true);
    const countRef = useRef(null);
    const { colors } = useTheme();

  // Establecer los estilos con los colores del tema
  const containerStyle = {
    flex: 1,
    backgroundColor: colors.background,
  };
  
  const timerStyle = {
    color: colors.text,
  };
  
  const pickerStyle = {
    flex: 1,
    maxWidth: 100,
    ...Platform.select({
      android: {
        color: colors.text,
        backgroundColor: colors.card,
        marginLeft: 10,
        marginRight: 10,
      },
    }),
  };
  
  const pickerItemStyle = {
    color: colors.text,
    fontSize: 20,
  };
  
  const buttonStyle = {
    borderWidth: 5,
    borderColor: colors.primary,
  };
  
  const buttonText = {
    fontSize: 24,
    color: colors.primary,
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(countRef.current);
      setIsActive(false);
      setIsPaused(false);
      setShowTimeSelection(true);
    }
  }, [timer]);

  // function to handle the start button press
  const handleStart = () => {
    const totalSeconds = parseInt(selectedMinutes, 10) * 60 + parseInt(selectedSeconds, 10);
    
    if (totalSeconds === 0) {
      return;
    }
    
    setTimer(totalSeconds);
    setIsActive(true);
    setIsPaused(false);
    setShowTimeSelection(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setSelectedMinutes('0');
    setSelectedSeconds('0');
    setTimer(0);
    setShowTimeSelection(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(true);
  };

  const handleContinue = () => {
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };
  
  const handleAddMinute = () => {
    if (timer + 60 >= 3600) {
      setTimer(0);
    } else {
      setTimer((timer) => timer + 60);
    }
  };


  return (
    <View style={[styles.container, containerStyle]}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <View style={styles.timerContainer}>
        <Text style={[styles.timer, timerStyle]}>{formatTime(timer)}</Text>
      </View>
      {showTimeSelection && (
        <View style={styles.pickerContainer}>
          <Picker
            style={[styles.picker, pickerStyle]}
            itemStyle={pickerItemStyle}
            selectedValue={selectedMinutes}
            onValueChange={(itemValue) => setSelectedMinutes(itemValue)}
          >
            {Array.from({ length: 60 }).map((_, index) => (
              <Picker.Item key={index} label={index.toString()} value={index.toString()} />
            ))}
          </Picker>
          <Text style={[styles.pickerItem, { color: colors.text }]}>Minutes</Text>
          <Picker
            style={[styles.picker, pickerStyle]}
            itemStyle={pickerItemStyle}
            selectedValue={selectedSeconds}
            onValueChange={(itemValue) => setSelectedSeconds(itemValue)}
          >
            {Array.from({ length: 60 }).map((_, index) => (
              <Picker.Item key={index} label={index.toString()} value={index.toString()} />
            ))}
          </Picker>
          <Text style={[styles.pickerItem, { color: colors.text }]}>Seconds</Text>
        </View>
      )}
      <View style={styles.buttonContainer}>
        {!isActive && !isPaused ? (
          <TouchableOpacity
  style={[
    styles.button,
    buttonStyle,
    {
      borderWidth: 3,
      width: screen.width / 5,
      height: screen.width / 5,
      borderRadius: screen.width / 5,
    },
  ]}
  onPress={handleStart}
>
  <Text style={[styles.buttonText, buttonText]}>Start</Text>
</TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={[styles.button, styles.buttonPause]} onPress={handlePause}>
              <Icon name="pause" size={24} color="#89AAFF" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonReset]} onPress={handleReset}>
              <Icon name="undo" size={24} color="#89AAFF" />
            </TouchableOpacity>
            {isPaused && (
              <TouchableOpacity style={[styles.button, styles.buttonContinue]} onPress={handleContinue}>
                <Icon name="play" size={24} color="#89AAFF" />
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.button} onPress={handleAddMinute}>
              <Icon name="plus" size={24} color="#89AAFF" />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Cronometro;