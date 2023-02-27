import {View, StyleSheet, Animated, Button} from 'react-native';
import React, {useContext} from 'react';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMovingPosition} =
    useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBos,
          backgroundColor: colors.primary,
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
        color={colors.primary}
      />
      <Button onPress={fadeOut} title="Fade Out" color={colors.primary} />
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
    marginBottom: 20,
    width: 150,
    height: 150,
  },
});

//? https://reactnative.dev/docs/animated
