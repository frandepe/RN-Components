import React from 'react';
import {Alert, Button, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Título',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => Alert.alert('Ok Pressed'),
        },
      ],
      //* La opción de cancelable es para que la persona tenga la posibildiad
      //* de cerrar la alerta tocando fuera de la misma
      //* No se recomienda usar
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
  };

  //! Este prompt solo funciona en ios
  //   const showPrompt = () => {
  //     Alert.prompt(
  //       '¿Está seguro?',
  //       'Esta acción no se puede revertir',
  //       (valor: string) => console.log('info: ', valor),
  //       'login-password',
  //       'Hola Mundo',
  //       'number-pad',
  //     );
  //   };

  //* Esto se podria reemplazar por un modal usando herramientas nativas de react-native y no paquete de terceros
  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar alerta" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

//? https://reactnative.dev/docs/alert
