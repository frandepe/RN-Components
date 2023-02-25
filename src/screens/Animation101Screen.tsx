import {View, StyleSheet, Animated, Button} from 'react-native';
import React from 'react';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBos,
          opacity,
          transform: [{translateX: position}],
        }}
      />
      <Button
        onPress={() => {
          fadeIn();
          startMovingPosition(100);
        }}
        title="Fade In"
      />
      <Button onPress={fadeOut} title="Fade Out" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBos: {
    backgroundColor: '#5856D6',
    marginBottom: 20,
    width: 150,
    height: 150,
  },
});

//? https://reactnative.dev/docs/animated
