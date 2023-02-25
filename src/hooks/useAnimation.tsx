import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  //? El Animated se suele trabajar con un useState, pero
  //? esta bueno el useRef porque no dispara el re-render
  //* Value es para manejar un solo valor
  //* ValueXY es para manejar 2 valores
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 300) => {
    //* El timing dispara una animación con tiempo
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true, //* Animacion acelerada por hardware
    }).start();
  };

  const fadeOut = () => {
    //* El timing dispara una animación con tiempo
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true, //* Animacion acelerada por hardware
    }).start();
  };

  const startMovingPosition = (
    initPosition: number,
    duration: number = 300,
  ) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      // easing: Easing.bounce,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition,
  };
};
